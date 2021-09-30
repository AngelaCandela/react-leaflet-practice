import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import L from 'leaflet';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

var myMap = L.map('mapId').setView([51.505, -0.09], 13);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoiYW5nZWxhY2FuZGVsYSIsImEiOiJja3U2cjllMTUzdm4zMnJxdGI4Zm10cHpiIn0.T0libTGY0nQcbu6gGP4caA'
}).addTo(myMap);

var marker = L.marker([51.5, -0.09]).addTo(myMap);

var circle = L.circle([51.508, -0.11], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 500
}).addTo(myMap);

var polygon = L.polygon([
    [51.509, -0.08],
    [51.503, -0.06],
    [51.51, -0.047]
]).addTo(myMap);

// Attaching a popup to a marker/circle/polygon. Note that openPopup() is only available for markers

marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();
circle.bindPopup("I am a circle.");
polygon.bindPopup("I am a polygon.");

var myOtherMap = L.map('otherMapId').setView([51.505, -0.09], 13);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/satellite-v9',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoiYW5nZWxhY2FuZGVsYSIsImEiOiJja3U2cjllMTUzdm4zMnJxdGI4Zm10cHpiIn0.T0libTGY0nQcbu6gGP4caA'
}).addTo(myOtherMap);
