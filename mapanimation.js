// Required by Mapbox.  This is the public token.
mapboxgl.accessToken = 'pk.eyJ1Ijoia2xtaWNoYWVsIiwiYSI6ImNrdGl6YXE3bDE3OTQydnFmbjB6YzdvdWwifQ.2IyAmNHvVBChsr2o304cCA';

// Creates the map on the page. Code provided.
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [-71.104081, 42.365554], 
    zoom: 15
});

// Global variables required to let the end-user interact with the map.
// Locations was provided.
var locations = [];
var buses = [];
var markers = [];
var stops = []; 

// Requests stop data from MBTA. Code provided.
async function getBusStops(){
	const url = 'https://api-v3.mbta.com/stops?filter[route_type]=3';
	const response = await fetch(url);
	const json     = await response.json();
	return json.data;
}

// Updates stops array and adds a small red marker for each to the map
// I added this code.
async function mapStops() {
  stopData = await getBusStops();
  for (i = 0; i < stopData.length; i++){
    let stop = {};
    stop.name = stopData[i].attributes.name;
    stop.coordinates = [stopData[i].attributes.longitude, stopData[i].attributes.latitude];
    stops.push(stop);
  }
  for (i = 0; i < stops.length; i++) {
    let stopMarker = new mapboxgl.Marker({
      color: 'red',
      scale: 0.5
    }).setLngLat(stops[i].coordinates).setPopup(new mapboxgl.Popup().setHTML(stops[i].name)).addTo(map);
  }
}

// Requests all active bus data from MBTA
// I adapted this from the similar provided function above.
async function getBusLocations(){
	const url = 'https://api-v3.mbta.com/vehicles?filter[route_type]=3&include=trip,stop';
	const response = await fetch(url);
	const json     = await response.json();
	return json.data;
}

// Updates buses array - begins by resetting the array to null
// I wrote this function to support the real time updating.
function fillBuses(locationArray) {
  buses = [];
  for (i = 0; i < locationArray.length; i++){
    let bus = {};
    bus.route = locationArray[i].relationships.route.data.id;
    bus.coordinates = [locationArray[i].attributes.longitude, locationArray[i].attributes.latitude];
    buses.push(bus);
  }
}

// Empty the markers array, there by removing the markers from the map.
// I wrote this function to support the real time updating.
function removeMarkers() {
  if (markers !== null) {
    for (var i = 0; i < markers.length; i++) {
        markers[i].remove();
      }
  }
}

// Removes existing bus markers and then adds new ones based on the latest buses array
// This is based on provided code - I adjusted it to support the live data feed and added the pop-up.
function moveMarkers(busesArray) {
  removeMarkers();
  for (i = 0; i < busesArray.length; i++) {
    let marker = new mapboxgl.Marker()
    .setLngLat(busesArray[i].coordinates).setPopup(new mapboxgl.Popup().setHTML("Route:" + busesArray[i].route)).addTo(map);
    markers.push(marker);
  }
}

// Updates map with blue bus markers every 30 seconds
// This function was provided and I made minor adjustments to support the change in animation.
async function run(){   
locations = await getBusLocations();
fillBuses(locations);
moveMarkers(buses);
setTimeout(run, 30000);
}