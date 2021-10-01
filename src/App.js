import './App.css';
import MapPopupWithMarker from './components/maps/MapPopupWithMarker';
import MapEventsFindYourLocation from './components/maps/MapEventsFindYourLocation';
import MapVectorLayers from './components/maps/MapVectorLayers';
import MapSVGOverlay from './components/maps/MapSVGOverlay';

function App() {
  return (
    <>
      <div id="mapId"></div>
      <div id="otherMapId"></div>
      <MapPopupWithMarker />
      <MapEventsFindYourLocation />
      <MapVectorLayers />
      <MapSVGOverlay />
    </>
  );
}

export default App;
