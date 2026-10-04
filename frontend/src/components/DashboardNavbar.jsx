import { useEffect, useRef, useState } from "react";
import {
  FaPlaneDeparture,
  FaSignOutAlt,
  FaSuitcase,
  FaUser,
  FaUserCircle,
} from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

function DashboardNavbar() {
  const navigate = useNavigate();
  const { currentUser, logout } = useAuth();
  const [profileOpen, setProfileOpen] = useState(false);
  const profileMenuRef = useRef(null);

  useEffect(() => {
    const closeOnOutsideClick = (event) => {
      if (!profileMenuRef.current?.contains(event.target)) {
        setProfileOpen(false);
      }
    };
    const closeOnEscape = (event) => {
      if (event.key === "Escape") setProfileOpen(false);
    };

    document.addEventListener("mousedown", closeOnOutsideClick);
    document.addEventListener("keydown", closeOnEscape);
    return () => {
      document.removeEventListener("mousedown", closeOnOutsideClick);
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, []);

  const closeAndNavigate = (path) => {
    setProfileOpen(false);
    navigate(path);
  };

  const handleLogout = () => {
    setProfileOpen(false);
    logout();
    navigate("/login", { replace: true });
  };

  return (
    <nav className="sticky top-0 z-40 border-b border-slate-200 bg-white/95 shadow-sm backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6">
        <Link to="/" className="flex items-center gap-3">
          <FaPlaneDeparture className="shrink-0 text-2xl text-blue-600 sm:text-3xl" />
          <span className="text-lg font-extrabold text-slate-900 sm:text-2xl">TripGenius <span className="text-teal-700">AI</span></span>
        </Link>

        <div className="flex items-center gap-3 sm:gap-6">
          <Link to="/" className="text-sm font-semibold text-slate-600 transition hover:text-blue-700 sm:text-base">
            Home
          </Link>
          <Link to="/my-trips" className="text-sm font-semibold text-slate-600 transition hover:text-blue-700 sm:text-base">
            My Trips
          </Link>
          <span className="hidden max-w-36 truncate text-sm font-medium text-gray-700 sm:inline">
            {currentUser?.fullName}
          </span>

          <div className="relative" ref={profileMenuRef}>
            <button
              type="button"
              onClick={() => setProfileOpen((open) => !open)}
              className="flex h-10 w-10 items-center justify-center rounded-full text-2xl text-blue-700 transition hover:bg-blue-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 sm:h-11 sm:w-11 sm:text-3xl"
              aria-label="Open profile menu"
              aria-haspopup="menu"
              aria-expanded={profileOpen}
            >
              <FaUserCircle />
            </button>

            <div
              role="menu"
              aria-label="Profile menu"
              className={`absolute right-0 top-full z-50 mt-3 w-56 origin-top-right rounded-xl border border-slate-200 bg-white p-2 shadow-lg shadow-slate-900/10 transition duration-150 ease-out ${profileOpen ? "visible translate-y-0 scale-100 opacity-100" : "invisible pointer-events-none -translate-y-1 scale-95 opacity-0"}`}
            >
              <div className="border-b border-slate-100 px-3 py-2">
                <p className="truncate text-sm font-semibold text-slate-900">{currentUser?.fullName}</p>
                <p className="truncate text-xs text-slate-500">{currentUser?.email}</p>
              </div>
              <button
                type="button"
                role="menuitem"
                onClick={() => closeAndNavigate("/profile")}
                className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left text-sm text-slate-700 transition hover:bg-slate-50 hover:text-blue-700"
              >
                <FaUser className="text-teal-700" /> Profile
              </button>
              <button
                type="button"
                role="menuitem"
                onClick={() => closeAndNavigate("/my-trips")}
                className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left text-sm text-slate-700 transition hover:bg-slate-50 hover:text-blue-700"
              >
                <FaSuitcase className="text-teal-700" /> My Trips
              </button>
              <button
                type="button"
                role="menuitem"
                onClick={handleLogout}
                className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left text-sm text-slate-700 transition hover:bg-red-50 hover:text-red-700"
              >
                <FaSignOutAlt className="text-red-500" /> Logout
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default DashboardNavbar;