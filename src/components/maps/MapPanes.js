import { useState, useRef, useEffect } from 'react';
import 'leaflet/dist/leaflet.css';
import { TileLayer, Pane, Rectangle } from 'react-leaflet';
import StyledMapContainer from '../mapContainers/StyledMapContainer';

const MapPanes = () => {

  const outer = [
    [50.505, -29.09],
    [52.505, 29.09],
  ];

  const BlinkingPane = () => {
    const [render, setRender] = useState(true);
    const timerRef = useRef();

    useEffect(() => {
      timerRef.current = setInterval(() => {
        setRender((r) => !r)
      }, 5000)
      return () => {
        clearInterval(timerRef.current)
      }
    }, []);

    return render ? (
      <Pane name="cyan-rectangle" style={{ zIndex: 500 }}>
        <Rectangle bounds={outer} pathOptions={{ color: 'cyan' }} />
      </Pane>
    ) : null
  };

  return(
    <>
    <h3>Map Panes</h3>
    <StyledMapContainer bounds={outer} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <BlinkingPane />
    </StyledMapContainer>
    </>
  )
};

export default MapPanes;
