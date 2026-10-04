import { useNavigate } from "react-router-dom";
import DestinationCard from "./DestinationCard";

import dubai from "../assets/images/dubai.jpg";
import bali from "../assets/images/bali.jpg";
import japan from "../assets/images/japan.jpg";
import paris from "../assets/images/paris.jpg";
import singapore from "../assets/images/singapore.jpg";
import maldives from "../assets/images/maldives.jpg";
import switzerland from "../assets/images/switzerland.jpg";
import london from "../assets/images/london.jpg";

function Destinations() {
  const navigate = useNavigate();

  const places = [
    {
      image: dubai,
      name: "Dubai",
      country: "United Arab Emirates",
      description: "Skyline views, desert horizons and warm Arabian hospitality.",
      price: "85,000",
    },
    {
      image: bali,
      name: "Bali",
      country: "Indonesia",
      description: "Quiet temples, volcanic landscapes and tropical coastlines.",
      price: "45,000",
    },
    {
      image: japan,
      name: "Tokyo",
      country: "Japan",
      description: "A dynamic blend of thoughtful tradition and modern energy.",
      price: "1,20,000",
    },
    {
      image: paris,
      name: "Paris",
      country: "France",
      description: "Art-filled avenues, neighbourhood cafés and timeless design.",
      price: "1,80,000",
    },
    {
      image: singapore,
      name: "Singapore",
      country: "Singapore",
      description: "A garden city shaped by bold architecture and brilliant food.",
      price: "95,000",
    },
    {
      image: maldives,
      name: "Maldives",
      country: "Maldives",
      description: "Clear lagoons, coral reefs and island days at an easy pace.",
      price: "1,35,000",
    },
    {
      image: switzerland,
      name: "Switzerland",
      country: "Switzerland",
      description: "Alpine rail journeys, mountain lakes and crisp air.",
      price: "1,65,000",
    },
    {
      image: london,
      name: "London",
      country: "United Kingdom",
      description: "Royal landmarks, independent galleries and riverside walks.",
      price: "1,55,000",
    },
  ];

  return (
    <section id="destinations" className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mb-11 flex flex-col gap-6 sm:mb-14 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-teal-700">Explore</p>
            <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl md:text-5xl">
              Popular <span className="text-blue-600">Destinations</span>
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
              Discover breathtaking places hand-picked for unforgettable adventures.
            </p>
          </div>
        </div>

        <div className="mx-auto grid auto-rows-fr grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {places.map((place) => (
            <DestinationCard
              key={place.name}
              onView={() => navigate("/dashboard", { state: { destination: place.name } })}
              {...place}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Destinations;