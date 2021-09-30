import { useState } from 'react';
import 'leaflet/dist/leaflet.css';
import { TileLayer, Marker, Popup } from 'react-leaflet';
import StyledMapContainer from '../mapContainers/StyledMapContainer';

const MapEventsFindYourLocation = () => {

  const LocationMarker = () => {

    const [position, setPosition] = useState(null);
  };

  return(
    <StyledMapContainer center={{ lat: 51.505, lng: -0.09 }} zoom={13} scrollWheelZoom={false}>
      <TileLayer attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
    </StyledMapContainer>
  )
};

export default MapEventsFindYourLocation;
