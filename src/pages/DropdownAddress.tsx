// import React, { useState } from 'react';
// import { GoogleMap, LoadScript, Autocomplete } from '@react-google-maps/api';

// const containerStyle = {
//   width: '400px',
//   height: '400px'
// };

// const center = {
//   lat: -3.745,
//   lng: -38.523
// };

// const DropdownAddress: React.FC = () => {
//   const [places, setPlaces] = useState<any[]>([]);

//   const onLoad = (autocomplete: google.maps.places.Autocomplete) => {
//     autocomplete.addListener('place_changed', () => {
//       const place = autocomplete.getPlace();
//       setPlaces([place]);
//     });
//   };

//   return (
//     <LoadScript googleMapsApiKey="AIzaSyClidR7X1DEiFO1LFrA_T0p6YvAS8bq77Q" libraries={["places"]}>
//       <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
//         <Autocomplete onLoad={onLoad}>
//           <input
//             type="text"
//             placeholder="Enter address"
//             style={{
//               boxSizing: `border-box`,
//               border: `1px solid transparent`,
//               width: `240px`,
//               height: `32px`,
//               padding: `0 12px`,
//               borderRadius: `3px`,
//               boxShadow: `0 2px 6px rgba(0, 0, 0, 0.3)`,
//               fontSize: `14px`,
//               outline: `none`,
//               textOverflow: `ellipses`,
//               position: "absolute",
//               left: "50%",
//               marginLeft: "-120px"
//             }}
//           />
//         </Autocomplete>
//       </GoogleMap>
//     </LoadScript>
//   );
// };

// export default DropdownAddress;
