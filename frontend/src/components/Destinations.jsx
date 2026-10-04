import DestinationCard from "./DestinationCard";

import bali from "../assets/images/bali.jpg";
import japan from "../assets/images/japan.jpg";
import paris from "../assets/images/paris.jpg";

function Destinations() {

  const places = [
    {
      image: bali,
      name: "Bali",
      country: "Indonesia",
      price: "45,000"
    },
    {
      image: japan,
      name: "Tokyo",
      country: "Japan",
      price: "1,20,000"
    },
    {
      image: paris,
      name: "Paris",
      country: "France",
      price: "1,80,000"
    }
  ];

  return (

    <section className="py-24 bg-gray-100">

      <div className="max-w-7xl mx-auto px-8">

       <div className="text-center mb-16">
  <h2 className="text-5xl font-bold text-gray-900">
    Explore Popular Destinations
  </h2>

  <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto">
    Discover breathtaking places hand-picked for unforgettable adventures.
  </p>
</div>

        <div className="grid md:grid-cols-3 gap-10">

          {places.map((place) => (
            <DestinationCard
              key={place.name}
              {...place}
            />
          ))}

        </div>

      </div>

    </section>

  );
}

export default Destinations;