import './App.css';
import MapPopupWithMarker from './components/maps/MapPopupWithMarker';
import MapEventsFindYourLocation from './components/maps/MapEventsFindYourLocation';
import MapVectorLayers from './components/maps/MapVectorLayers';
import MapSVGOverlay from './components/maps/MapSVGOverlay';
import MapOtherLayers from './components/maps/MapOtherLayers';
import MapTooltips from './components/maps/MapTooltips';
import MapLayersControl from './components/maps/MapLayersControl';
import MapPanes from './components/maps/MapPanes';
import MapViewBounds from './components/maps/MapViewBounds';
import MapReactControl from './components/maps/MapReactControl';

function App() {
  return (
    <>
      <div id="mapId"></div>
      <div id="otherMapId"></div>
      <MapPopupWithMarker />
      <MapEventsFindYourLocation />
      <MapVectorLayers />
      <MapSVGOverlay />
      <MapOtherLayers />
      <MapTooltips />
      <MapLayersControl />
      <MapPanes />
      <MapViewBounds />
      <MapReactControl />
    </>
  );
}

export default App;
