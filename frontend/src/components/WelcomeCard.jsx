import { FaArrowRight, FaCompass } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

function WelcomeCard() {
  const navigate = useNavigate();
  const { currentUser } = useAuth();

  return (
    <section className="flex flex-col justify-between gap-6 rounded-2xl border border-blue-100 bg-gradient-to-r from-blue-50 via-white to-teal-50 p-6 sm:flex-row sm:items-center sm:p-8">
      <div>
        <p className="text-xs font-bold uppercase tracking-[0.16em] text-teal-700">Your travel workspace</p>
        <h1 className="mt-2 text-2xl font-extrabold text-slate-900 sm:text-3xl">
          Welcome{currentUser?.fullName ? `, ${currentUser.fullName.split(" ")[0]}` : " back"}
        </h1>
        <p className="mt-2 max-w-xl leading-6 text-slate-600">
          Shape your next trip around the places, pace and experiences you love.
        </p>
      </div>
      <button
        type="button"
        onClick={() => navigate("/my-trips")}
        className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl border border-blue-200 bg-white px-5 py-3 text-sm font-bold text-blue-700 transition hover:border-blue-500 hover:bg-blue-50"
      >
        <FaCompass aria-hidden="true" /> Your trips <FaArrowRight aria-hidden="true" />
      </button>
    </section>
  );
}

export default WelcomeCard;