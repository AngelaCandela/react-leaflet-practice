import 'leaflet/dist/leaflet.css';
import { TileLayer, Marker, CircleMarker, Rectangle, Polygon, Popup, Tooltip } from 'react-leaflet';
import StyledMapContainer from '../mapContainers/StyledMapContainer';

const MapTooltips = () => {

  const center = [51.505, -0.09];

  const multiPolygon = [
    [
      [51.51, -0.12],
      [51.51, -0.13],
      [51.53, -0.13],
    ],
    [
      [51.51, -0.05],
      [51.51, -0.07],
      [51.53, -0.07],
    ],
  ];

  const rectangle = [
    [51.49, -0.08],
    [51.5, -0.06],
  ];

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
      <Marker position={[51.51, -0.09]}>
        <Popup>Popup for Marker</Popup>
        <Tooltip>Tooltip for Marker</Tooltip>
      </Marker>
      <Polygon pathOptions={{ color: 'purple' }} positions={multiPolygon}>
        <Tooltip sticky>sticky Tooltip for Polygon</Tooltip>
      </Polygon>
      <Rectangle bounds={rectangle} pathOptions={{ color: 'black' }}>
        <Tooltip direction="bottom" offset={[0, 20]} opacity={1} permanent>
          permanent Tooltip for Rectangle
        </Tooltip>
      </Rectangle>
    </StyledMapContainer>
  )
};

export default MapTooltips;
