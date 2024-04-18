
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';

import 'leaflet/dist/leaflet.css';

const EstateMap = () => {
  return (
    <div className='grid max-h-screen p-4 z-50 items-center justify-center'>
        <p className='p-4 text-2xl font-extrabold text-yellow-400'> RealFun Real Estate location</p>
      <div style={{ height: '500px', width: '1000px' }}>
        <MapContainer 
          center={[24.91667, 91.76667]} 
          zoom={10} 
          scrollWheelZoom={true}
          style={{ height: '100%', width: '100%' }}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[24.91667, 91.76667]}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
};

export default EstateMap;
