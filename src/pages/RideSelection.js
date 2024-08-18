import React from 'react';
import MapComponent from '../components/MapComponent';
import './RideSelection.css';

const RideSelection = ({
  pickupLocation,
  dropLocation,
  distance,
  pickup,
  drop,
}) => {
  // Vehicle data a
  const vehicles = [
    {
      type: 'Auto',
      description: 'Get an auto at your doorstep',
      logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxfMuUGD_qc18FSEkRlocPqrKUGYKvhd01Aw&s', // Replace with the correct path to your logo
    },
    {
      type: 'Mini',
      description: 'Comfy hatchbacks at pocket-friendly fares',
      logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREJkPPkI4q50RiPHrbLgAZKUixysU4dD3uiQ&s',
    },
    {
      type: 'Prime Sedan',
      description: 'Sedans with free wifi and top drivers',
      logo: 'https://e7.pngegg.com/pngimages/591/721/png-clipart-car-sport-utility-vehicle-emoji-github-car-compact-car-blue.png',
    },
    {
      type: 'Prime SUV',
      description: 'SUVs with free wifi and top drivers',
      logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSABVCSlBbMTkcUy5wilGtxtYvJh3FifNcZ-g&s',
    },
  ];

  const getRandomFare = () => Math.floor(Math.random() * 401) + 100; // Random fare between 100 and 500

  const handleBookNow = (vehicle) => {
    alert(
      `Thanks for booking ${vehicle.type}. Your vehicle is arriving in 1 minute. Thank you!`,
    );
  };

  return (
    <div className="ride-selection">
      <div className="map-container">
        <MapComponent pickup={pickup} drop={drop} />{' '}
       
      </div>
      <h3>Available Rides</h3>
      {vehicles.length > 0 ? (
        vehicles.map((vehicle, index) => (
          <div key={index} className="vehicle-table">
            <div className="vehicle-info">
              <img
                src={vehicle.logo}
                alt={`${vehicle.type} logo`}
                className="vehicle-logo"
              />
              <div className="vehicle-details">
                <div className="vehicle-type">{vehicle.type}</div>
                <div className="vehicle-description">{vehicle.description}</div>
              </div>
            </div>
            <button onClick={() => handleBookNow(vehicle)}>Book Now</button>
          </div>
        ))
      ) : (
        <p>No vehicles available.</p>
      )}
    </div>
  );
};

export default RideSelection;
