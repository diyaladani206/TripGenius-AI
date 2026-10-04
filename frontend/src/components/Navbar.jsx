import { FaPlaneDeparture } from "react-icons/fa";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-4">

        {/* Logo */}
        <div className="flex items-center gap-3">
          <FaPlaneDeparture className="text-3xl text-blue-600" />
          <h1 className="text-3xl font-bold text-blue-600">
            TripGenius AI
          </h1>
        </div>

        {/* Navigation */}
        <ul className="hidden md:flex gap-8 font-medium text-gray-700">
          <li className="hover:text-blue-600 cursor-pointer">Home</li>
          <li className="hover:text-blue-600 cursor-pointer">Destinations</li>
          <li className="hover:text-blue-600 cursor-pointer">AI Planner</li>
          <li className="hover:text-blue-600 cursor-pointer">About</li>
          <li className="hover:text-blue-600 cursor-pointer">Contact</li>
        </ul>

        {/* Buttons */}
        <div className="flex gap-4">
         <Link
  to="/login"
  className="border border-blue-600 px-5 py-2 rounded-full text-blue-600 hover:bg-blue-600 hover:text-white transition"
>
  Login
</Link>

<Link
  to="/register"
  className="bg-blue-600 px-5 py-2 rounded-full text-white hover:bg-blue-700 transition"
>
  Sign Up
</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;