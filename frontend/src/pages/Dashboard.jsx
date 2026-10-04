import DashboardNavbar from "../components/DashboardNavbar";
import WelcomeCard from "../components/WelcomeCard";
import TripPlannerForm from "../components/TripPlannerForm";

function Dashboard() {
  return (
    <div className="min-h-screen bg-slate-100">
      <DashboardNavbar />

      <main className="max-w-7xl mx-auto p-8 space-y-8">
        <WelcomeCard />
        <TripPlannerForm />
      </main>
    </div>
  );
}

export default Dashboard;