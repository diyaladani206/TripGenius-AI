import heroImage from "../assets/images/hero.jpg";
import { useNavigate } from "react-router-dom";

function Hero() {
  const navigate = useNavigate();

  const scrollToDestinations = () => {
    document.getElementById("destinations")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      className="relative flex min-h-[700px] items-center bg-cover bg-center pb-16 pt-28 sm:min-h-[740px] md:min-h-[min(850px,100svh)] md:pb-20 md:pt-32"
      style={{
        backgroundImage: `url(${heroImage})`,
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/80 to-white/10"></div>
      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-start justify-center px-5 text-left sm:px-8">
        <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-teal-200 bg-white/80 px-4 py-2 text-xs font-bold uppercase tracking-[0.12em] text-teal-800 shadow-sm backdrop-blur-sm sm:text-sm">
          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-teal-100 text-teal-700">✦</span>
          AI Powered Travel Planner
        </p>

        <h1 className="max-w-3xl text-5xl font-extrabold leading-[1.05] tracking-tight text-slate-900 sm:text-6xl md:text-7xl">
          Discover Your
          <br />
          <span className="text-blue-700">Next Adventure</span>
        </h1>

        <p className="mt-6 max-w-xl text-base leading-7 text-slate-700 sm:text-lg md:leading-8">
          Let AI create the perfect itinerary based on your budget, travel style,
          weather, attractions, and hidden gems — all in just a few seconds.
        </p>

        <div className="mt-8 flex w-full flex-col justify-start gap-3 sm:w-auto sm:flex-row sm:gap-4 md:mt-9">
          <button
            onClick={() => navigate("/dashboard")}
            className="rounded-xl bg-blue-600 px-7 py-3.5 font-semibold text-white shadow-md shadow-blue-900/15 transition duration-200 hover:-translate-y-0.5 hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-700"
          >
            Start Planning
          </button>

          <button
            onClick={scrollToDestinations}
            className="rounded-xl border border-slate-300 bg-white/70 px-7 py-3.5 font-semibold text-slate-800 transition duration-200 hover:-translate-y-0.5 hover:border-teal-500 hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-700"
          >
            Explore Destinations
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;