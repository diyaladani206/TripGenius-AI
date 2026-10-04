import {
  FaClock,
  FaHotel,
  FaMapMarkerAlt,
  FaStar,
  FaTicketAlt,
  FaUtensils,
} from "react-icons/fa";
import { getDestinationRecommendations } from "../services/recommendationService";

function RecommendationCard({ icon, title, subtitle, area, score, children, tag }) {
  return (
    <article className="flex h-full min-w-0 flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition duration-200 hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-md">
      <div className="flex items-start gap-3">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-700">
          {icon}
        </span>
        <div className="min-w-0 flex-1">
          <h3 className="font-bold leading-5 text-slate-900">{title}</h3>
          {subtitle && <p className="mt-1 text-sm text-slate-600">{subtitle}</p>}
        </div>
        {tag && <span className="shrink-0 rounded-full bg-teal-50 px-2.5 py-1 text-xs font-semibold text-teal-800">{tag}</span>}
      </div>

      <p className="mt-4 flex items-center gap-2 text-sm text-slate-500">
        <FaMapMarkerAlt className="shrink-0 text-teal-700" aria-hidden="true" />
        <span className="truncate">{area}</span>
      </p>

      {score && (
        <div className="mt-3 flex items-center gap-1.5 text-sm font-semibold text-slate-700">
          <FaStar className="text-amber-500" aria-hidden="true" />
          <span>{score}</span>
          <span className="font-normal text-slate-500">estimated trip match</span>
        </div>
      )}

      <p className="mt-3 flex-1 text-sm leading-6 text-slate-600">{children}</p>
    </article>
  );
}

function RecommendationGroup({ title, subtitle, icon, items, renderCard }) {
  return (
    <section className="mt-10" aria-label={title}>
      <div className="mb-5 flex items-start gap-3">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-teal-50 text-teal-700">
          {icon}
        </span>
        <div>
          <h2 className="text-xl font-extrabold text-slate-900 sm:text-2xl">{title}</h2>
          <p className="mt-1 text-sm text-slate-600">{subtitle}</p>
        </div>
      </div>
      <div className="grid auto-rows-fr grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {items.map((item) => renderCard(item))}
      </div>
    </section>
  );
}

function TripRecommendations({ destination, travelStyle }) {
  const { hotels, restaurants, attractions } = getDestinationRecommendations(destination, travelStyle);

  return (
    <div>
      <p className="mt-8 rounded-xl border border-teal-100 bg-teal-50/70 px-4 py-3 text-sm leading-6 text-slate-600">
        Destination-aware suggestions for {destination}. Prices and trip-match scores are planning estimates, not live rates, reviews, reservations, or availability.
      </p>

      <RecommendationGroup
        title="Recommended Hotels"
        subtitle="Suggested stay areas and estimated nightly ranges"
        icon={<FaHotel aria-hidden="true" />}
        items={hotels}
        renderCard={(hotel) => (
          <RecommendationCard
            key={hotel.name}
            icon={<FaHotel aria-hidden="true" />}
            title={`${destination} ${hotel.name}`}
            subtitle={`₹${hotel.nightlyPrice.toLocaleString("en-IN")} estimated per night`}
            area={hotel.area}
            score={hotel.score}
            tag={hotel.suitableFor}
          >
            {hotel.detail}
          </RecommendationCard>
        )}
      />

      <RecommendationGroup
        title="Restaurants"
        subtitle="Dining ideas for exploring local flavours"
        icon={<FaUtensils aria-hidden="true" />}
        items={restaurants}
        renderCard={(restaurant) => (
          <RecommendationCard
            key={restaurant.name}
            icon={<FaUtensils aria-hidden="true" />}
            title={restaurant.name}
            subtitle={restaurant.cuisine}
            area={restaurant.area}
            score={restaurant.score}
            tag={`${restaurant.price} · ${restaurant.suitableFor}`}
          >
            {restaurant.detail}
          </RecommendationCard>
        )}
      />

      <RecommendationGroup
        title="Top Attractions"
        subtitle="Places worth exploring during your stay"
        icon={<FaTicketAlt aria-hidden="true" />}
        items={attractions}
        renderCard={(attraction) => (
          <RecommendationCard
            key={attraction.name}
            icon={<FaTicketAlt aria-hidden="true" />}
            title={attraction.name}
            subtitle={attraction.description}
            area={attraction.area}
            tag={attraction.category}
          >
            <span className="inline-flex items-center gap-2 font-medium text-slate-700">
              <FaClock className="text-teal-700" aria-hidden="true" /> Best time: {attraction.bestTime}
            </span>
          </RecommendationCard>
        )}
      />
    </div>
  );
}

export default TripRecommendations;