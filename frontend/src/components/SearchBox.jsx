import { FaMapMarkerAlt, FaCalendarAlt, FaWallet, FaUsers } from "react-icons/fa";

function SearchBox() {
  return (
    <section className="relative -mt-32 z-20 px-6">
      <div className="max-w-5xl mx-auto rounded-3xl bg-white/95 backdrop-blur-lg shadow-2xl border border-gray-100 p-8">

        <h2 className="text-3xl font-bold text-center mb-8">
          Plan Your Dream Trip
        </h2>

        <div className="grid md:grid-cols-4 gap-6">

          <div>
            <label className="flex items-center gap-2 font-semibold mb-2">
              <FaMapMarkerAlt className="text-blue-600" />
              Destination
            </label>

            <input
              type="text"
              placeholder="Where to?"
              className="w-full border rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="flex items-center gap-2 font-semibold mb-2">
              <FaCalendarAlt className="text-blue-600" />
              Start Date
            </label>

            <input
              type="date"
              className="w-full border rounded-xl p-3"
            />
          </div>

          <div>
            <label className="flex items-center gap-2 font-semibold mb-2">
              <FaWallet className="text-blue-600" />
              Budget
            </label>

            <input
              type="number"
              placeholder="₹ 50000"
              className="w-full border rounded-xl p-3"
            />
          </div>

          <div>
            <label className="flex items-center gap-2 font-semibold mb-2">
              <FaUsers className="text-blue-600" />
              Travelers
            </label>

            <input
              type="number"
              placeholder="2"
              className="w-full border rounded-xl p-3"
            />
          </div>

        </div>

        <div className="text-center mt-8">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-full text-lg font-semibold transition">
            Generate AI Trip
          </button>
        </div>

      </div>
    </section>
  );
}

export default SearchBox;