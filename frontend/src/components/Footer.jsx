import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaGithub,
  FaPlaneDeparture,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-10">

          {/* Logo */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <FaPlaneDeparture className="text-3xl text-blue-500" />
              <h2 className="text-2xl font-bold">TripGenius AI</h2>
            </div>

            <p className="text-gray-400 leading-7">
              Your intelligent travel companion powered by AI.
              Plan smarter, travel better, and create unforgettable memories.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>

            <ul className="space-y-3 text-gray-400">
              <li><a href="#">Home</a></li>
              <li><a href="#">Destinations</a></li>
              <li><a href="#">Planner</a></li>
              <li><a href="#">About</a></li>
            </ul>
          </div>

          {/* Destinations */}
          <div>
            <h3 className="text-xl font-semibold mb-4">
              Popular Destinations
            </h3>

            <ul className="space-y-3 text-gray-400">
              <li>Bali</li>
              <li>Paris</li>
              <li>Tokyo</li>
              <li>Dubai</li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-xl font-semibold mb-4">
              Connect With Us
            </h3>

            <div className="flex gap-5 text-2xl mb-5">
              <FaFacebook className="hover:text-blue-500 cursor-pointer transition" />
              <FaInstagram className="hover:text-pink-500 cursor-pointer transition" />
              <FaLinkedin className="hover:text-blue-400 cursor-pointer transition" />
              <FaGithub className="hover:text-gray-300 cursor-pointer transition" />
            </div>

            <p className="text-gray-400">
              Email: support@tripgenius.ai
            </p>
          </div>

        </div>

        <hr className="my-10 border-gray-700" />

        <div className="flex flex-col md:flex-row justify-between items-center text-gray-400">
          <p>© 2026 TripGenius AI. All rights reserved.</p>

          <p className="mt-4 md:mt-0">
            Made with ❤️ by Diya Ladani
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;