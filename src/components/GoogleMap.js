import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '400px',
};

// Coordinates for Mumbai
const mumbaiCenter = {
  lat: 19.0760,
  lng: 72.8777
};

const GoogleMapComponent = ({ vehicles }) => {
  return (
    <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={mumbaiCenter}
        zoom={12} // Adjust zoom level as needed
      >
        {vehicles.map((vehicle, index) => (
          <Marker
            key={index}
            position={{ lat: vehicle.position[0], lng: vehicle.position[1] }}
            title={`${vehicle.type} - ${vehicle.driverName}`}
          />
        ))}
      </GoogleMap>
    </LoadScript>
  );
};

export default GoogleMapComponent;
