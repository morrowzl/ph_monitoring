var API_KEY = fetch('/mapboxkey', {credentials:'omit'}).then((response) => {
  return response.json()}).then((api_key) => createMap(api_key));
/*
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
*/

function createMap(accessToken) {
  var points = [
    {
      id: "MW-1",
      coordinates: [38.699620, -76.828428]
    },
    {
      id: "MW-2",
      coordinates: [38.701017, -76.828615]
    },  
    {
      id: "MW-3",
      coordinates: [38.700959, -76.827190]
    },
    {
      id: "MW-4",
      coordinates: [38.699947, -76.826682]
    },
    {
      id: "MW-5",
      coordinates: [38.701889, -76.826659]
    },
    {
      id: "MW-6",
      coordinates: [38.701568, -76.828352]
    },
    {
      id: "MW-7",
      coordinates: [38.701893, -76.827398]
    },
    {
      id: "MW-8",
      coordinates: [38.702483, -76.826689]
    },
    {
      id: "MW-9",
      coordinates: [38.702971, -76.825811]
    },
    {
      id: "MW-10",
      coordinates: [38.703592, -76.825857]
    },
    {
      id: "MW-11",
      coordinates: [38.703119, -76.826432]
    },
    {
      id: "MW-12",
      coordinates: [38.704371, -76.827490]
    },
    {
      id: "MW-13",
      coordinates: [38.703708, -76.825237]
    },
    {
      id: "MW-14",
      coordinates: [38.703478, -76.827185]
    },
    {
      id: "MW-15",
      coordinates: [38.702449, -76.828311]
    },
    {
      id: "NE-PT",
      coordinates: [38.700935, -76.826769]
    },
    {
      id: "S-PT",
      coordinates: [38.699542, -76.827205]
    },
    {
      id: "SW-BRIDGE",
      coordinates: [38.701187, -76.826608]
    },
    {
      id: "SW-CONFLUENCE",
      coordinates: [38.703815, -76.822652]
    },
    {
      id: "TEMP-WELL",
      coordinates: [38.706122, -76.822811]
    }
  ]

  var pointMarkers = [];

  for (var i = 0; i < points.length; i++) {
    // loop through the cities array, create a new marker, push it to the cityMarkers array
    pointMarkers.push(
      L.marker(points[i].coordinates).bindPopup("<h1>" + cities[i].id + "</h1>")
    );
  }

  var pointLayer = L.layerGroup(pointMarkers);

  var light = L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
    attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
    maxZoom: 18,
    id: "mapbox.light",
    accessToken: accessToken
  });

  var dark = L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
    attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
    maxZoom: 18,
    id: "mapbox.dark",
    accessToken: accessToken
  });

  var satellite = L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
    attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
    maxZoom: 18,
    id: "mapbox.satellite",
    accessToken: accessToken
  });

  var streets = L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
    attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
    maxZoom: 18,
    id: "mapbox.streets-basic",
    accessToken: accessToken
  });

  var baseMaps = {
    Street: streets,
    Satellite: satellite,
    Light: light,
    Dark: dark
  };

  var overlayMaps = {
    Monitoring_Points: pointLayer
    // Site_Boundary: siteBoundaryLayer,
    // POIs: poiLayer,
    // treatment systems, site entrance, admin building, etc.
  };

  var myMap = L.map("mappy-boi", {
    //38.702969, -76.828331
    center: [38.7029, -76.8283],
    zoom: 15,
    layers: [streets, pointLayer]
  });

  L.control.layers(baseMaps, overlayMaps).addTo(myMap);

}