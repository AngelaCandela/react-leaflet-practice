import './App.css';
import MapPopupWithMarker from './components/maps/MapPopupWithMarker';
import MapEventsFindYourLocation from './components/maps/MapEventsFindYourLocation';

function App() {
  return (
    <>
      <div id="mapId"></div>
      <div id="otherMapId"></div>
      <MapPopupWithMarker />
      <MapEventsFindYourLocation />
    </>
  );
}

export default App;
