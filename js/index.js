const map = L.map ('map',{
    // center: [49.835715, 24.060306],
    zoom:15,
    zoomControls:false
});

var myLayer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribuition: "My first map",
    minZoom: 2,
}).addTo(map);

function onLocationFound(e) {
    var radius = e.accuracy / 1;

    L.marker(e.latlng).addTo(map)
        .bindPopup("You are within " + radius + " meters from this point").openPopup();

    L.circle(e.latlng, radius).addTo(map);
}

map.on('locationfound', onLocationFound);

// L.marker([49.835715, 24.060306]).addTo(map)
//     .bindPopup('HappyWalker Head Quaqrter is here')
//     .openPopup();

 map.locate({ 
     setView: true,
     zoom: 15 
    });


    function onLocationError(e) {
    alert(e.message);
}

map.on('locationerror', onLocationError);

map.addControl(L.control.locate({
    locateOptions: {
        enableHighAccuracy: true
    }
}));
// var map = L.map('map').setView([49.835715, 24.060306
// ], 13)

// L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
//     attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
// }).addTo(map);


// L.marker([49.835715, 24.060306
// ]).addTo(map)// маркер котика-7
// .bindPopup('HappyWalker Head Quaqrter is here')
// .openPopup();

