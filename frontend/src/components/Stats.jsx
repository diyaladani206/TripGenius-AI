function Stats() {
  const stats = [
    { number: "AI-Powered", label: "Smart trip planning" },
    { number: "Global", label: "Destination discovery" },
    { number: "Personalized", label: "Travel experiences" },
    { number: "All in one", label: "Planning workspace" },
  ];

  return (
    <section className="border-y border-slate-200 bg-white py-12 sm:py-14">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 gap-x-5 gap-y-9 text-center md:grid-cols-4 md:gap-8">
          {stats.map((stat) => (
            <div key={stat.label}>
              <h2 className="text-xl font-extrabold text-blue-700 sm:text-2xl">{stat.number}</h2>
              <p className="mt-2 text-sm text-slate-600 sm:text-base">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Stats;