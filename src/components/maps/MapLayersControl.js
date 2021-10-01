import 'leaflet/dist/leaflet.css';
import { LayersControl } from 'react-leaflet';
import StyledMapContainer from '../mapContainers/StyledMapContainer';

const MapLayersControl = () => {

  const center = [51.505, -0.09];

  return(
    <StyledMapContainer center={center} zoom={13} scrollWheelZoom={false}>
      <LayersControl position="topright">
      </LayersControl>
    </StyledMapContainer>
  )
};

export default MapLayersControl;
