import 'leaflet/dist/leaflet.css';
import { LayersControl, TileLayer } from 'react-leaflet';
import StyledMapContainer from '../mapContainers/StyledMapContainer';

const MapLayersControl = () => {

  const center = [51.505, -0.09];

  return(
    <StyledMapContainer center={center} zoom={13} scrollWheelZoom={false}>
      <LayersControl position="topright">
        <LayersControl.BaseLayer checked name="OpenStreetMap.Mapnik">
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
        </LayersControl.BaseLayer>
      </LayersControl>
    </StyledMapContainer>
  )
};

export default MapLayersControl;
