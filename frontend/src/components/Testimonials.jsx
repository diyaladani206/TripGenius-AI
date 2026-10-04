import { FaStar } from "react-icons/fa";

const reviews = [
  {
    name: "Sarah Johnson",
    country: "United States",
    review:
      "TripGenius AI planned my entire Europe trip within minutes. It saved me hours of research!",
  },
  {
    name: "Rahul Mehta",
    country: "India",
    review:
      "The budget planning feature is amazing. Every recommendation matched my budget perfectly.",
  },
  {
    name: "Emily Carter",
    country: "Australia",
    review:
      "Beautiful interface and incredibly useful AI suggestions. Highly recommended!",
  },
];

function Testimonials() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold">
            What Our Travelers Say
          </h2>

          <p className="mt-4 text-lg text-gray-600">
            Thousands of travelers trust TripGenius AI to plan unforgettable journeys.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <div
              key={review.name}
              className="bg-gray-50 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition duration-300"
            >
              <div className="flex text-yellow-400 mb-4">
                {[...Array(5)].map((_, index) => (
                  <FaStar key={index} />
                ))}
              </div>

              <p className="text-gray-600 italic mb-6">
                "{review.review}"
              </p>

              <h3 className="text-xl font-bold">
                {review.name}
              </h3>

              <p className="text-gray-500">
                {review.country}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Testimonials;