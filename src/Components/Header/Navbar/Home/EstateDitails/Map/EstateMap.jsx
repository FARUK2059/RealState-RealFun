// import { Map, Marker, Popup } from "leaflet";
// import { TileLayer } from 'https://cdn.esm.sh/react-leaflet/TileLayer'
// import { useRef, useState } from "react";
// import { IoLocationSharp } from "react-icons/io5";
// import L from "leaflet";
// // import "../../../../../../../src/";
// import osm from "./osm-provider"

// const markerIcon = new L.Icon({
//     iconUrl: require(`${<IoLocationSharp />}`),
//     iconSize: [35, 45],
//     iconAnchor: [17, 45],
//     popupAnchor: [3, -46]
// })

// const EstateMap = () => {
//     const [center, setCenter] = useState({ lat: 13.084622, lng: 80.248357 });
//     const ZOOM_LEVEL = 10;
//     const mapRef = useRef();


//     return (
//         <>
//             <header title="React Leaflet Map Setup" />
//             <div className="row">
//                 <div className="col text-center">
//                     <h2>React Leaflet - Adding Markers to react leaflet</h2>
//                     <p>Loading Basic Map using layer from map Title</p>
//                     <div className="col">
//                         <Map center={center} zoom={ZOOM_LEVEL} ref={mapRef}>

//                             <TileLayer
//                                 url={osm.maptiler.url}
//                                 attribution= {osm.maptiler.attribution}
//                             />

//                             <Marker
//                                 position={[13.084622, 80.248357]}
//                                 icon={markerIcon}
//                             >
//                             <Popup>
//                                 <b>First Marker</b>
//                             </Popup>

//                             </Marker>

//                         </Map>
//                     </div>

//                 </div>
//             </div>

//         </>
//     );
// };

// export default EstateMap;