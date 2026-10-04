import heroImage from "../assets/images/hero.jpg";

function Hero() {
  return (
    <section
    className="relative min-h-screen bg-cover bg-center flex items-center"
      style={{
        backgroundImage: `url(${heroImage})`,
      }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/55 to-blue-900/50"></div>
<div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center justify-center px-6 pt-24 text-center">
        <p className="mb-4 rounded-full bg-white/20 px-6 py-2 text-white backdrop-blur-md">
          ✈️ AI Powered Travel Planner
        </p>

        <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight drop-shadow-lg">
  Discover Your
  <br />
  Next Adventure
</h1>

        <p className="mt-8 max-w-3xl text-lg md:text-xl text-gray-200 leading-8">
  Let AI create the perfect itinerary based on your budget,
  travel style, weather, attractions, and hidden gems —
  all in just a few seconds.
</p>

        <div className="mt-12 flex flex-wrap justify-center gap-5">

          <button className="rounded-full bg-blue-600 px-8 py-4 font-semibold text-white transition hover:scale-105 hover:bg-blue-700">
            🚀 Start Planning
          </button>

          <button className="rounded-full border-2 border-white px-8 py-4 font-semibold text-white transition hover:bg-white hover:text-black">
            🌍 Explore Destinations
          </button>

        </div>

      </div>
    </section>
  );
}

export default Hero;