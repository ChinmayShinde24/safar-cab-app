import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './Pricing.css';
import { divIcon } from 'leaflet';

const Pricing = () => {
  const location = useLocation();
  const navigate = useNavigate();


  const { pickup, destination, journeyType } = location.state || {};


  if (!pickup || !destination) {
    navigate('/');
    return null;
  }

  const prices = [
    {
      name: 'Mini',
      price: '₹12/km',
      description: 'Affordable AC cabs with free Wi-Fi',
    },
    {
      name: 'Prime Sedan',
      price: '₹13.8/km',
      description: 'Comfortable sedans with extra legroom',
    },
    {
      name: 'Prime SUV',
      price: '₹18.33/km',
      description: 'Spacious SUVs for group travel',
    },
    {
      name: 'Prime SUV+',
      price: '₹42/km',
      description: 'Comfortable SUVs for smooth rides',
    },
  ];

  return (
    <div className="body">
      <div className="pricing-container">
        <h2>Outstation Prices</h2>
        <div>
          <strong>Pickup Location:</strong> {pickup} <br />
          <strong>Destination:</strong> {destination} <br />
          <strong>Journey Type:</strong> {journeyType}
        </div>
        <div className="pricing-list">
          {prices.map((car, index) => (
            <div key={index} className="pricing-item">
              <h3>{car.name}</h3>
              <p>{car.description}</p>
              <p className="price">{car.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;
