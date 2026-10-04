import { apiRequest } from "./api";

export function registerAccount({ fullName, email, password }) {
	return apiRequest("/api/auth/register", {
		method: "POST",
		body: JSON.stringify({ fullName, email, password }),
	});
}

export function loginAccount({ email, password }) {
	return apiRequest("/api/auth/login", {
		method: "POST",
		body: JSON.stringify({ email, password }),
	});
}
