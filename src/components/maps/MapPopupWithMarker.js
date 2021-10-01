import 'leaflet/dist/leaflet.css';
import { TileLayer, Marker, Popup } from 'react-leaflet';
import StyledMapContainer from '../mapContainers/StyledMapContainer';

const MapPopupWithMarker = () => {

  const position = [51.505, -0.09];

  return (
    <>
    <h3>Map Popup With Marker</h3>
    <StyledMapContainer center={position} zoom={13} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </StyledMapContainer>
    </>
  );
};

export default MapPopupWithMarker;
