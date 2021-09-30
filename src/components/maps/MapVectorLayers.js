import 'leaflet/dist/leaflet.css';
import { TileLayer, Marker, Popup } from 'react-leaflet';
import StyledMapContainer from '../mapContainers/StyledMapContainer';

const MapVectorLayers = () => {
  
  const center = [51.505, -0.09];

  const polyline = [
    [51.505, -0.09],
    [51.51, -0.1],
    [51.51, -0.12],
  ];
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