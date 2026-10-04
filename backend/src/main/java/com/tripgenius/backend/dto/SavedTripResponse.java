package com.tripgenius.backend.dto;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;

public record SavedTripResponse(
        Long id,
        String destination,
        LocalDate startDate,
        LocalDate endDate,
        int travelers,
        double budget,
        String travelStyle,
        List<ItineraryResponse.DayPlan> itinerary,
        LocalDateTime createdAt
) {
}