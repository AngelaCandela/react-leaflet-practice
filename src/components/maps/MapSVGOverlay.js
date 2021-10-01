import 'leaflet/dist/leaflet.css';
import { TileLayer, SVGOverlay } from 'react-leaflet';
import StyledMapContainer from '../mapContainers/StyledMapContainer';

const MapSVGOverlay = () => {

  const position = [51.505, -0.09];
  const bounds = [
    [51.49, -0.08],
    [51.5, -0.06],
  ];

  return (
    <>
    <h3>Map SVG Overlay</h3>
    <StyledMapContainer center={position} zoom={13} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <SVGOverlay attributes={{ stroke: 'purple' }} bounds={bounds}>
        <rect x="0" y="0" width="100%" height="100%" fill="orange" />
        <circle r="5" cx="10" cy="70" fill="red" />
        <text x="20%" y="50%" stroke="black">
          SVG Overlay
        </text>
      </SVGOverlay>
    </StyledMapContainer>
    </>
  );
};

export default MapSVGOverlay;
