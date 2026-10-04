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
    <section className="bg-white py-20 sm:py-24">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl md:text-5xl">
            What Our Travelers Say
          </h2>

          <p className="mt-4 text-lg text-gray-600">
            Thousands of travelers trust TripGenius AI to plan unforgettable journeys.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-3 md:gap-6">
          {reviews.map((review) => (
            <div
              key={review.name}
              className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-teal-200 hover:shadow-lg sm:p-8"
            >
              <div className="flex text-yellow-400 mb-4">
                {[...Array(5)].map((_, index) => (
                  <FaStar key={index} />
                ))}
              </div>

              <p className="mb-6 min-h-24 text-sm leading-7 text-slate-600">
                "{review.review}"
              </p>

              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-teal-50 text-sm font-bold text-teal-800" aria-hidden="true">
                  {review.name.split(" ").map((part) => part[0]).join("")}
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900">{review.name}</h3>
                  <p className="text-sm text-slate-500">{review.country}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Testimonials;