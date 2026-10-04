package com.tripgenius.backend.service;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.tripgenius.backend.dto.ItineraryResponse;
import com.tripgenius.backend.dto.SavedTripRequest;
import com.tripgenius.backend.dto.SavedTripResponse;
import com.tripgenius.backend.model.Trip;
import com.tripgenius.backend.model.User;
import com.tripgenius.backend.repository.TripRepository;
import com.tripgenius.backend.repository.UserRepository;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.server.ResponseStatusException;

import java.time.LocalDate;
import java.time.format.DateTimeParseException;
import java.util.List;

@Service
public class TripService {

    private final TripRepository tripRepository;
    private final UserRepository userRepository;
    private final ObjectMapper objectMapper = new ObjectMapper();

    public TripService(TripRepository tripRepository, UserRepository userRepository) {
        this.tripRepository = tripRepository;
        this.userRepository = userRepository;
    }

    @Transactional
    public SavedTripResponse saveTrip(String email, SavedTripRequest request) {
        User user = findUser(email);
        LocalDate startDate = parseDate(request.startDate());
        LocalDate endDate = parseDate(request.endDate());
        if (endDate.isBefore(startDate)) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "End date cannot be before start date.");
        }

        Trip trip = new Trip();
        trip.setUser(user);
        trip.setDestination(request.destination().trim());
        trip.setStartDate(startDate);
        trip.setEndDate(endDate);
        trip.setTravelers(request.travelers());
        trip.setBudget(request.budget());
        trip.setTravelStyle(request.travelStyle().trim());
        try {
            trip.setItineraryJson(objectMapper.writeValueAsString(request.itinerary()));
        } catch (JsonProcessingException exception) {
            throw new IllegalStateException("Unable to save the generated itinerary.", exception);
        }
        return toResponse(tripRepository.save(trip));
    }

    @Transactional(readOnly = true)
    public List<SavedTripResponse> getTripsForUser(String email) {
        User user = findUser(email);
        return tripRepository.findAllByUser_IdOrderByCreatedAtDesc(user.getId())
                .stream()
                .map(this::toResponse)
                .toList();
    }

    @Transactional
    public void deleteTrip(String email, Long tripId) {
        User user = findUser(email);
        Trip trip = tripRepository.findByIdAndUser_Id(tripId, user.getId())
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Trip not found."));
        tripRepository.delete(trip);
    }

    private User findUser(String email) {
        return userRepository.findByEmail(email)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.UNAUTHORIZED, "User account no longer exists."));
    }

    private LocalDate parseDate(String value) {
        try {
            return LocalDate.parse(value);
        } catch (DateTimeParseException exception) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Trip dates must use ISO format (YYYY-MM-DD).", exception);
        }
    }

    private SavedTripResponse toResponse(Trip trip) {
        try {
            List<ItineraryResponse.DayPlan> itinerary = objectMapper.readValue(
                    trip.getItineraryJson(),
                    new TypeReference<>() { }
            );
            return new SavedTripResponse(
                    trip.getId(),
                    trip.getDestination(),
                    trip.getStartDate(),
                    trip.getEndDate(),
                    trip.getTravelers(),
                    trip.getBudget(),
                    trip.getTravelStyle(),
                    itinerary,
                    trip.getCreatedAt()
            );
        } catch (JsonProcessingException exception) {
            throw new IllegalStateException("Unable to load the saved itinerary.", exception);
        }
    }
}