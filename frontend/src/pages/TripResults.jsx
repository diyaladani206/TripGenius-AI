import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaUsers,
  FaWallet,
  FaArrowLeft,
  FaHotel,
  FaUtensils,
  FaCamera,

} from "react-icons/fa";
import WeatherCard from "../components/WeatherCard";
import MapCard from "../components/MapCard";  
import BudgetCard from "../components/BudgetCard";
import { saveTrip } from "../services/tripService";

function TripResults() {
  const location = useLocation();
  const navigate = useNavigate();

  const trip = location.state?.trip;
  const backendItinerary = location.state?.itinerary;
  const itinerary = backendItinerary?.itinerary || [];
  const [saving, setSaving] = useState(false);
  const [saveError, setSaveError] = useState("");
  const [saved, setSaved] = useState(Boolean(trip?.id));

  const handleSaveTrip = async () => {
    setSaving(true);
    setSaveError("");
    try {
      await saveTrip({ ...trip, itinerary });
      setSaved(true);
    } catch (error) {
      setSaveError(error.message);
    } finally {
      setSaving(false);
    }
  };


  // If someone directly opens /trip-results
  if (!trip) {
    return (
      <div className="min-h-screen bg-slate-100 flex flex-col items-center justify-center px-6">
        <h1 className="text-3xl font-bold text-slate-800">
          No Trip Details Found
        </h1>

        <p className="text-gray-500 mt-3">
          Create a trip from your dashboard first.
        </p>

        <button
          onClick={() => navigate("/dashboard")}
          className="mt-6 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl"
        >
          Back to Dashboard
        </button>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen bg-slate-100">

      {/* Top Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-8 py-5 flex items-center justify-between">

          <h1 className="text-2xl font-bold text-blue-600">
            ✈️ TripGenius AI
          </h1>

          <button
            onClick={() => navigate("/dashboard")}
            className="flex items-center gap-2 text-gray-700 hover:text-blue-600"
          >
            <FaArrowLeft />
            Dashboard
          </button>

        </div>
      </div>

      <main className="max-w-7xl mx-auto p-8">

        {/* Hero */}
        <div className="bg-gradient-to-r from-blue-600 to-cyan-500 rounded-3xl p-10 text-white shadow-lg">

          <p className="font-semibold text-blue-100">
            ✨ YOUR PERSONALIZED ITINERARY
          </p>

          <h1 className="text-4xl md:text-5xl font-bold mt-3">
            {trip.destination} Adventure
          </h1>

          <p className="mt-4 text-lg text-blue-50">
            Your personalized {trip.travelStyle.toLowerCase()} trip is ready.
          </p>

        </div>

        {/* Trip Information */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-5 mt-8">

          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <FaMapMarkerAlt className="text-blue-600 text-2xl" />

            <p className="text-gray-500 mt-4">
              Destination
            </p>

            <h3 className="font-bold text-xl mt-1">
              {trip.destination}
            </h3>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <FaWallet className="text-blue-600 text-2xl" />

            <p className="text-gray-500 mt-4">
              Budget
            </p>

            <h3 className="font-bold text-xl mt-1">
              ₹{trip.budget}
            </h3>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <FaUsers className="text-blue-600 text-2xl" />

            <p className="text-gray-500 mt-4">
              Travelers
            </p>

            <h3 className="font-bold text-xl mt-1">
              {trip.travelers}
            </h3>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <FaCalendarAlt className="text-blue-600 text-2xl" />

            <p className="text-gray-500 mt-4">
              Travel Style
            </p>

            <h3 className="font-bold text-xl mt-1">
              {trip.travelStyle}
            </h3>
          </div>

        </div>

        {/* Dates */}
        <div className="bg-white rounded-2xl p-6 shadow-sm mt-6">

          <h2 className="text-xl font-bold">
            📅 Travel Dates
          </h2>

          <p className="text-gray-600 mt-2">
            {trip.startDate} → {trip.endDate}
          </p>

        </div>

        {/* Itinerary Heading */}
        <div className="mt-12">

          <h2 className="text-3xl font-bold text-slate-800">
            🗓️ Your Trip Itinerary
          </h2>

          <p className="text-gray-500 mt-2">
            A suggested day-by-day plan for your adventure.
          </p>

        </div>

        {/* Itinerary Cards */}
        <div className="space-y-6 mt-8">

          {itinerary.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-sm p-7 border border-gray-100"
            >

              <div className="flex items-center gap-4">

                <div className="bg-blue-600 text-white font-bold px-5 py-3 rounded-xl">
                  {item.day}
                </div>

                <h3 className="text-2xl font-bold text-slate-800">
                  {item.title}
                </h3>

              </div>

              <div className="mt-6 space-y-4">

                {item.activities.map((activity, activityIndex) => (
                  <div
                    key={activityIndex}
                    className="flex items-center gap-3 bg-slate-50 p-4 rounded-xl"
                  >
                    <span className="text-blue-600">
                      ●
                    </span>

                    <p className="text-gray-700">
                      {activity}
                    </p>
                  </div>
                ))}

              </div>

            </div>
          ))}

        </div>

        {/* Recommendations */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">

          <div className="bg-white p-7 rounded-2xl shadow-sm">
            <FaHotel className="text-3xl text-blue-600" />

            <h3 className="text-xl font-bold mt-4">
              Hotels
            </h3>

            <p className="text-gray-500 mt-2">
              AI hotel recommendations will appear here.
            </p>
          </div>

          <div className="bg-white p-7 rounded-2xl shadow-sm">
            <FaUtensils className="text-3xl text-blue-600" />

            <h3 className="text-xl font-bold mt-4">
              Restaurants
            </h3>

            <p className="text-gray-500 mt-2">
              Discover restaurants based on your preferences.
            </p>
          </div>

          <div className="bg-white p-7 rounded-2xl shadow-sm">
            <FaCamera className="text-3xl text-blue-600" />

            <h3 className="text-xl font-bold mt-4">
              Attractions
            </h3>

            <p className="text-gray-500 mt-2">
              Explore popular attractions and hidden gems.
            </p>
          </div>

        </div>
      <div className="mt-10">
  <WeatherCard destination={trip.destination} />
</div>
<div className="mt-10">
  <MapCard destination={trip.destination} />
</div>
<div className="mt-10">
  <BudgetCard budget={trip.budget} />
</div>
        {/* Bottom Buttons */}
        <div className="flex flex-wrap gap-4 mt-10 mb-10">

          <button
            onClick={() => navigate("/dashboard")}
            className="bg-white border border-blue-600 text-blue-600 px-7 py-3 rounded-xl font-semibold hover:bg-blue-50"
          >
            ✏️ Modify Trip
          </button>

          <button
            onClick={handleSaveTrip}
            disabled={saving || saved}
            className="bg-blue-600 text-white px-7 py-3 rounded-xl font-semibold hover:bg-blue-700 disabled:opacity-60"
          >
            {saving ? "Saving..." : saved ? "❤️ Trip Saved" : "❤️ Save Trip"}
          </button>

        </div>
        {saveError && <p role="alert" className="text-red-600 mb-10">{saveError}</p>}

      </main>

    </div>
  );
}

export default TripResults;