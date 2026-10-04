import {
  FaRobot,
  FaMapMarkedAlt,
  FaCloudSun,
  FaMoneyBillWave,
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
    title: "Budget Planner",
    description:
      "Estimate travel expenses and stay within your planned budget.",
  },
];

function AIFeatures() {
  return (
    <section className="py-24 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold">
            Powerful AI Features
          </h2>

          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Everything you need to plan smarter and travel better.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-white rounded-3xl shadow-lg p-8 hover:shadow-2xl hover:-translate-y-2 transition duration-300"
            >
              <div className="text-5xl text-blue-600 mb-5">
                {feature.icon}
              </div>

              <h3 className="text-2xl font-bold mb-3">
                {feature.title}
              </h3>

              <p className="text-gray-600">
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