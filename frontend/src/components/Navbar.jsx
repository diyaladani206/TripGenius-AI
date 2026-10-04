import { FaPlaneDeparture } from "react-icons/fa";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const scrollToSection = (id) => {
    setMenuOpen(false);
    if (location.pathname !== "/") {
      navigate(`/#${id}`);
      return;
    }
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const links = [
    { label: "Home", to: "/" },
    { label: "Destinations", section: "destinations" },
    { label: "AI Planner", to: "/dashboard" },
    { label: "About", section: "about" },
    { label: "Contact", section: "contact" },
  ];

  const linkClass = "rounded-md px-2 py-2 text-sm font-semibold text-slate-600 transition hover:text-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-600";

  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-white/50 bg-white/90 shadow-sm shadow-slate-900/5 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">

        {/* Logo */}
        <Link to="/" onClick={() => setMenuOpen(false)} className="flex shrink-0 items-center gap-2.5">
          <FaPlaneDeparture className="text-2xl text-blue-700 sm:text-3xl" />
          <span className="text-xl font-extrabold tracking-tight text-slate-900 sm:text-2xl">TripGenius <span className="text-teal-700">AI</span></span>
        </Link>

        {/* Navigation */}
        <ul className="hidden items-center gap-3 lg:flex xl:gap-5">
          {links.map((item) => (
            <li key={item.label}>
              {item.section ? (
                <button className={linkClass} onClick={() => scrollToSection(item.section)}>{item.label}</button>
              ) : (
                <Link className={`${linkClass} ${location.pathname === item.to ? "text-blue-700" : ""}`} to={item.to}>{item.label}</Link>
              )}
            </li>
          ))}
        </ul>

        {/* Buttons */}
        <div className="hidden items-center gap-3 sm:flex">
          <Link to="/login" className="rounded-full border border-slate-300 px-5 py-2 text-sm font-semibold text-slate-700 transition hover:border-blue-600 hover:text-blue-700">Login</Link>
          <Link to="/register" className="rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-bold text-white shadow-sm transition hover:bg-blue-700">Sign Up</Link>
        </div>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-lg text-slate-700 transition hover:bg-slate-100 lg:hidden"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {menuOpen && (
        <div className="border-t border-slate-200 bg-white px-4 pb-5 pt-2 shadow-lg sm:px-6 lg:hidden">
          <ul className="mx-auto flex max-w-7xl flex-col gap-1">
            {links.map((item) => (
              <li key={item.label}>
                {item.section ? (
                  <button className={`${linkClass} w-full text-left`} onClick={() => scrollToSection(item.section)}>{item.label}</button>
                ) : (
                  <Link className={`${linkClass} block`} to={item.to} onClick={() => setMenuOpen(false)}>{item.label}</Link>
                )}
              </li>
            ))}
          </ul>
          <div className="mx-auto mt-4 flex max-w-7xl gap-3 sm:hidden">
            <Link to="/login" onClick={() => setMenuOpen(false)} className="flex-1 rounded-full border border-slate-300 px-4 py-2.5 text-center text-sm font-semibold text-slate-700">Login</Link>
            <Link to="/register" onClick={() => setMenuOpen(false)} className="flex-1 rounded-xl bg-blue-600 px-4 py-2.5 text-center text-sm font-bold text-white">Sign Up</Link>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;