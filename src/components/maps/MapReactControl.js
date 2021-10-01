import 'leaflet/dist/leaflet.css';
import { TileLayer, useMap } from 'react-leaflet';
import StyledMapContainer from '../mapContainers/StyledMapContainer';

const MapReactControl = () => {

  const MinimapControl = ({ position, zoom }) => {
    const parentMap = useMap();
    return (
    )
  };

  return(
    <>
    <h3>Map React Control</h3>
    <StyledMapContainer center={[51.505, -0.09]} zoom={6} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
    </StyledMapContainer>
    </>
  )
};

export default MapReactControl;
