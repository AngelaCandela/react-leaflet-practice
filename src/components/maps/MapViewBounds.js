import 'leaflet/dist/leaflet.css';
import { TileLayer } from 'react-leaflet';
import StyledMapContainer from '../mapContainers/StyledMapContainer';

const MapViewBounds = () => {

  const innerBounds = [
    [49.505, -2.09],
    [53.505, 2.09],
  ];

  const outerBounds = [
    [50.505, -29.09],
    [52.505, 29.09],
  ];

  const SetBoundsRectangles = () => {
  }

  return(
    <StyledMapContainer bounds={outerBounds} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <SetBoundsRectangles />
    </StyledMapContainer>
  )
};

export default MapViewBounds;
