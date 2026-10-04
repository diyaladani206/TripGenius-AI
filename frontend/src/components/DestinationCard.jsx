    function DestinationCard({ image, name, country, price }) {
    return (
        <div className="overflow-hidden rounded-3xl bg-white shadow-xl transition duration-300 hover:-translate-y-3 hover:shadow-2xl">

        <img
  src={image}
  alt={name}
  className="h-72 w-full object-cover transition duration-500 hover:scale-110"
/>

        <div className="p-7">

          <h2 className="text-3xl font-bold">
            {name}
            </h2>

          <p className="mt-3 text-gray-500">
            {country}
            </p>

            <div className="mt-5 flex items-center justify-between">

            <span className="text-xl font-bold text-blue-600">
                ₹{price}
            </span>

            <button className="rounded-full bg-blue-600 px-5 py-2 text-white hover:bg-blue-700">
                View
            </button>

            </div>

        </div>

        </div>
    );
    }

    export default DestinationCard;