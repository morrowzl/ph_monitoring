// var API_KEY = fetch('/mapboxkey', {credentials:'omit'}).then((response) => {
//   return response.json()}).then((key) => createMap(key));


function createMap() {
  fetch('/mapboxkey', {credentials:'omit'}).then((response) => {
    return response.json()}).then((api_key) => key = api_key);
  // Create a map object
  var myMap = L.map("mappy-boi", {
    //38.702969, -76.828331
    center: [38.7029, -76.8283],
    zoom: 13
  });

  var tile = L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
    attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
    maxZoom: 18,
    id: "mapbox.streets-basic",
    accessToken: key
  });


  tile.addTo(myMap);
}

createMap();