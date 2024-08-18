import React from 'react';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';

const Journey = ({ pickup, drop }) => {
  return (
    <div>
      <MapContainer
        center={[19.076, 72.8777]}
        zoom={12}
        style={{ height: '300px', width: '100%' }}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Marker position={pickup}>{/* Use appropriate icon here */}</Marker>
        <Marker position={drop}>{/* Use appropriate icon here */}</Marker>
      </MapContainer>
      <h3>Pickup: {pickup.address}</h3>
      <h3>Drop: {drop.address}</h3>
      <button
        onClick={() =>
          alert(
            'Thanks for booking. Your ride is arriving in 1 min. Thank you!',
          )
        }
      >
        Book Now
      </button>
    </div>
  );
};

export default Journey;
