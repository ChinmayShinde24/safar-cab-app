import React, { useState } from 'react';
import MapComponent from '../components/MapComponent';
import RideSelection from './RideSelection';
import L from 'leaflet';
import 'leaflet-control-geocoder';
import './Home.css';

const Home = () => {
  const [pickup, setPickup] = useState(null);
  const [drop, setDrop] = useState(null);
  const [vehicleType, setVehicleType] = useState('');
  const [distance, setDistance] = useState(null);
  const [showRideSelection, setShowRideSelection] = useState(false); // State to toggle ride selection

  const handleGeocode = async (address, setCoordinates) => {
    const geocoder = L.Control.Geocoder.nominatim();
    geocoder.geocode(address, (results) => {
      if (results && results.length > 0) {
        const { lat, lng } = results[0].center;
        setCoordinates([lat, lng]);
      }
    });
  };

  const calculateDistance = (pickupCoords, dropCoords) => {
    if (pickupCoords && dropCoords) {
      const lat1 = pickupCoords[0];
      const lon1 = pickupCoords[1];
      const lat2 = dropCoords[0];
      const lon2 = dropCoords[1];

      const R = 6371; // Radius of the Earth in km
      const dLat = (lat2 - lat1) * (Math.PI / 180);
      const dLon = (lon2 - lon1) * (Math.PI / 180);
      const a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(lat1 * (Math.PI / 180)) *
          Math.cos(lat2 * (Math.PI / 180)) *
          Math.sin(dLon / 2) *
          Math.sin(dLon / 2);
      const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
      const distance = R * c; // Distance in km

      setDistance(distance.toFixed(2)); // Set distance state
    }
  };

  const handleSearch = () => {
    const pickupAddress = document.getElementById('pickup-input').value;
    const dropAddress = document.getElementById('drop-input').value;

    handleGeocode(pickupAddress, (coords) => {
      setPickup(coords);
      calculateDistance(coords, drop);
    });
    handleGeocode(dropAddress, (coords) => {
      setDrop(coords);
      calculateDistance(pickup, coords);
    });

    // Show the ride selection window after searching
    setShowRideSelection(true);
  };

  const handleBack = () => {
    // Handle going back to the search form
    setShowRideSelection(false);
  };

  return (
    <div className="home">
      {!showRideSelection ? (
        <>
          <h2>Select Your Ride</h2>
          <div className="search">
            <input
              className="search-boxes"
              id="pickup-input"
              type="text"
              placeholder="Pickup Point"
            />
            <input
              className="search-boxes"
              id="drop-input"
              type="text"
              placeholder="Drop Point"
            />
            <select
              value={vehicleType}
              onChange={(e) => setVehicleType(e.target.value)}
            >
              <option value="">Select Vehicle</option>
              <option value="bike">Bike</option>
              <option value="auto">Auto</option>
              <option value="cab">Cab</option>
            </select>
            <button onClick={handleSearch}>Search</button>
          </div>

          {distance && <p>Estimated Distance: {distance} km</p>}

          <MapComponent pickup={pickup} drop={drop} vehicleType={vehicleType} />
        </>
      ) : (
        <RideSelection
          pickup={pickup}
          drop={drop}
          vehicleType={vehicleType}
          onBack={handleBack}
        />
      )}

      <div className="info-container">
        {/* <h1 className="info-header">A Ride for Everyone</h1> */}

        <div className="info">
          <img
            className="info-img"
            src="https://s3-ap-southeast-1.amazonaws.com/ola-prod-website/ride-budget.svg"
            alt="info-img"
          />
          <h3 className="info-subheader">For any budget</h3>
          <p>
            From Bikes and Autos to Prime Sedans and Prime SUVs, you will find a
            ride in your budget at your convenience any time.
          </p>
        </div>

        <div className="info">
          <img
            className="info-img"
            src="https://s3-ap-southeast-1.amazonaws.com/ola-prod-website/ride-distance.svg"
            alt="info-img"
          />
          <h3 className="info-subheader">For any distance</h3>

          <p>
            Whether it’s a short trip across town or a long journey, we have the
            right ride for you.
          </p>
        </div>

        <div className="info">
          <img
            className="info-img"
            src="https://s3-ap-southeast-1.amazonaws.com/ola-prod-website/ride-budget.svg"
            alt="info-img"
          />
          <h3 className="info-subheader">Flexible packages</h3>

          <p>
            Easily plan a day out without having to worry about conveyance with
            an hour-based package from Rental.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
