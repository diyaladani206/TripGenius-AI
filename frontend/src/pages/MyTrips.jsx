import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaCalendarAlt, FaMapMarkerAlt, FaPencilAlt, FaTrashAlt, FaUsers, FaWallet, FaSuitcase } from "react-icons/fa";
import { deleteTrip, getMyTrips } from "../services/tripService";
import DashboardNavbar from "../components/DashboardNavbar";

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
    <div className="min-h-screen bg-slate-50">
      <DashboardNavbar />

      {/* Content */}
      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-10 lg:px-8">

        <p className="text-xs font-bold uppercase tracking-[0.16em] text-teal-700">Your travel library</p>
        <h1 className="mt-2 text-3xl font-extrabold text-slate-900 sm:text-4xl">My Trips</h1>

        <p className="text-gray-500 mt-2">
          View and manage your travel plans.
        </p>

        {loading && <p className="mt-8 text-gray-500">Loading your trips...</p>}
        {error && <p role="alert" className="mt-8 text-red-600">{error}</p>}

        {!loading && !error && trips.length === 0 ? (

          <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-sm sm:p-12">

            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-teal-50 text-2xl text-teal-700">
              <FaSuitcase aria-hidden="true" />
            </div>

            <h2 className="mt-5 text-2xl font-bold text-slate-900">
              No Trips Yet
            </h2>

            <p className="mt-2 text-slate-600">
              Start planning your first adventure.
            </p>

            <button
              onClick={() => navigate("/dashboard")}
              className="mt-6 rounded-xl bg-blue-600 px-6 py-3 font-bold text-white transition hover:bg-blue-700"
            >
              Plan a Trip
            </button>

          </div>

        ) : !loading && trips.length > 0 ? (

          <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">

            {trips.map((trip) => (

              <div
                key={trip.id}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-200 hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-lg"
              >

                <div className="flex items-start justify-between gap-4">
                  <div className="flex min-w-0 items-center gap-3">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-700"><FaMapMarkerAlt aria-hidden="true" /></span>
                    <h2 className="truncate text-xl font-bold text-slate-900">{trip.destination}</h2>
                  </div>
                  <span className="rounded-full bg-teal-50 px-3 py-1 text-xs font-semibold text-teal-800">{trip.travelStyle}</span>
                </div>

                <p className="mt-4 flex items-center gap-2 text-sm text-slate-600">
                  <FaCalendarAlt className="text-teal-700" aria-hidden="true" />
                  {trip.startDate} <span aria-hidden="true">to</span> {trip.endDate}
                </p>

                <div className="mt-5 grid grid-cols-2 gap-3 border-y border-slate-100 py-4">
                  <p className="flex items-center gap-2 text-sm text-slate-600">
                    <FaWallet className="text-blue-700" aria-hidden="true" />
                    <span>₹{Number(trip.budget).toLocaleString("en-IN")}</span>
                  </p>
                  <p className="flex items-center gap-2 text-sm text-slate-600">
                    <FaUsers className="text-blue-700" aria-hidden="true" />
                    <span>{trip.travelers} travelers</span>
                  </p>
                </div>

                <div className="mt-4 grid grid-cols-3 gap-2">
                  <button
                    onClick={() => navigate("/trip-results", { state: { trip, itinerary: { itinerary: trip.itinerary } } })}
                    className="rounded-lg bg-blue-600 px-3 py-2.5 text-sm font-bold text-white transition hover:bg-blue-700"
                  >
                    View Trip
                  </button>
                  <button
                    onClick={() => navigate("/dashboard", { state: { trip } })}
                    className="inline-flex items-center justify-center gap-1 rounded-lg border border-slate-300 px-2 py-2.5 text-sm font-semibold text-slate-700 transition hover:border-teal-500 hover:text-teal-800"
                  >
                    <FaPencilAlt aria-hidden="true" /> Modify
                  </button>
                  <button
                    onClick={() => handleDelete(trip.id)}
                    className="inline-flex items-center justify-center gap-1 rounded-lg border border-red-200 px-2 py-2.5 text-sm font-semibold text-red-700 transition hover:bg-red-50"
                    aria-label={`Delete trip to ${trip.destination}`}
                  >
                    <FaTrashAlt aria-hidden="true" /> Delete
                  </button>
                </div>

              </div>

            ))}

          </div>

        ) : null}

      </main>

    </div>
  );
}

export default MyTrips;