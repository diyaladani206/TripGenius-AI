package com.tripgenius.backend.repository;

import com.tripgenius.backend.model.Trip;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface TripRepository extends JpaRepository<Trip, Long> {
    List<Trip> findAllByUser_IdOrderByCreatedAtDesc(Long userId);

    Optional<Trip> findByIdAndUser_Id(Long id, Long userId);
}