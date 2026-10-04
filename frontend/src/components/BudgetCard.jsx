    function BudgetCard({ budget }) {
  const totalBudget = Number(budget) || 0;

  const breakdown = [
    {
      name: "Accommodation",
      icon: "🏨",
      percentage: 40,
    },
    {
      name: "Food",
      icon: "🍽️",
      percentage: 20,
    },
    {
      name: "Transportation",
      icon: "🚗",
      percentage: 15,
    },
    {
      name: "Activities",
      icon: "🎯",
      percentage: 15,
    },
    {
      name: "Miscellaneous",
      icon: "🛍️",
      percentage: 10,
    },
  ];

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6">

      <div className="flex items-center justify-between mb-6">

        <div>
          <h2 className="text-2xl font-bold text-slate-800">
            💰 Budget Breakdown
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

                <span className="font-semibold text-gray-700">
                  {item.icon} {item.name}
                </span>

                <span className="font-semibold text-slate-800">
                  ₹{amount.toLocaleString("en-IN")}
                </span>

              </div>

              <div className="w-full bg-gray-200 rounded-full h-3">

                <div
                  className="bg-blue-600 h-3 rounded-full transition-all"
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