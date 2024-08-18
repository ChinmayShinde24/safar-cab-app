import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Outstation.css';

const Outstation = () => {
    const [pickup, setPickup] = useState('');
    const [destination, setDestination] = useState('');
    const [journeyType, setJourneyType] = useState('Round Trip');
    const [departDate, setDepartDate] = useState('');
    const [departTime, setDepartTime] = useState('');
    const [returnDate, setReturnDate] = useState('');
    const [returnTime, setReturnTime] = useState('');
    const navigate = useNavigate();

    const handleSubmit = () => {
        if (pickup && destination) {
            
            navigate('/pricing', { state: { pickup, destination, journeyType, departDate, departTime, returnDate, returnTime } });
        } else {
            alert('Please enter both pickup and destination locations.');
        }
    };

    return (
        <div className="outstation-container">
            <div className="gradient-overlay">
                <div className="outstation-card">
                    <h2>Looking for an Outstation Cab ride?</h2>
                    <input
                        type="text"
                        placeholder="Enter Pickup Location"
                        value={pickup}
                        onChange={(e) => setPickup(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="Enter Destination"
                        value={destination}
                        onChange={(e) => setDestination(e.target.value)}
                    />
                    <div className="journey-options">
                        <label>
                            <input
                                type="radio"
                                value="One Way"
                                checked={journeyType === 'One Way'}
                                onChange={() => setJourneyType('One Way')}
                            />
                            One Way
                        </label>
                        <label>
                            <input
                                type="radio"
                                value="Round Trip"
                                checked={journeyType === 'Round Trip'}
                                onChange={() => setJourneyType('Round Trip')}
                            />
                            Round Trip
                        </label>
                    </div>
                    <div className="date-time">
                        <div>
                            <label>Depart:</label>
                            <input
                                type="date"
                                value={departDate}
                                onChange={(e) => setDepartDate(e.target.value)}
                            />
                            <input
                                type="time"
                                value={departTime}
                                onChange={(e) => setDepartTime(e.target.value)}
                            />
                        </div>
                        {journeyType === 'Round Trip' && (
                            <div>
                                <label>Return:</label>
                                <input
                                    type="date"
                                    value={returnDate}
                                    onChange={(e) => setReturnDate(e.target.value)}
                                />
                                <input
                                    type="time"
                                    value={returnTime}
                                    onChange={(e) => setReturnTime(e.target.value)}
                                />
                            </div>
                        )}
                    </div>
                    <button onClick={handleSubmit}>See Price</button>
                </div>
            </div>
        </div>
    );
};

export default Outstation;
