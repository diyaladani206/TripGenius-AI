package com.tripgenius.backend.service;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.google.genai.Client;
import com.google.genai.types.GenerateContentResponse;
import com.tripgenius.backend.dto.ItineraryResponse;

import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AIService {

   private final Client client;
private final ObjectMapper objectMapper;

public AIService() {
    this.client = new Client();
    this.objectMapper = new ObjectMapper();
}


    public List<ItineraryResponse.DayPlan> generateItinerary(
            String destination, 
            String startDate,
            String endDate,
            int travelers,
            double budget,
            String travelStyle) {

        String prompt = """
                You are TripGenius AI, an expert travel planner.

                Create a personalized day-by-day travel itinerary.

                Trip information:

                Destination: %s
                Start Date: %s
                End Date: %s
                Number of Travelers: %d
                Budget: ₹%.0f
                Travel Style: %s

                IMPORTANT:
                Calculate the exact number of days from the start date
                and end date.

                Create exactly one itinerary object for every day.

                Each day must contain:
                - day
                - title
                - activities

                The activities field must contain exactly 4 activities.

                Consider:
                - destination
                - budget
                - number of travelers
                - travel style
                - realistic sightseeing
                - local food
                - practical travel activities

                Return ONLY valid JSON.

                Do NOT use markdown.
                Do NOT use ```json.
                Do NOT add explanations before or after the JSON.

                JSON format:

                [
                  {
                    "day": "Day 1",
                    "title": "Arrival & Exploration",
                    "activities": [
                      "Activity 1",
                      "Activity 2",
                      "Activity 3",
                      "Activity 4"
                    ]
                  }
                ]
                """.formatted(
                destination,
                startDate,
                endDate,
                travelers,
                budget,
                travelStyle
        );

        GenerateContentResponse response =
                client.models.generateContent(
                        "gemini-3.8-flash",
                        prompt,
                        null
                );

        String aiResponse = response.text();

        try {

            // Remove markdown code fences if Gemini accidentally adds them
            aiResponse = aiResponse
                    .replace("```json", "")
                    .replace("```", "")
                    .trim();

            return objectMapper.readValue(
                    aiResponse,
                    new TypeReference<List<ItineraryResponse.DayPlan>>() {}
            );

        } catch (Exception e) {

            throw new RuntimeException(
                    "Failed to parse Gemini itinerary response: "
                            + aiResponse,
                    e
            );
        }
    }
}