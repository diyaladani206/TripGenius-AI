package com.tripgenius.backend.controller;

import com.tripgenius.backend.dto.ItineraryResponse;
import com.tripgenius.backend.dto.SavedTripRequest;
import com.tripgenius.backend.dto.SavedTripResponse;
import com.tripgenius.backend.dto.TripRequest;
import com.tripgenius.backend.service.AIService;
import com.tripgenius.backend.service.TripService;

import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.time.temporal.ChronoUnit;
import java.util.List;
import java.security.Principal;

@RestController
@RequestMapping("/api/trips")
public class TripController {

    private final AIService aiService;
        private final TripService tripService;

        public TripController(AIService aiService, TripService tripService) {
        this.aiService = aiService;
                this.tripService = tripService;
    }

    @GetMapping("/test")
    public String test() {
        return "TripGenius AI Backend is Working! 🚀";
    }

        @GetMapping
        public List<SavedTripResponse> getMyTrips(Principal principal) {
                return tripService.getTripsForUser(principal.getName());
        }

        @PostMapping
        public ResponseEntity<SavedTripResponse> saveTrip(
                        @Valid @RequestBody SavedTripRequest request,
                        Principal principal) {
                return ResponseEntity.status(HttpStatus.CREATED)
                                .body(tripService.saveTrip(principal.getName(), request));
        }

        @DeleteMapping("/{tripId}")
        public ResponseEntity<Void> deleteTrip(@PathVariable Long tripId, Principal principal) {
                tripService.deleteTrip(principal.getName(), tripId);
                return ResponseEntity.noContent().build();
        }

    @PostMapping("/generate")
    public ItineraryResponse generateTrip(
            @RequestBody TripRequest request) {

        // Validate dates
        LocalDate startDate =
                LocalDate.parse(request.getStartDate());

        LocalDate endDate =
                LocalDate.parse(request.getEndDate());

        if (endDate.isBefore(startDate)) {
            throw new IllegalArgumentException(
                    "End date cannot be before start date."
            );
        }

        // Calculate trip duration
        long totalDays =
                ChronoUnit.DAYS.between(startDate, endDate) + 1;

        // Ask Gemini AI to generate itinerary
        List<ItineraryResponse.DayPlan> itinerary =
                aiService.generateItinerary(
                        request.getDestination(),
                        request.getStartDate(),
                        request.getEndDate(),
                        request.getTravelers(),
                        request.getBudget(),
                        request.getTravelStyle()
                );

        // Create response
        ItineraryResponse response =
                new ItineraryResponse();

        response.setDestination(
                request.getDestination()
        );

        response.setTravelStyle(
                request.getTravelStyle()
        );

        response.setTravelers(
                request.getTravelers()
        );

        response.setBudget(
                request.getBudget()
        );

        response.setItinerary(itinerary);

        System.out.println(
                "AI itinerary generated for "
                        + request.getDestination()
                        + " for "
                        + totalDays
                        + " days."
        );

        return response;
    }
}