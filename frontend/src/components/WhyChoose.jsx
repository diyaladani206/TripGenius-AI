import {
  FaRobot,
  FaWallet,
  FaCloudSun,
  FaUserFriends,
} from "react-icons/fa";

const features = [
  {
    icon: <FaRobot />,
    title: "AI-Powered Planning",
    description:
      "Generate personalized travel itineraries using Artificial Intelligence."
  },
  {
    icon: <FaCloudSun />,
    title: "Smart Travel Insights",
    description:
      "Bring weather, maps and practical details together before you go."
  },
  {
    icon: <FaWallet />,
    title: "Budget-Friendly Planning",
    description:
      "Plan trips that match your budget without compromising experiences."
  },
  {
    icon: <FaUserFriends />,
    title: "Personalized Experiences",
    description:
      "Recommendations shaped around your interests and travel style."
  }
];

function WhyChoose() {
  return (
    <section id="about" className="bg-white py-20 sm:py-24">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl md:text-5xl">
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
                className="rounded-2xl border border-slate-200/80 bg-slate-50 p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl sm:p-8"
            >
              <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-teal-50 text-2xl text-teal-700">
                {feature.icon}
              </div>

              <h3 className="mb-3 text-xl font-bold text-slate-900">
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