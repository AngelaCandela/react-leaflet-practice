import 'leaflet/dist/leaflet.css';
import StyledMapContainer from '../mapContainers/StyledMapContainer';

const MapOtherLayers = () => {

  const center = [51.505, -0.09];

  return (
    <StyledMapContainer>
    <StyledMapContainer center={center} zoom={13} scrollWheelZoom={false}>

    </StyledMapContainer>
  );
};

export default MapOtherLayers;
