import { useNavigate } from "react-router-dom";
import { useState } from "react";

function TripPlannerForm() {
  const navigate = useNavigate();

  const [trip, setTrip] = useState({
    destination: "",
    startDate: "",
    endDate: "",
    travelers: 1,
    budget: "",
    travelStyle: "",
  });

  const handleChange = (e) => {
    setTrip({
      ...trip,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      console.log("Sending trip to backend:", trip);

      const response = await fetch(
        "http://localhost:8080/api/trips/generate",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(trip),
        }
      );

      if (!response.ok) {
        throw new Error("Backend request failed");
      }

      const data = await response.json();

      console.log("Backend Response:", data);

      navigate("/trip-results", {
        state: {
          trip: trip,
          itinerary: data,
        },
      });
    } catch (error) {
      console.error("Error generating trip:", error);

      alert(
        "Could not generate trip. Please make sure the Spring Boot backend is running."
      );
    }
  };

  return (
    <section className="bg-white rounded-3xl shadow-lg p-8">

      {/* Heading */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-slate-800">
          Plan Your Trip ✈️
        </h2>

        <p className="text-gray-500 mt-2">
          Tell us about your dream trip and let AI create your itinerary.
        </p>
      </div>

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >

        {/* Destination */}
        <div>
          <label className="font-semibold text-gray-700">
            📍 Destination
          </label>

          <input
            type="text"
            name="destination"
            value={trip.destination}
            onChange={handleChange}
            placeholder="e.g. Dubai, UAE"
            required
            className="w-full mt-2 p-3 border border-gray-300 rounded-xl outline-none focus:border-blue-500"
          />
        </div>

        {/* Budget */}
        <div>
          <label className="font-semibold text-gray-700">
            💰 Budget
          </label>

          <input
            type="number"
            name="budget"
            value={trip.budget}
            onChange={handleChange}
            placeholder="e.g. 50000"
            required
            className="w-full mt-2 p-3 border border-gray-300 rounded-xl outline-none focus:border-blue-500"
          />
        </div>

        {/* Start Date */}
        <div>
          <label className="font-semibold text-gray-700">
            📅 Start Date
          </label>

          <input
            type="date"
            name="startDate"
            value={trip.startDate}
            onChange={handleChange}
            required
            className="w-full mt-2 p-3 border border-gray-300 rounded-xl outline-none focus:border-blue-500"
          />
        </div>

        {/* End Date */}
        <div>
          <label className="font-semibold text-gray-700">
            📅 End Date
          </label>

          <input
            type="date"
            name="endDate"
            value={trip.endDate}
            onChange={handleChange}
            required
            className="w-full mt-2 p-3 border border-gray-300 rounded-xl outline-none focus:border-blue-500"
          />
        </div>

        {/* Travelers */}
        <div>
          <label className="font-semibold text-gray-700">
            👥 Travelers
          </label>

          <input
            type="number"
            name="travelers"
            min="1"
            value={trip.travelers}
            onChange={handleChange}
            required
            className="w-full mt-2 p-3 border border-gray-300 rounded-xl outline-none focus:border-blue-500"
          />
        </div>

        {/* Travel Style */}
        <div>
          <label className="font-semibold text-gray-700">
            🎯 Travel Style
          </label>

          <select
            name="travelStyle"
            value={trip.travelStyle}
            onChange={handleChange}
            required
            className="w-full mt-2 p-3 border border-gray-300 rounded-xl outline-none focus:border-blue-500"
          >
            <option value="">Select Travel Style</option>
            <option value="Adventure">🏔️ Adventure</option>
            <option value="Luxury">✨ Luxury</option>
            <option value="Budget">💰 Budget</option>
            <option value="Family">👨‍👩‍👧 Family</option>
            <option value="Romantic">❤️ Romantic</option>
            <option value="Solo">🎒 Solo</option>
          </select>
        </div>

        {/* Generate Button */}
        <div className="md:col-span-2">
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold text-lg py-4 rounded-xl transition cursor-pointer"
          >
            ✨ Generate AI Trip
          </button>
        </div>

      </form>
    </section>
  );
}

export default TripPlannerForm;