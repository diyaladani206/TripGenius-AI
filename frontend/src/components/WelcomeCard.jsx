import { useEffect, useState } from "react";
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
        console.error(err);
        setError("Unable to load weather.");
      } finally {
        setLoading(false);
      }
    }

    loadWeather();
  }, [destination]);

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6">

      <h2 className="text-2xl font-bold mb-6">
        🌤 Current Weather
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

      {/* Weather */}
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
              <p className="text-5xl font-bold text-blue-600">
                {weather.temperature}°C
              </p>

              <p className="text-gray-600 capitalize">
                {weather.description}
              </p>
            </div>

          </div>

          <hr className="my-5" />

          <div className="grid grid-cols-2 gap-4">

            <div className="bg-slate-50 p-4 rounded-xl">
              <p className="text-gray-500 text-sm">
                Humidity
              </p>

              <p className="font-bold text-lg">
                💧 {weather.humidity}%
              </p>
            </div>

            <div className="bg-slate-50 p-4 rounded-xl">
              <p className="text-gray-500 text-sm">
                Wind
              </p>

              <p className="font-bold text-lg">
                🌬 {weather.wind} km/h
              </p>
            </div>

          </div>

        </div>
      )}

    </div>
  );
}

export default WeatherCard;