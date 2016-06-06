var map = null;
var zoomLevel = 12;
var eiffelTower = new L.LatLng(48.858093, 2.294694);

function showMap() {
  initMap();
  addMarker();
}

function initMap() {
  var tileSource = createTileSource();
  var mapOptions = {
    center: eiffelTower,
    zoom: zoomLevel,
    layers: [tileSource]
  };
  map = new L.Map('leaflet-map', mapOptions);
}

function createTileSource() {
  var tileSourceURL = 'http://{s}.tile.osm.org/{z}/{x}/{y}.png';
  var tileSourceOptions = {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
  };
  return new L.TileLayer(tileSourceURL, tileSourceOptions);
}

function addMarker() {
  L.marker(eiffelTower).addTo(map);
}
