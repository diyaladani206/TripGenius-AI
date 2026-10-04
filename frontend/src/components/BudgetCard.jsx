  import { FaCar, FaEllipsisH, FaHotel, FaTicketAlt, FaUtensils } from "react-icons/fa";

  function BudgetCard({ budget }) {
  const totalBudget = Number(budget) || 0;

  const breakdown = [
    {
      name: "Accommodation",
      icon: <FaHotel />,
      percentage: 40,
    },
    {
      name: "Food",
      icon: <FaUtensils />,
      percentage: 20,
    },
    {
      name: "Transportation",
      icon: <FaCar />,
      percentage: 15,
    },
    {
      name: "Activities",
      icon: <FaTicketAlt />,
      percentage: 15,
    },
    {
      name: "Miscellaneous",
      icon: <FaEllipsisH />,
      percentage: 10,
    },
  ];

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

      <div className="flex items-center justify-between mb-6">

        <div>
          <h2 className="text-xl font-bold text-slate-900">
            Budget Breakdown
          </h2>

          <p className="text-gray-500 mt-1">
            Estimated allocation for your trip
          </p>
        </div>

        <div className="text-right">
          <p className="text-gray-500 text-sm">
            Total Budget
          </p>

          <p className="text-2xl font-bold text-blue-600">
            ₹{totalBudget.toLocaleString("en-IN")}
          </p>
        </div>

      </div>

      <div className="space-y-5">

        {breakdown.map((item) => {

          const amount =
            (totalBudget * item.percentage) / 100;

          return (
            <div key={item.name}>

              <div className="flex justify-between mb-2">

                <span className="font-semibold text-slate-700">
                  <span className="mr-2 text-teal-700" aria-hidden="true">{item.icon}</span>{item.name}
                </span>

                <span className="font-semibold text-slate-800">
                  ₹{amount.toLocaleString("en-IN")}
                </span>

              </div>

              <div className="h-2.5 w-full rounded-full bg-slate-100">

                <div
                  className="h-2.5 rounded-full bg-teal-500 transition-all"
                  style={{
                    width: `${item.percentage}%`,
                  }}
                ></div>

              </div>

              <p className="text-xs text-gray-400 mt-1">
                {item.percentage}% of total budget
              </p>

            </div>
          );
        })}

      </div>

    </div>
  );
}

export default BudgetCard;