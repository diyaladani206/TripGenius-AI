import {
  FaRobot,
  FaMapMarkedAlt,
  FaCloudSun,
  FaMoneyBillWave,
  FaSlidersH,
  FaCompass,
} from "react-icons/fa";

const features = [
  {
    icon: <FaRobot />,
    title: "AI Itinerary Generator",
    description:
      "Generate complete travel plans based on your destination, budget, and travel style.",
  },
  {
    icon: <FaMapMarkedAlt />,
    title: "Interactive Maps",
    description:
      "Discover nearby attractions, restaurants, and hotels with integrated maps.",
  },
  {
    icon: <FaCloudSun />,
    title: "Live Weather",
    description:
      "Get weather forecasts and travel recommendations before your trip.",
  },
  {
    icon: <FaMoneyBillWave />,
    title: "Budget-aware Recommendations",
    description:
      "Estimate travel expenses and stay within your planned budget.",
  },
  {
    icon: <FaSlidersH />,
    title: "Travel-style Recommendations",
    description:
      "Shape each itinerary around the way you like to explore.",
  },
  {
    icon: <FaCompass />,
    title: "Personalized Planning",
    description:
      "Bring dates, travelers and destination preferences into one plan.",
  },
];

function AIFeatures() {
  return (
    <section className="bg-slate-50 py-20 sm:py-24">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl md:text-5xl">
            Powerful AI Features
          </h2>

          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Everything you need to plan smarter and travel better.
          </p>
        </div>

        <div className="grid grid-cols-1 auto-rows-fr gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="flex h-full min-w-0 flex-col rounded-2xl border border-slate-200/80 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-8"
            >
              <div className="mb-5 flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-2xl text-blue-700">
                {feature.icon}
              </div>

              <h3 className="mb-3 min-h-14 text-xl font-bold text-slate-900">
                {feature.title}
              </h3>

              <p className="flex-1 text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default AIFeatures;