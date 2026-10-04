import { apiRequest } from "./api";

export function getMyTrips() {
	return apiRequest("/api/trips");
}

export function saveTrip(trip) {
	return apiRequest("/api/trips", {
		method: "POST",
		body: JSON.stringify(trip),
	});
}

export function deleteTrip(tripId) {
	return apiRequest(`/api/trips/${tripId}`, { method: "DELETE" });
}
