import 'leaflet/dist/leaflet.css';
import { TileLayer } from 'react-leaflet';
import StyledMapContainer from '../mapContainers/StyledMapContainer';

const MapSVGOverlay = () => {

  const position = [51.505, -0.09];
  return (
    <StyledMapContainer center={position} zoom={13} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
  );
};

export default MapSVGOverlay;
