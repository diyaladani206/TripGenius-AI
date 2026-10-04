package com.tripgenius.backend.dto;

import java.util.List;

public class ItineraryResponse {

    private String destination;
    private String travelStyle;
    private int travelers;
    private double budget;
    private List<DayPlan> itinerary;

    public String getDestination() {
        return destination;
    }

    public void setDestination(String destination) {
        this.destination = destination;
    }

    public String getTravelStyle() {
        return travelStyle;
    }

    public void setTravelStyle(String travelStyle) {
        this.travelStyle = travelStyle;
    }

    public int getTravelers() {
        return travelers;
    }

    public void setTravelers(int travelers) {
        this.travelers = travelers;
    }

    public double getBudget() {
        return budget;
    }

    public void setBudget(double budget) {
        this.budget = budget;
    }

    public List<DayPlan> getItinerary() {
        return itinerary;
    }

    public void setItinerary(List<DayPlan> itinerary) {
        this.itinerary = itinerary;
    }

    public static class DayPlan {

        private String day;
        private String title;
        private List<String> activities;

        public String getDay() {
            return day;
        }

        public void setDay(String day) {
            this.day = day;
        }

        public String getTitle() {
            return title;
        }

        public void setTitle(String title) {
            this.title = title;
        }

        public List<String> getActivities() {
            return activities;
        }

        public void setActivities(List<String> activities) {
            this.activities = activities;
        }
    }
}