import { useEffect, useState } from "react";
import { FaCloudSun, FaTint, FaWind } from "react-icons/fa";
import { getWeather } from "../services/weatherService";

function WeatherCard({ destination }) {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadWeather() {
      if (!destination) {
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        setError("");

        const data = await getWeather(destination);

        setWeather(data);
      } catch (err) {
        console.error("Weather error:", err);
        setError("Unable to load weather.");
      } finally {
        setLoading(false);
      }
    }

    loadWeather();
  }, [destination]);

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

      <h2 className="mb-6 flex items-center gap-3 text-xl font-bold text-slate-900">
        <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal-50 text-teal-700"><FaCloudSun aria-hidden="true" /></span>
        Current Weather
      </h2>

      {/* Loading */}
      {loading && (
        <p className="text-gray-500">
          Loading weather...
        </p>
      )}

      {/* Error */}
      {!loading && error && (
        <p className="text-red-500">
          {error}
        </p>
      )}

      {/* Weather Information */}
      {!loading && weather && (
        <div>

          <h3 className="text-3xl font-bold">
            {weather.city}
          </h3>

          <div className="flex items-center gap-4 mt-4">

            <img
              src={`https://openweathermap.org/img/wn/${weather.icon}@2x.png`}
              alt={weather.description}
              className="w-20 h-20"
            />

            <div>

              <p className="text-4xl font-extrabold text-blue-700 sm:text-5xl">
                {weather.temperature}°C
              </p>

              <p className="text-gray-600 capitalize">
                {weather.description}
              </p>

            </div>

          </div>

          <hr className="my-5" />

          <div className="grid grid-cols-2 gap-4">

            <div className="rounded-xl bg-slate-50 p-4">

              <p className="text-gray-500 text-sm">
                Humidity
              </p>

              <p className="font-bold text-lg">
                <FaTint className="mr-1 inline text-teal-700" aria-hidden="true" /> {weather.humidity}%
              </p>

            </div>

            <div className="rounded-xl bg-slate-50 p-4">

              <p className="text-gray-500 text-sm">
                Wind
              </p>

              <p className="font-bold text-lg">
                <FaWind className="mr-1 inline text-teal-700" aria-hidden="true" /> {weather.wind} km/h
              </p>

            </div>

          </div>

        </div>
      )}

    </div>
  );
}

export default WeatherCard;