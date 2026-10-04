package com.tripgenius.backend.dto;

public record AuthResponse(String token, UserResponse user) {
    public record UserResponse(Long id, String fullName, String email) {
    }
}