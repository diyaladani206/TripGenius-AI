import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { FaCalendarAlt, FaCompass, FaMapMarkerAlt, FaRobot, FaUsers, FaWallet } from "react-icons/fa";
import { useAuth } from "../hooks/useAuth";
import { apiRequest } from "../services/api";

function TripPlannerForm() {
  const navigate = useNavigate();
  const location = useLocation();
  const { currentUser } = useAuth();
  const [authRequired, setAuthRequired] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  const [trip, setTrip] = useState(() => ({
    destination: location.state?.destination || location.state?.trip?.destination || "",
    startDate: location.state?.trip?.startDate || "",
    endDate: location.state?.trip?.endDate || "",
    travelers: location.state?.trip?.travelers || 1,
    budget: location.state?.trip?.budget || "",
    travelStyle: location.state?.trip?.travelStyle || "",
  }));

  const handleChange = (e) => {
    setTrip({
      ...trip,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!currentUser || !localStorage.getItem("authToken")) {
      setAuthRequired(true);
      return;
    }

    setAuthRequired(false);
    setError("");
    setSubmitting(true);
    try {
      const data = await apiRequest("/api/trips/generate", {
        method: "POST",
        body: JSON.stringify(trip),
      });

      navigate("/trip-results", {
        state: {
          trip: trip,
          itinerary: data,
        },
      });
    } catch (error) {
      console.error("Error generating trip:", error);
      setError(error.message || "Could not generate your trip. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-7 lg:p-8">

      {/* Heading */}
      <div className="mb-8">
        <h2 className="flex items-center gap-3 text-2xl font-extrabold text-slate-900 sm:text-3xl">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-teal-50 text-lg text-teal-700"><FaRobot aria-hidden="true" /></span>
          Plan Your Trip
        </h2>

        <p className="text-gray-500 mt-2">
          Tell us about your dream trip and let AI create your itinerary.
        </p>
      </div>

      {authRequired && (
        <div role="alert" className="mb-6 rounded-xl border border-blue-200 bg-blue-50 p-5">
          <p className="font-medium leading-6 text-slate-800">
            Please log in or create an account to generate your personalized AI trip.
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link to="/login" className="rounded-lg bg-blue-700 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-800">Login</Link>
            <Link to="/register" className="rounded-lg border border-blue-300 bg-white px-5 py-2.5 text-sm font-semibold text-blue-800 transition hover:bg-blue-100">Create Account</Link>
          </div>
        </div>
      )}

      {error && <p role="alert" className="mb-6 rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-700">{error}</p>}

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:gap-6"
      >

        {/* Destination */}
        <div>
          <label className="flex items-center gap-2 text-sm font-semibold text-slate-700">
            <FaMapMarkerAlt className="text-teal-700" aria-hidden="true" /> Destination
          </label>

          <input
            type="text"
            name="destination"
            value={trip.destination}
            onChange={handleChange}
            placeholder="e.g. Dubai, UAE"
            required
            className="mt-2 h-12 w-full rounded-xl border border-slate-300 bg-white px-3 text-slate-800 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
          />
        </div>

        {/* Budget */}
        <div>
          <label className="flex items-center gap-2 text-sm font-semibold text-slate-700">
            <FaWallet className="text-teal-700" aria-hidden="true" /> Budget
          </label>

          <input
            type="number"
            name="budget"
            value={trip.budget}
            onChange={handleChange}
            placeholder="e.g. 50000"
            required
            className="mt-2 h-12 w-full rounded-xl border border-slate-300 bg-white px-3 text-slate-800 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
          />
        </div>

        {/* Start Date */}
        <div>
          <label className="flex items-center gap-2 text-sm font-semibold text-slate-700">
            <FaCalendarAlt className="text-teal-700" aria-hidden="true" /> Start Date
          </label>

          <input
            type="date"
            name="startDate"
            value={trip.startDate}
            onChange={handleChange}
            required
            className="mt-2 h-12 w-full rounded-xl border border-slate-300 bg-white px-3 text-slate-800 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
          />
        </div>

        {/* End Date */}
        <div>
          <label className="flex items-center gap-2 text-sm font-semibold text-slate-700">
            <FaCalendarAlt className="text-teal-700" aria-hidden="true" /> End Date
          </label>

          <input
            type="date"
            name="endDate"
            value={trip.endDate}
            onChange={handleChange}
            required
            className="mt-2 h-12 w-full rounded-xl border border-slate-300 bg-white px-3 text-slate-800 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
          />
        </div>

        {/* Travelers */}
        <div>
          <label className="flex items-center gap-2 text-sm font-semibold text-slate-700">
            <FaUsers className="text-teal-700" aria-hidden="true" /> Travelers
          </label>

          <input
            type="number"
            name="travelers"
            min="1"
            value={trip.travelers}
            onChange={handleChange}
            required
            className="mt-2 h-12 w-full rounded-xl border border-slate-300 bg-white px-3 text-slate-800 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
          />
        </div>

        {/* Travel Style */}
        <div>
          <label className="flex items-center gap-2 text-sm font-semibold text-slate-700">
            <FaCompass className="text-teal-700" aria-hidden="true" /> Travel Style
          </label>

          <select
            name="travelStyle"
            value={trip.travelStyle}
            onChange={handleChange}
            required
            className="mt-2 h-12 w-full rounded-xl border border-slate-300 bg-white px-3 text-slate-800 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
          >
            <option value="">Select Travel Style</option>
            <option value="Adventure">Adventure</option>
            <option value="Luxury">Luxury</option>
            <option value="Budget">Budget</option>
            <option value="Family">Family</option>
            <option value="Romantic">Romantic</option>
            <option value="Solo">Solo</option>
          </select>
        </div>

        {/* Generate Button */}
        <div className="sm:col-span-2">
          <button
            type="submit"
            disabled={submitting}
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 py-4 text-base font-bold text-white transition hover:bg-blue-700 disabled:cursor-wait disabled:opacity-70 sm:text-lg"
          >
            {!submitting && <FaRobot aria-hidden="true" />}
            {submitting ? "Generating your trip..." : "Generate AI Trip"}
          </button>
        </div>

      </form>
    </section>
  );
}

export default TripPlannerForm;