package com.tripgenius.backend.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Positive;
import jakarta.validation.constraints.PositiveOrZero;
import jakarta.validation.constraints.Size;

import java.util.List;

public record SavedTripRequest(
        @NotBlank @Size(max = 255) String destination,
        @NotBlank String startDate,
        @NotBlank String endDate,
        @Positive int travelers,
        @PositiveOrZero double budget,
        @NotBlank @Size(max = 100) String travelStyle,
        @NotNull @NotEmpty List<ItineraryResponse.DayPlan> itinerary
) {
}