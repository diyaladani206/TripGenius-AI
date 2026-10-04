import { FaEnvelope, FaUser, FaUserCircle } from "react-icons/fa";
import DashboardNavbar from "../components/DashboardNavbar";
import { useAuth } from "../hooks/useAuth";

function Profile() {
  const { currentUser } = useAuth();

  return (
    <div className="min-h-screen bg-slate-100">
      <DashboardNavbar />
      <main className="mx-auto max-w-4xl px-5 py-10 sm:px-8 sm:py-14">
        <h1 className="text-3xl font-bold text-slate-900">Profile</h1>
        <p className="mt-2 text-slate-600">Your TripGenius account details.</p>

        <section className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <div className="flex items-center gap-4 border-b border-slate-100 pb-6">
            <FaUserCircle className="text-5xl text-blue-600" aria-hidden="true" />
            <div className="min-w-0">
              <h2 className="truncate text-xl font-semibold text-slate-900">{currentUser?.fullName}</h2>
              <p className="text-sm text-slate-500">TripGenius member</p>
            </div>
          </div>

          <dl className="mt-6 grid gap-5 sm:grid-cols-2">
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wide text-slate-500">Full name</dt>
              <dd className="mt-2 flex items-center gap-2 font-medium text-slate-900">
                <FaUser className="text-blue-600" aria-hidden="true" />
                {currentUser?.fullName || "Not provided"}
              </dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wide text-slate-500">Email address</dt>
              <dd className="mt-2 flex min-w-0 items-center gap-2 font-medium text-slate-900">
                <FaEnvelope className="shrink-0 text-blue-600" aria-hidden="true" />
                <span className="break-all">{currentUser?.email || "Not provided"}</span>
              </dd>
            </div>
          </dl>
        </section>
      </main>
    </div>
  );
}

export default Profile;