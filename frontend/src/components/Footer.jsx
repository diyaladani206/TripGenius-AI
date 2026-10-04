import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaGithub,
  FaPlaneDeparture,
} from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer id="contact" className="bg-slate-950 pt-16 pb-8 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-10">

          {/* Logo */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <FaPlaneDeparture className="text-3xl text-teal-400" />
              <h2 className="text-2xl font-bold">TripGenius AI</h2>
            </div>

            <p className="leading-7 text-slate-400">
              Your intelligent travel companion powered by AI.
              Plan smarter, travel better, and create unforgettable memories.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>

            <ul className="space-y-3 text-slate-400">
              <li><Link className="transition hover:text-white" to="/">Home</Link></li>
              <li><a className="transition hover:text-white" href="/#destinations">Destinations</a></li>
              <li><Link className="transition hover:text-white" to="/dashboard">AI Planner</Link></li>
              <li><a className="transition hover:text-white" href="/#about">About</a></li>
              <li><a className="transition hover:text-white" href="mailto:support@tripgenius.ai">Contact</a></li>
            </ul>
          </div>

          {/* Destinations */}
          <div>
            <h3 className="text-xl font-semibold mb-4">
              Popular Destinations
            </h3>

            <ul className="space-y-3 text-slate-400">
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
              <FaInstagram className="hover:text-teal-300 cursor-pointer transition" />
              <FaLinkedin className="hover:text-blue-400 cursor-pointer transition" />
              <FaGithub className="hover:text-gray-300 cursor-pointer transition" />
            </div>

            <p className="text-slate-400">
              Email: support@tripgenius.ai
            </p>
          </div>

        </div>

        <hr className="my-10 border-slate-800" />

        <div className="flex flex-col items-center justify-between text-slate-400 md:flex-row">
          <p>© 2026 TripGenius AI. All rights reserved.</p>

          <p className="mt-4 md:mt-0">
            Built for more thoughtful travel.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;