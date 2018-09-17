// const map = L.map ('map',{
//     center: [49.83826, -24.02324],
//     zoom:10,
//     minZoom:2,
//     maxZoom:13
//     // zoomControls:false
// });

// var myLayer = L.tileLayer('https://www.openstreetmap.org/#map=8/49.870/23.338', {
//     attribuеiom: "My first map",
//     minZoom: 2,
// }).addTo(map);

// L.marker([49.83826, -24.02324]).addTo(map)
//     .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
//     .openPopup();

var map = L.map('map').setView([49.83826, -24.02324], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([49.83826, -24.02324]).addTo(map)
    .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
    .openPopup();