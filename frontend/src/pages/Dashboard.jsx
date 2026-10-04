import DashboardNavbar from "../components/DashboardNavbar";
import WelcomeCard from "../components/WelcomeCard";
import TripPlannerForm from "../components/TripPlannerForm";

function Dashboard() {
  return (
    <div className="min-h-screen bg-slate-50">
      <DashboardNavbar />

      <main className="mx-auto max-w-7xl space-y-7 px-4 py-7 sm:px-6 sm:py-10 lg:px-8">
        <WelcomeCard />
        <TripPlannerForm />
      </main>
    </div>
  );
}

export default Dashboard;