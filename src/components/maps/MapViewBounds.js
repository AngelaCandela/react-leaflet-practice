import { useState, useMemo } from 'react';
import 'leaflet/dist/leaflet.css';
import { TileLayer, Rectangle, useMap } from 'react-leaflet';
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

  const redColor = { color: 'red' };
  const whiteColor = { color: 'white' };

  const SetBoundsRectangles = () => {
    const [bounds, setBounds] = useState(outerBounds);
    const map = useMap();

    const innerHandlers = useMemo(
      () => ({
        click() {
          setBounds(innerBounds)
          map.fitBounds(innerBounds)
        },
      }),
      [map],
    );
    const outerHandlers = useMemo(
      () => ({
        click() {
          setBounds(outerBounds)
          map.fitBounds(outerBounds)
        },
      }),
      [map],
    );

    return (
      <>
        <Rectangle
          bounds={outerBounds}
          eventHandlers={outerHandlers}
          pathOptions={bounds === outerBounds ? redColor : whiteColor}
        />
        <Rectangle
          bounds={innerBounds}
          eventHandlers={innerHandlers}
          pathOptions={bounds === innerBounds ? redColor : whiteColor}
        />
      </>
    )
  }

  return(
    <>
    <h3>Map View Bounds</h3>
    <StyledMapContainer bounds={outerBounds} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <SetBoundsRectangles />
    </StyledMapContainer>
    </>
  )
};

export default MapViewBounds;
