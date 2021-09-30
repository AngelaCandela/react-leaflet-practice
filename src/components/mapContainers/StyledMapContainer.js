import 'leaflet/dist/leaflet.css';
import { MapContainer } from 'react-leaflet';
import styled from 'styled-components';

const StyledMapContainer = styled(MapContainer)`
  height: ${props => props.height ? props.height : '50vh'};
  margin-bottom: 50px;
`;

export default StyledMapContainer;
