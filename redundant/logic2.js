// Add console.log to check to see if our code is working.
console.log("working");

// Create the map object with a center and zoom level.
let map = L.map('mapid').setView([60.0522, -96.2437], 4);

// Get data from cities.js
let provinceData = provinces;

// Loop through the cities array and create one marker for each city.
provinces.forEach(function(province) {
    console.log(province)
   });
   
// Loop through the cities array and create one marker for each city.
provinceData.forEach(function(province){
    console.log(province)
    L.circleMarker(province.location, {
        radius: 10,
        color: '#000000',
        opacity: 400
    })
    .bindPopup(province.province + ", " + provinces.code).addTo(map);
});

var link= "stanford-gn522sy3319.geojson";
d3.json(link), (function(data) {
    L.geoJson(stanford-gn522sy3319).addTo(map)});

var tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);


// We create the tile layer that will be the background of our map.
// let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
// attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
//     maxZoom: 18,
//     accessToken: API_KEY
// });

// Then we add our 'graymap' tile layer to the map.
// streets.addTo(map);