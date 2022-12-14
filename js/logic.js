// Add console.log to check to see if our code is working.
console.log("working");

// Create the map object with a center and zoom level.
let map = L.map('mapid').setView([36.4522, -96.2437], 4);

// Get data from cities.js
let provinceData = provinces;

// Loop through the cities array and create one marker for each city.
// provinces.forEach(function(province) {
    // console.log(province)
//    });
var colour = provinceData.forEach(function(score){
  console.log(score)
  
if(score<=33.45)
  color = 'E389B9';
else if(score>=33.451 && score<=33.528)
  color = "E83845";
else
  color = "FFFFFF";

})

// Remove zoom ability
map.removeControl(map.zoomControl);  
// Loop through the cities array and create one marker for each city.
provinceData.forEach(function(province){
    console.log(province)
    L.circleMarker(province.location, {
        radius: 10,
        backgroundcolor: colour,
        opacity: 100,
        fillOpacity: 0.75
        
    })
    .bindPopup(province.province + "  " + province.chart).addTo(map);
    
});

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}
map.on('popupclose', function(e) {
  console.log(e.target);
  map.setView([36.4522, -96.2437], 4);
});
// L.control.scale(<Control.Scale options> </Control.Scale>)

// provinceData.forEach(function(score){
//   console.log(score);
// )}

var tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 4,
    minZoom: 4,
    zoomControl: true,
    
    
      
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

// var div = L.DomUtil.get('div_id');
// if (!L.Browser.touch) {
//     L.DomEvent.disableClickPropagation(div);
//     L.DomEvent.on(div, 'mousewheel', L.DomEvent.stopPropagation);
// } else {
//     L.DomEvent.on(div, 'click', L.DomEvent.stopPropagation);
// }

// var color = "red";
// if (score < 0) score = 0;
// if(score<=49)
//   color = "red";
// else if(score>=50 && score<85)
//   color = "blue";
// else
//   color = "green";

// var myGeoJson = 'provinces.geojson'
// // var link= "gpr_000b11a_e.json";
// var mapStyle = {
//     color: "white",
//     fillColor: "pink",
//     fillOpacity: 0.5,
//     weight: 1.5
//   };
  
// d3.json(myGeoJson, function(data) {
//     L.geoJson(data,{
//         style: mapStyle
//     }).addTo(map);
// });
// var legend = L.control({position: 'bottomright'});

// legend.onAdd = function (map) {

//     var div = L.DomUtil.create('div', 'info legend'),
//     grades = ['Manitoba', 'Alberta', 'British Columbia']
//     labels = [];

//     // loop through our density intervals and generate a label with a colored square for each interval
//     for (var i = 0; i < grades.length; i++) {
//         div.innerHTML +=
//             '<i style="background:' + getColor(grades[i] + 1) + '"></i> ' +
//             grades[i] + (grades[i + 1] ? '&ndash;' + grades[i + 1] + '<br>' : '+');
// }

// return div;
// };

// legend.addTo(map);
// We create the tile layer that will be the background of our map.
// let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
// attribution: 'Map data ?? <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
//     maxZoom: 18,
//     accessToken: API_KEY
// });

// Then we add our 'graymap' tile layer to the map.
// streets.addTo(map);