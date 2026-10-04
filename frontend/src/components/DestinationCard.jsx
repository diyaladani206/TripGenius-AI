import { FaMapMarkerAlt } from "react-icons/fa";

function DestinationCard({ image, name, country, description, price, onView }) {
    return (
        <article className="group flex h-full min-w-0 flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg">

        <img
  src={image}
  alt={name}
  loading="lazy"
  className="h-48 w-full object-cover transition duration-500 group-hover:scale-[1.03] sm:h-52"
/>

        <div className="flex flex-1 flex-col p-5">

          <h3 className="text-xl font-bold text-slate-900">{name}</h3>

          <p className="mt-1.5 flex items-center gap-1.5 text-sm text-slate-500">
            <FaMapMarkerAlt className="text-teal-600" aria-hidden="true" />
            {country}
          </p>

          <p className="mt-3 min-h-12 flex-1 text-sm leading-6 text-slate-600">{description}</p>

            <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-4">

            <span className="text-sm font-semibold text-slate-700">
                From <span className="text-blue-700">₹{price}</span>
            </span>

            <button onClick={onView} className="rounded-full bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600">
                View
            </button>

            </div>

        </div>

        </article>
    );
      }

    export default DestinationCard;