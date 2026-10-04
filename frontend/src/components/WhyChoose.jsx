import {
  FaRobot,
  FaWallet,
  FaGlobeAsia,
  FaBolt
} from "react-icons/fa";

const features = [
  {
    icon: <FaRobot />,
    title: "AI Powered",
    description:
      "Generate personalized travel itineraries using Artificial Intelligence."
  },
  {
    icon: <FaWallet />,
    title: "Budget Friendly",
    description:
      "Plan trips that match your budget without compromising experiences."
  },
  {
    icon: <FaGlobeAsia />,
    title: "Personalized Trips",
    description:
      "Recommendations based on your interests, travel style and preferences."
  },
  {
    icon: <FaBolt />,
    title: "Instant Planning",
    description:
      "Create a complete travel plan within seconds."
  }
];

function WhyChoose() {
  return (
    <section className="py-24 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <h2 className="text-5xl font-bold">
            Why Choose TripGenius AI?
          </h2>

          <p className="mt-5 text-lg text-gray-500 max-w-3xl mx-auto">
            Everything you need to plan smarter, travel easier,
            and create unforgettable memories.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-3xl bg-gray-50 p-8 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-300"
            >
              <div className="text-5xl text-blue-600 mb-6">
                {feature.icon}
              </div>

              <h3 className="text-2xl font-bold mb-4">
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

export default WhyChoose;