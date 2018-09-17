var map = L.map ('map',{
    center: [49.83826, -24.02324],
    zoom:10,
    minZoom:2,
    maxZoom:13
    // zoomControls:false
});

var myLayer = L.tileLayer('https://api.mapbox.com/styles/v1/slipiko/cjm6b539i06zk2slc70u7hc2w.html?fresh=true&title=true&access_token=pk.eyJ1Ijoic2xpcGlrbyIsImEiOiJjam02YXZyM2owMW1pM3ZvNTZwOG95eDlpIn0.c7RziqSI2xT9xSEsX51w5w#10.1/49.065482/1.800784/0',{
    attriburiom: "My first map",
    minZoom:2,
}).addTo(map);