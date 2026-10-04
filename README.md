# ✈️ TripGenius AI

> AI-powered full-stack travel planner that creates personalized travel itineraries based on your destination, dates, budget, number of travelers, and travel style.

## 🌍 Overview

TripGenius AI is a full-stack travel planning web application that helps users plan personalized trips using Artificial Intelligence.

Users can create an account, generate AI-powered itineraries, view weather information, explore destination maps, save trips, modify saved trips, and manage their travel plans from a personal dashboard.

The application combines a modern React frontend with a Spring Boot backend, MySQL database, JWT authentication, and Gemini AI.

---

## ✨ Features

### 🔐 Authentication
- User registration
- Secure login
- JWT-based authentication
- BCrypt password hashing
- Protected routes
- Logout functionality

### 🤖 AI Trip Planning
- Gemini AI-powered itinerary generation
- Personalized day-by-day travel plans
- Dynamic itinerary based on selected dates
- Budget-aware planning
- Travel-style-based recommendations
- Traveler-aware itinerary generation

### 🌦️ Travel Information
- Current weather information
- Temperature
- Humidity
- Wind speed
- Interactive destination map
- Hotels section
- Restaurants section
- Attractions section

### 💾 Trip Management
- Save generated trips
- View saved trips
- Modify trips
- Delete trips
- My Trips dashboard
- User-specific trip storage

---

## 🛠️ Tech Stack

### Frontend
- React
- Vite
- JavaScript
- Tailwind CSS
- React Router
- React Icons

### Backend
- Java
- Spring Boot
- Spring Data JPA
- Spring Security
- JWT
- BCrypt
- Maven

### Database
- MySQL

### AI & APIs
- Google Gemini API
- Weather API
- Map integration

---

## 🏗️ Architecture

```text
                    TripGenius AI
                          │
             ┌────────────┴────────────┐
             │                         │
        React + Vite              Spring Boot
        Frontend                  Backend API
             │                         │
             │                  ┌──────┴──────┐
             │                  │             │
             │                JWT          Gemini AI
             │              Security
             │                  │
             └────────────┬─────┘
                          │
                        MySQL
                          │
                    Users + Trips