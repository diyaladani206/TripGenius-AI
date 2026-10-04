function Stats() {
  const stats = [
    { number: "10K+", label: "Happy Travelers" },
    { number: "150+", label: "Destinations" },
    { number: "50+", label: "Countries" },
    { number: "98%", label: "Customer Satisfaction" },
  ];

  return (
    <section className="bg-blue-600 text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat) => (
            <div key={stat.label}>
              <h2 className="text-4xl font-bold">{stat.number}</h2>
              <p className="mt-2 text-lg">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Stats;