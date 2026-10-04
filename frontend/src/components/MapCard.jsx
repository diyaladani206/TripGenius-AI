import { useEffect, useState } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMap,
} from "react-leaflet";

import "leaflet/dist/leaflet.css";

import L from "leaflet";
import { FaMapMarkedAlt } from "react-icons/fa";

// Fix Leaflet marker icons in React/Vite
delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png",
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png",
});

function ChangeMapView({ coordinates }) {
  const map = useMap();

  useEffect(() => {
    if (coordinates) {
      map.setView(coordinates, 12);
    }
  }, [coordinates, map]);

  return null;
}

function MapCard({ destination }) {
  const [coordinates, setCoordinates] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function findLocation() {
      if (!destination) return;

      try {
        setLoading(true);
        setError("");

        const response = await fetch(
          `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(
            destination
          )}&limit=1`
        );

        const data = await response.json();

        if (!data.length) {
          throw new Error("Location not found");
        }

        setCoordinates([
          parseFloat(data[0].lat),
          parseFloat(data[0].lon),
        ]);
      } catch (err) {
        console.error("Map error:", err);
        setError("Unable to find this destination.");
      } finally {
        setLoading(false);
      }
    }

    findLocation();
  }, [destination]);

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

      <h2 className="mb-4 flex items-center gap-3 text-xl font-bold text-slate-900">
        <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-700"><FaMapMarkedAlt aria-hidden="true" /></span>
        Explore {destination}
      </h2>

      {loading && (
        <div className="h-80 rounded-2xl bg-slate-200 flex items-center justify-center">
          <p className="text-gray-500">
            Loading map...
          </p>
        </div>
      )}

      {!loading && error && (
        <div className="h-80 rounded-2xl bg-slate-200 flex items-center justify-center">
          <p className="text-red-500">
            {error}
          </p>
        </div>
      )}

      {!loading && coordinates && (
        <div className="h-80 rounded-2xl overflow-hidden">

          <MapContainer
            center={coordinates}
            zoom={12}
            scrollWheelZoom={true}
            className="h-full w-full"
          >

            <TileLayer
              attribution='&copy; OpenStreetMap contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            <ChangeMapView coordinates={coordinates} />

            <Marker position={coordinates}>
              <Popup>
                <strong>{destination}</strong>
                <br />
                Your selected destination
              </Popup>
            </Marker>

          </MapContainer>

        </div>
      )}

    </div>
  );
}

export default MapCard; 