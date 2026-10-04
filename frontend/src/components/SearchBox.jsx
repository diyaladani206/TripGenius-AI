import { FaCalendarAlt, FaMapMarkerAlt, FaRobot, FaUsers, FaWallet } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function SearchBox() {
  const navigate = useNavigate();

  return (
    <section id="planner" className="relative z-10 scroll-mt-24 bg-slate-50 px-4 py-10 sm:px-6 md:py-14">
      <div className="mx-auto max-w-6xl rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_16px_48px_-30px_rgba(15,23,42,0.3)] sm:p-8 md:p-9">

        <div className="mb-8 flex flex-col items-center text-center">
          <span className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-teal-50 text-teal-700"><FaRobot aria-hidden="true" /></span>
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-teal-700">Start planning</p>
          <h2 className="mt-2 text-2xl font-extrabold text-slate-900 sm:text-3xl">Plan Your Dream Trip</h2>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 md:gap-6">

          <div>
            <label className="mb-2 flex items-center gap-2 text-sm font-semibold text-slate-700">
              <FaMapMarkerAlt className="text-teal-700" aria-hidden="true" />
              Destination
            </label>

            <input
              type="text"
              placeholder="Where to?" 
              className="h-12 w-full rounded-xl border border-slate-300 bg-white px-3 text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
            />
          </div>

          <div>
            <label className="mb-2 flex items-center gap-2 text-sm font-semibold text-slate-700">
              <FaCalendarAlt className="text-teal-700" aria-hidden="true" />
              Start Date
            </label>

            <input
              type="date"
              className="h-12 w-full rounded-xl border border-slate-300 bg-white px-3 text-slate-800 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
            />
          </div>

          <div>
            <label className="mb-2 flex items-center gap-2 text-sm font-semibold text-slate-700">
              <FaWallet className="text-teal-700" aria-hidden="true" />
              Budget
            </label>

            <input
              type="number"
              placeholder="₹ 50000"
              className="h-12 w-full rounded-xl border border-slate-300 bg-white px-3 text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
            />
          </div>

          <div>
            <label className="mb-2 flex items-center gap-2 text-sm font-semibold text-slate-700">
              <FaUsers className="text-teal-700" aria-hidden="true" />
              Travelers
            </label>

            <input
              type="number"
              placeholder="2"
              className="h-12 w-full rounded-xl border border-slate-300 bg-white px-3 text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
            />
          </div>

        </div>

        <div className="mt-8 text-center">
          <button
            onClick={() => navigate("/dashboard")} 
            className="w-full rounded-xl bg-blue-600 px-9 py-3.5 text-base font-bold text-white shadow-sm transition duration-200 hover:bg-blue-700 sm:w-auto"
          >
            Generate AI Trip
          </button>
        </div>

      </div>
    </section>
  );
}

export default SearchBox;