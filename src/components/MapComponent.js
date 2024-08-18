
import React, { useRef, useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet-routing-machine';
import 'leaflet-control-geocoder/dist/Control.Geocoder.css';
import 'leaflet-control-geocoder';

// Define custom icons
const pickupIcon = new L.Icon({
  iconUrl: '/pickup-icon.png',
  iconSize: [32, 32],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32]
});

const dropIcon = new L.Icon({
  iconUrl: '/drop-icon.png',
  iconSize: [32, 32],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32]
});

const MapComponent = ({ pickup, drop, vehicleType }) => {
  const mapRef = useRef(null);
  const [distance, setDistance] = useState(null);
  const [duration, setDuration] = useState(null);

  useEffect(() => {
    if (mapRef.current && pickup && drop) {
      const map = mapRef.current;

      // Fit map bounds
      map.fitBounds([pickup, drop]);

      // Add routing
      const control = L.Routing.control({
        waypoints: [
          L.latLng(pickup[0], pickup[1]),
          L.latLng(drop[0], drop[1])
        ],
        routeWhileDragging: true,
        createMarker: () => null, // Disable default markers
        lineOptions: {
          styles: [{ color: 'blue', opacity: 0.6, weight: 5 }]
        }
      }).addTo(map);

      // Listen to route events
      control.on('routesfound', (e) => {
        const { routes } = e;
        if (routes.length > 0) {
          const route = routes[0];
          setDistance(route.summary.totalDistance / 1000); // Convert meters to kilometers
          setDuration(route.summary.totalTime / 60); // Convert seconds to minutes
        }
      });
    }
  }, [pickup, drop]);

  return (
    <div>
      <MapContainer
        center={pickup || [19.0760, 72.8777]} // Default to Mumbai center
        zoom={12}
        style={{ height: '300px', width: '100%' }}
        whenCreated={map => mapRef.current = map}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {pickup && (
          <Marker
            position={pickup}
            icon={pickupIcon}
          >
            <Popup>Pickup Location</Popup>
          </Marker>
        )}
        {drop && (
          <Marker
            position={drop}
            icon={dropIcon}
          >
            <Popup>Drop Location</Popup>
          </Marker>
        )}
      </MapContainer>
      {distance !== null && duration !== null && (
        <div className="distance-info">
          <p>Vehicle Type: {vehicleType}</p>
          <p>Distance: {distance.toFixed(2)} km</p>
          <p>Estimated Time: {duration.toFixed(2)} min</p>
        </div>
      )}
    </div>
  );
};

export default MapComponent;
