import 'leaflet/dist/leaflet.css';
import { TileLayer, CircleMarker, Tooltip } from 'react-leaflet';
import StyledMapContainer from '../mapContainers/StyledMapContainer';

const MapTooltips = () => {

  const center = [51.505, -0.09];

  return(
    <StyledMapContainer center={center} zoom={13} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <CircleMarker
        center={[51.51, -0.12]}
        pathOptions={{ color: 'red' }}
        radius={20}>
        <Tooltip>Tooltip for CircleMarker</Tooltip>
      </CircleMarker>
    </StyledMapContainer>
  )
};

export default MapTooltips;