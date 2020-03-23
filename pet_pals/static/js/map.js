var API_KEY = fetch('/mapboxkey', {credentials:'omit'}).then((response) => {
  return response.json()}).then((api_key) => createMap(api_key));

function createMap(accessToken) {
  // Create a map object
  var myMap = L.map("mappy-boi", {
    //38.702969, -76.828331
    center: [38.7029, -76.8283],
    zoom: 15
  });

  var tile = L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
    attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
    maxZoom: 18,
    id: "mapbox.streets-basic",
    accessToken: accessToken
  });


  tile.addTo(myMap);
}
