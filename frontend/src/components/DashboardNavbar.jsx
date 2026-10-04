import { FaPlaneDeparture, FaUserCircle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

function DashboardNavbar() {
  const navigate = useNavigate();
  const { currentUser, logout } = useAuth();

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link
          to="/dashboard"
          className="flex items-center gap-3"
        >
          <FaPlaneDeparture className="text-3xl text-blue-600" />

          <span className="text-2xl font-bold text-blue-600">
            TripGenius AI
          </span>
        </Link>

        {/* Navigation */}
        <div className="flex items-center gap-7">

          <Link
            to="/dashboard"
            className="text-gray-700 hover:text-blue-600 font-medium transition"
          >
            Home
          </Link>

          <Link
            to="/my-trips"
            className="text-gray-700 hover:text-blue-600 font-medium transition"
          >
            My Trips
          </Link>

          {/* Profile */}
          <span className="text-gray-700 font-medium">{currentUser?.fullName}</span>
          <span className="text-blue-600 text-3xl" title="Profile">
            <FaUserCircle />
          </span>
          <button
            onClick={() => {
              logout();
              navigate("/", { replace: true });
            }}
            className="text-gray-700 hover:text-blue-600 font-medium transition"
          >
            Log out
          </button>

        </div>

      </div>
    </nav>
  );
}

export default DashboardNavbar;