import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaCompass,
  FaUsers,
  FaWallet,
  FaHeart,
  FaPencilAlt,
  FaRobot,

} from "react-icons/fa";
import WeatherCard from "../components/WeatherCard";
import MapCard from "../components/MapCard";  
import BudgetCard from "../components/BudgetCard";
import { saveTrip } from "../services/tripService";
import DashboardNavbar from "../components/DashboardNavbar";
import TripRecommendations from "../components/TripRecommendations";

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
      <div className="min-h-screen bg-slate-50">
        <DashboardNavbar />
        <div className="flex min-h-[70vh] flex-col items-center justify-center px-6 text-center">
          <h1 className="text-3xl font-bold text-slate-900">
            No Trip Details Found
          </h1>

          <p className="mt-3 text-gray-500">
            Create a trip from your dashboard first.
          </p>

          <button
            onClick={() => navigate("/dashboard")}
            className="mt-6 rounded-xl bg-blue-600 px-6 py-3 font-bold text-white hover:bg-blue-700"
          >
            Back to Dashboard
          </button>
        </div>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen bg-slate-50">

      <DashboardNavbar />

      <main className="mx-auto max-w-7xl px-4 py-7 sm:px-6 sm:py-10 lg:px-8">

        {/* Hero */}
        <div className="rounded-2xl border border-blue-100 bg-gradient-to-r from-blue-50 via-white to-teal-50 p-6 sm:p-9">

          <p className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-teal-700">
            <FaRobot aria-hidden="true" /> Your personalized itinerary
          </p>

          <h1 className="mt-3 text-3xl font-extrabold text-slate-900 sm:text-4xl md:text-5xl">
            {trip.destination} Adventure
          </h1>

          <p className="mt-3 text-base text-slate-600 sm:text-lg">
            Your personalized {trip.travelStyle.toLowerCase()} trip is ready.
          </p>

        </div>

        {/* Trip Information */}
        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">

          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            <FaMapMarkerAlt className="text-2xl text-teal-700" />

            <p className="text-gray-500 mt-4">
              Destination
            </p>

            <h3 className="font-bold text-xl mt-1">
              {trip.destination}
            </h3>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            <FaWallet className="text-2xl text-teal-700" />

            <p className="text-gray-500 mt-4">
              Budget
            </p>

            <h3 className="font-bold text-xl mt-1">
              ₹{trip.budget}
            </h3>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            <FaUsers className="text-2xl text-teal-700" />

            <p className="text-gray-500 mt-4">
              Travelers
            </p>

            <h3 className="font-bold text-xl mt-1">
              {trip.travelers}
            </h3>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            <FaCompass className="text-2xl text-teal-700" />

            <p className="text-gray-500 mt-4">
              Travel Style
            </p>

            <h3 className="font-bold text-xl mt-1">
              {trip.travelStyle}
            </h3>
          </div>

        </div>

        {/* Dates */}
        <div className="mt-5 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">

          <h2 className="text-xl font-bold">
            <FaCalendarAlt className="mr-2 inline text-teal-700" aria-hidden="true" /> Travel Dates
          </h2>

          <p className="text-gray-600 mt-2">
            {trip.startDate} → {trip.endDate}
          </p>

        </div>

        {/* Itinerary Heading */}
        <div className="mt-12">

          <h2 className="text-2xl font-extrabold text-slate-900 sm:text-3xl">
            Your Trip Itinerary
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
              className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-7"
            >

              <div className="flex items-center gap-4">

                <div className="rounded-xl bg-blue-50 px-4 py-3 font-bold text-blue-800">
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
                    className="flex items-start gap-3 rounded-xl bg-slate-50 p-4"
                  >
                    <span className="text-blue-600">
                      <FaCompass aria-hidden="true" />
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

        <TripRecommendations destination={trip.destination} travelStyle={trip.travelStyle} />
      <div className="mt-8">
  <WeatherCard destination={trip.destination} />
</div>
<div className="mt-8">
  <MapCard destination={trip.destination} />
</div>
<div className="mt-8">
  <BudgetCard budget={trip.budget} />
</div>
        {/* Bottom Buttons */}
        <div className="mb-10 mt-8 flex flex-wrap gap-3">

          <button
            onClick={() => navigate("/dashboard", { state: { trip } })}
            className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-6 py-3 font-bold text-slate-700 transition hover:border-blue-500 hover:text-blue-700"
          >
            <FaPencilAlt aria-hidden="true" /> Modify Trip
          </button>

          <button
            onClick={handleSaveTrip}
            disabled={saving || saved}
            className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-bold text-white transition hover:bg-blue-700 disabled:opacity-60"
          >
            <FaHeart aria-hidden="true" /> {saving ? "Saving..." : saved ? "Trip Saved" : "Save Trip"}
          </button>

        </div>
        {saveError && <p role="alert" className="text-red-600 mb-10">{saveError}</p>}

      </main>

    </div>
  );
}

export default TripResults;