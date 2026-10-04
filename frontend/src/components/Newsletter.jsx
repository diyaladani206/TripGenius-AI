import { FaPaperPlane } from "react-icons/fa";

function Newsletter() {
  return (
    <section className="py-24 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">

      <div className="max-w-4xl mx-auto px-6 text-center">

        <h2 className="text-5xl font-bold mb-6">
          Ready to Plan Your Dream Vacation?
        </h2>

        <p className="text-xl text-blue-100 mb-10">
          Join thousands of travelers using AI to create unforgettable trips.
        </p>

        <div className="flex flex-col md:flex-row gap-4 justify-center">

          <input
            type="email"
            placeholder="Enter your email"
            className="px-6 py-4 rounded-xl text-gray-800 w-full md:w-96 outline-none"
          />

          <button
            className="bg-white text-blue-700 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition flex items-center justify-center gap-2"
          >
            <FaPaperPlane />
            Get Started
          </button>

        </div>

      </div>

    </section>
  );
}

export default Newsletter;