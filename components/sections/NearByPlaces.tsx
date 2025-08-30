"use client";
import React, { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Custom icon for café markers
const cafeIcon = new L.Icon({
  iconUrl:
    "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTEuNSAyLjVjLTQuNDUgMC04LjE5IDMuNzUtOC4xOSA4LjE5YzAtMy45MiAzLjQ3LTcuMzcgNy40LTEuNjFjMS40Ni0xLjI3IDMuMTctMS44MiA0Ljg4LTEuODJjMS42MiAwIDMuMzIgMC41NSA0Ljg4IDEuODJjNC4wMyA0LjA5IDguMjkgOS40OCA4LjI5IDE0LjU1YzAtNC41NS0zLjM2LTcuOTItNz4wLjk5Yy0xLjU2IDEuMjgtMy4xNyAxLjc5LTQuODggMS43OXoiIGZpbGw9IiM3QzQ2Ii8+PC9zdmc+", // Coffee cup icon
  iconSize: [24, 24],
  iconAnchor: [12, 24],
  popupAnchor: [0, -24],
});

export default function NearbyCafesSection() {
  const mapRef = useRef<HTMLDivElement>(null);
  const map = useRef<L.Map | null>(null);

  // Café locations data
  const cafes = [
    {
      id: 1,
      name: "Brooklyn",
      address: "123 Bedford Ave, Brooklyn, NY 11211",
      hours: "Open daily: 7AM – 7PM",
      lat: 40.7128,
      lng: -73.9687,
      neighborhood: "Brooklyn",
    },
    {
      id: 2,
      name: "Manhattan",
      address: "456 Spring St, New York, NY 10012",
      hours: "Open daily: 7AM – 8PM",
      lat: 40.7484,
      lng: -73.9857,
      neighborhood: "Manhattan",
    },
    {
      id: 3,
      name: "Queens",
      address: "789 Broadway, Queens, NY 11106",
      hours: "Open daily: 7AM – 6PM",
      lat: 40.7306,
      lng: -73.8751,
      neighborhood: "Queens",
    },
    {
      id: 4,
      name: "Flushing",
      address: "134-16 36th Road, Flushing, NY 11354",
      hours: "Open daily: 8AM – 6PM",
      lat: 40.7583,
      lng: -73.8312,
      neighborhood: "Queens",
    },
  ];

  useEffect(() => {
    if (mapRef.current) {
      // Initialize map
      map.current = L.map(mapRef.current, {
        zoom: 11,
        center: [40.7128, -73.9687], // Center on NYC
        scrollWheelZoom: false,
        dragging: false,
        touchZoom: false,
        doubleClickZoom: false,
        boxZoom: false,
        tapHold: false,
        worldCopyJump: false,
        attributionControl: false,
      });

      // Add custom tile layer (light theme)
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 19,
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(map.current);

      // Add café markers
      cafes.forEach((cafe) => {
        L.marker([cafe.lat, cafe.lng], { icon: cafeIcon }).addTo(map.current!)
          .bindPopup(`
            <div class="popup-content">
              <h4>${cafe.name}</h4>
              <p><strong>Address:</strong> ${cafe.address}</p>
              <p><strong>Hours:</strong> ${cafe.hours}</p>
              <button class="get-directions-btn">Get Directions</button>
            </div>
          `);
      });

      return () => {
        if (map.current) {
          map.current.remove();
        }
      };
    }
  }, []);

  return (
    <section className="bg-green-900 py-16">
      <div className="containerStyles mx-auto max-w-7xl px-4 md:px-8">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <h2 className="font-heading text-4xl font-bold text-amber-100">
            Nearby Cafés
          </h2>
          <p className="font-body text-sm text-amber-200">
            Find a Brewhaus nearby and stop in for your favorite drink.
          </p>
        </div>

        {/* Map and Cafés Grid */}
        <div className="flex flex-col items-center gap-8 lg:flex-row">
          {/* Map Container */}
          <div className="w-full overflow-hidden rounded-xl border border-green-800 shadow-lg lg:w-1/2">
            <div
              ref={mapRef}
              className="relative h-80 w-full sm:h-96 md:h-[550px]"
              style={{ height: "400px" }}
            />
          </div>

          {/* Café Cards */}
          <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2 lg:w-1/2">
            {cafes.map((cafe) => (
              <div
                key={cafe.id}
                className="rounded-xl border border-amber-200 bg-amber-50 p-6 shadow-md transition-shadow duration-300 hover:shadow-lg"
              >
                <div className="mb-2 text-xs font-medium text-green-900">
                  {cafe.neighborhood}
                </div>
                <div className="mb-1 text-sm font-semibold text-green-900">
                  {cafe.address.split(",")[0]}
                </div>
                <div className="mb-3 text-sm text-green-900">
                  {cafe.address.split(",")[1]}
                </div>
                <div className="mb-4 text-xs text-green-900">{cafe.hours}</div>
                <button
                  className="w-full rounded-full bg-green-900 px-6 py-3 text-sm font-medium text-amber-100 transition-colors duration-300 hover:bg-green-800"
                  onClick={() => {
                    alert(`Getting directions to ${cafe.name}`);
                  }}
                >
                  Get Directions
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Need Help Section */}
        <div className="mt-16 text-center">
          <h3 className="mb-8 font-heading text-2xl font-bold text-amber-100">
            Need Help?
          </h3>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-xl border border-green-700 bg-green-800/50 p-4 backdrop-blur-sm">
              <p className="mb-1 text-xs font-medium text-amber-100">
                General Inquiries
              </p>
              <p className="font-semibold text-amber-100">+1 (212) 555-0198</p>
            </div>
            <div className="rounded-xl border border-green-700 bg-green-800/50 p-4 backdrop-blur-sm">
              <p className="mb-1 font-heading text-xs font-medium text-amber-100">
                Customer Support
              </p>
              <p className="font-semibold text-amber-100">+1 (718) 555-0243</p>
            </div>
            <div className="rounded-xl border border-green-700 bg-green-800/50 p-4 backdrop-blur-sm">
              <p className="mb-1 font-heading text-xs font-medium text-amber-100">
                General Email
              </p>
              <p className="font-body font-semibold text-amber-100">
                hello@bhaus.com
              </p>
            </div>
            <div className="rounded-xl border border-green-700 bg-green-800/50 p-4 backdrop-blur-sm">
              <p className="mb-1 font-heading text-xs font-medium text-amber-100">
                Support Email
              </p>
              <p className="font-body font-semibold text-amber-100">
                support@bhaus.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
