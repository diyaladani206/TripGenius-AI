import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { deleteTrip, getMyTrips } from "../services/tripService";

function MyTrips() {
  const navigate = useNavigate();
  const [trips, setTrips] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    getMyTrips()
      .then(setTrips)
      .catch((requestError) => setError(requestError.message))
      .finally(() => setLoading(false));
  }, []);

  const handleDelete = async (tripId) => {
    try {
      await deleteTrip(tripId);
      setTrips((currentTrips) => currentTrips.filter((trip) => trip.id !== tripId));
    } catch (requestError) {
      setError(requestError.message);
    }
  };

  return (
    <div className="min-h-screen bg-slate-100">

      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">

          <h1 className="text-2xl font-bold text-blue-600">
            ✈️ TripGenius AI
          </h1>

          <button
            onClick={() => navigate("/dashboard")}
            className="text-gray-700 hover:text-blue-600 font-medium"
          >
            ← Dashboard
          </button>

        </div>
      </div>

      {/* Content */}
      <main className="max-w-7xl mx-auto p-8">

        <h1 className="text-4xl font-bold text-slate-800">
          🧳 My Trips
        </h1>

        <p className="text-gray-500 mt-2">
          View and manage your travel plans.
        </p>

        {loading && <p className="mt-8 text-gray-500">Loading your trips...</p>}
        {error && <p role="alert" className="mt-8 text-red-600">{error}</p>}

        {!loading && !error && trips.length === 0 ? (

          <div className="bg-white rounded-2xl shadow-sm p-12 mt-8 text-center">

            <div className="text-6xl">
              🌍
            </div>

            <h2 className="text-2xl font-bold mt-5">
              No Trips Yet
            </h2>

            <p className="text-gray-500 mt-2">
              Start planning your first adventure.
            </p>

            <button
              onClick={() => navigate("/dashboard")}
              className="mt-6 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold"
            >
              ✨ Plan a Trip
            </button>

          </div>

        ) : !loading && trips.length > 0 ? (

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">

            {trips.map((trip) => (

              <div
                key={trip.id}
                className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition"
              >

                <div className="text-4xl">
                  🌍
                </div>

                <h2 className="text-2xl font-bold text-slate-800 mt-4">
                  {trip.destination}
                </h2>

                <p className="text-gray-500 mt-2">
                  📅 {trip.startDate} → {trip.endDate}
                </p>

                <div className="mt-5 space-y-2 text-gray-700">

                  <p>
                    💰 <strong>Budget:</strong>{" "}
                    ₹{Number(trip.budget).toLocaleString("en-IN")}
                  </p>

                  <p>
                    👥 <strong>Travelers:</strong>{" "}
                    {trip.travelers}
                  </p>

                  <p>
                    🎯 <strong>Style:</strong>{" "}
                    {trip.travelStyle}
                  </p>

                </div>

                <button
                  onClick={() => navigate("/trip-results", {
                    state: { trip, itinerary: { itinerary: trip.itinerary } },
                  })}
                  className="flex-1 mt-6 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold"
                >
                  View Trip →
                </button>
                <button
                  onClick={() => handleDelete(trip.id)}
                  className="mt-6 border border-red-500 text-red-600 hover:bg-red-50 px-4 py-3 rounded-xl font-semibold"
                  aria-label={`Delete trip to ${trip.destination}`}
                >
                  Delete
                </button>

              </div>

            ))}

          </div>

        ) : null}

      </main>

    </div>
  );
}

export default MyTrips;