import React, { useState } from 'react';
import './Journey.css';

const Journey = ({ vehicle }) => {
  const [journeyStarted, setJourneyStarted] = useState(false);
  const [journeyCompleted, setJourneyCompleted] = useState(false);

  const startJourney = () => {
    setJourneyStarted(true);
    setTimeout(() => {
      setJourneyCompleted(true);
    }, 5000); // Simulate a journey duration of 5 seconds
  };

  return (
    <div className="journey">
      {vehicle ? (
        <>
          <h2>Journey Details</h2>
          <p>Driver: {vehicle.driverName}</p>
          <p>Estimated Distance: {vehicle.distance} km</p>
          <p>Estimated Time: {vehicle.time} minutes</p>

          {!journeyStarted && (
            <button onClick={startJourney}>Start Journey</button>
          )}

          {journeyStarted && !journeyCompleted && (
            <p>Your journey is in progress... 🚗</p>
          )}

          {journeyCompleted && (
            <p>
              Journey Completed! 😊
              <br />
              <button>Finish</button>
            </p>
          )}
        </>
      ) : (
        <p>No vehicle selected.</p>
      )}
    </div>
  );
};

export default Journey;
