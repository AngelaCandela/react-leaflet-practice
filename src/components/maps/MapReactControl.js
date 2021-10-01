import { useState, useMemo, useCallback } from 'react';
import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, Rectangle, useMap, useMapEvent } from 'react-leaflet';
import { useEventHandlers } from '@react-leaflet/core';
import StyledMapContainer from '../mapContainers/StyledMapContainer';

const MapReactControl = () => {

  const POSITION_CLASSES = {
    bottomleft: 'leaflet-bottom leaflet-left',
    bottomright: 'leaflet-bottom leaflet-right',
    topleft: 'leaflet-top leaflet-left',
    topright: 'leaflet-top leaflet-right',
  };

  const BOUNDS_STYLE = { weight: 1 };

  const MinimapBounds = ({ parentMap, zoom }) => {
    const minimap = useMap();

    // Clicking a point on the minimap sets the parent's map center
    const onClick = useCallback(
      (e) => {
        parentMap.setView(e.latlng, parentMap.getZoom())
      },
      [parentMap],
    );

    useMapEvent('click', onClick);

    // Keep track of bounds in state to trigger renders
    const [bounds, setBounds] = useState(parentMap.getBounds());
    const onChange = useCallback(() => {
      setBounds(parentMap.getBounds())
      // Update the minimap's view to match the parent map's center and zoom
      minimap.setView(parentMap.getCenter(), zoom)
    }, [minimap, parentMap, zoom]);

    // Listen to events on the parent map
    const handlers = useMemo(() => ({ move: onChange, zoom: onChange }), []);
    useEventHandlers({ instance: parentMap }, handlers);

    return <Rectangle bounds={bounds} pathOptions={BOUNDS_STYLE} />
  };

  const MinimapControl = ({ position, zoom }) => {
    const parentMap = useMap();
    const mapZoom = zoom || 0;

    // Memoize the minimap so it's not affected by position changes
    const minimap = useMemo(
      () => (
        <MapContainer
          style={{ height: 80, width: 80 }}
          center={parentMap.getCenter()}
          zoom={mapZoom}
          dragging={false}
          doubleClickZoom={false}
          scrollWheelZoom={false}
          attributionControl={false}
          zoomControl={false}>
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          <MinimapBounds parentMap={parentMap} zoom={mapZoom} />
        </MapContainer>
      ),
      [],
    );

    const positionClass = (position && POSITION_CLASSES[position]) || POSITION_CLASSES.topright;

    return (
      <div className={positionClass}>
        <div className="leaflet-control leaflet-bar">{minimap}</div>
      </div>
    )
  };

  return(
    <>
    <h3>Map React Control</h3>
    <StyledMapContainer center={[51.505, -0.09]} zoom={6} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <MinimapControl position="topright" />
    </StyledMapContainer>
    </>
  )
};

export default MapReactControl;
