import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

function ProtectedRoute({ children }) {
  const { currentUser } = useAuth();
  const location = useLocation();

  if (!currentUser || !localStorage.getItem("authToken")) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-slate-100 px-5 py-12">
        <section className="w-full max-w-lg rounded-2xl border border-slate-200 bg-white p-7 text-center shadow-lg shadow-slate-900/5 sm:p-9">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-blue-50 text-xl text-blue-700" aria-hidden="true">
            ✦
          </div>
          <h1 className="mt-5 text-2xl font-bold text-slate-900">Sign in to continue</h1>
          <p className="mt-3 leading-6 text-slate-600">
            Please log in or create an account to generate your personalized AI trip.
          </p>
          <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              to="/login"
              state={{ from: location }}
              className="rounded-xl bg-blue-700 px-6 py-3 font-semibold text-white transition hover:bg-blue-800"
            >
              Login
            </Link>
            <Link
              to="/register"
              state={{ from: location }}
              className="rounded-xl border border-slate-300 px-6 py-3 font-semibold text-slate-700 transition hover:border-blue-600 hover:text-blue-700"
            >
              Create Account
            </Link>
          </div>
          <Link to="/" className="mt-6 inline-block text-sm font-medium text-slate-500 transition hover:text-blue-700">
            Return to Home
          </Link>
        </section>
      </main>
    );
  }

  return children;
}

export default ProtectedRoute;