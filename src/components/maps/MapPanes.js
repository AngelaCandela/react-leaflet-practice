import { useState } from 'react';
import 'leaflet/dist/leaflet.css';
import { TileLayer } from 'react-leaflet';
import StyledMapContainer from '../mapContainers/StyledMapContainer';

const MapPanes = () => {

  const outer = [
    [50.505, -29.09],
    [52.505, 29.09],
  ];

  const BlinkingPane = () => {
    const [render, setRender] = useState(true);
  };

  return(
    <>
    <h3>Map Panes</h3>
    <StyledMapContainer bounds={outer} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
    </StyledMapContainer>
    </>
  )
};

export default MapPanes;
