// import React, { useState } from 'react';

// const vehicles = [
//   {
//     type: 'Auto',
//     description: 'Get an auto at your doorstep',
//     time: '1 min',
//     icon: '🚕',
//   },
//   {
//     type: 'Mini',
//     description: 'Comfy hatchbacks at pocket-friendly fares',
//     time: '1 min',
//     icon: '🚗',
//   },
//   {
//     type: 'Prime Sedan',
//     description: 'Sedans with free wifi and top drivers',
//     time: '1 min',
//     icon: '🚙',
//   },
//   {
//     type: 'Prime SUV',
//     description: 'SUVs with free wifi and top drivers',
//     time: '8 min',
//     icon: '🚐',
//   },
// ];

// const VehicleSelection = ({ onVehicleSelect }) => {
//   const [selectedVehicle, setSelectedVehicle] = useState(null);

//   const handleSelect = (vehicle) => {
//     setSelectedVehicle(vehicle);
//     onVehicleSelect(vehicle);
//   };

//   return (
//     <div>
//       <h3>Available Rides</h3>
//       {vehicles.map((vehicle, index) => (
//         <div
//           key={index}
//           onClick={() => handleSelect(vehicle)}
//           style={{
//             border:
//               selectedVehicle === vehicle
//                 ? '2px solid green'
//                 : '1px solid grey',
//             padding: '10px',
//             margin: '5px',
//             cursor: 'pointer',
//           }}
//         >
//           <span style={{ fontSize: '2rem' }}>{vehicle.icon}</span>
//           <span>{vehicle.type}</span>
//           <p>{vehicle.description}</p>
//           <p>{vehicle.time} away</p>
//           <p>₹{Math.floor(Math.random() * 900) + 100}</p>
//         </div>
//       ))}
//       {selectedVehicle && (
//         <button
//           onClick={() =>
//             alert(
//               `Thanks for booking ${selectedVehicle.type}. It is arriving in 1 min. Thank you!`,
//             )
//           }
//         >
//           Continue
//         </button>
//       )}
//     </div>
//   );
// };

// export default VehicleSelection;
