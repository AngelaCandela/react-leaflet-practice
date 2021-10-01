import { useState } from 'react';
import 'leaflet/dist/leaflet.css';
import { TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet';
import StyledMapContainer from '../mapContainers/StyledMapContainer';

const MapEventsFindYourLocation = () => {

  const LocationMarker = () => {

    const [position, setPosition] = useState(null);
    const map = useMapEvents({
      click() {
        map.locate()
      },
      locationfound(e) {
        setPosition(e.latlng)
        map.flyTo(e.latlng, map.getZoom())
      },
    });

    return position === null ? null : (
      <Marker position={position}>
        <Popup>You are here</Popup>
      </Marker>
    )
  };

  return(
    <>
    <h3>Map Events Find Your Location</h3>
    <StyledMapContainer center={{ lat: 51.505, lng: -0.09 }} zoom={13} scrollWheelZoom={false}>
      <TileLayer attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <LocationMarker />
    </StyledMapContainer>
    </>
  )
};

export default MapEventsFindYourLocation;
