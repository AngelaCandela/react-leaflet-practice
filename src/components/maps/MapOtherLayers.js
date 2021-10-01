import 'leaflet/dist/leaflet.css';
import { TileLayer, LayerGroup, Circle } from 'react-leaflet';
import StyledMapContainer from '../mapContainers/StyledMapContainer';

const MapOtherLayers = () => {

  const center = [51.505, -0.09];

  const fillBlueOptions = { fillColor: 'blue' };
  const fillRedOptions = { fillColor: 'red' };
  const greenOptions = { color: 'green', fillColor: 'green' };
  const purpleOptions = { color: 'purple' };

  return (
    <StyledMapContainer center={center} zoom={13} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <LayerGroup>
        <Circle center={center} pathOptions={fillBlueOptions} radius={200} />
      </LayerGroup>
    </StyledMapContainer>
  );
};

export default MapOtherLayers;
