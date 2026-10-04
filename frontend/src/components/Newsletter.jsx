import { FaPaperPlane } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Newsletter() {
  const navigate = useNavigate();

  return (
    <section className="bg-gradient-to-r from-blue-50 via-white to-teal-50 py-20 sm:py-24">

      <div className="max-w-4xl mx-auto px-6 text-center">

        <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-teal-700">Travel notes, thoughtfully curated</p>
        <h2 className="mb-5 text-3xl font-extrabold text-slate-900 sm:text-4xl md:text-5xl">
          Get Travel Inspiration
        </h2>

        <p className="mb-9 text-base leading-7 text-slate-600 sm:text-lg">
          Ideas and destination inspiration for wherever you want to go next.
        </p>

        <form onSubmit={(event) => { event.preventDefault(); navigate("/register"); }} className="mx-auto flex max-w-2xl flex-col justify-center gap-3 sm:flex-row sm:gap-4">

          <input
            type="email"
            placeholder="Enter your email"
            aria-label="Email address"
            required
            className="w-full rounded-xl border border-slate-300 bg-white px-5 py-4 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 sm:max-w-md"
          />

          <button
            type="submit"
            className="flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-8 py-4 font-semibold text-white shadow-sm transition hover:bg-blue-700"
          >
            <FaPaperPlane />
            Subscribe
          </button>
        </form>

      </div>

    </section>
  );
}

export default Newsletter;