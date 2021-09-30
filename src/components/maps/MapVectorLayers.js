import 'leaflet/dist/leaflet.css';
import { TileLayer, Marker, Popup } from 'react-leaflet';
import StyledMapContainer from '../mapContainers/StyledMapContainer';

const MapVectorLayers = () => {
  return(
    <StyledMapContainer center={center} zoom={13} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
    </StyledMapContainer>
  )
};

export default MapVectorLayers;
