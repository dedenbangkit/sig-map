import 'leaflet';

var mymap = L.map('mapid').setView([-8.19, 158.55], 7);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
    maxZoom: 20,
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
        '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
        'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    id: 'mapbox.streets'
}).addTo(mymap);

let position = [];

$.get('/api/locations').done(function(data) {
    let markers = new L.MarkerClusterGroup();
    $(data).each(function(a, b) {
        let gjson = {"properties":b.id};
        let html = "<center class='bold'>" +b.name+"</center>"+ "<hr><button href='#' data="+b.id+" class='btn btn-primary btn-block' onclick='getDetails(this)'>View Details</button>";
        let marker = L.marker(b.latlng, gjson).bindPopup(html).openPopup();
        /*
        marker.on('click', function(ev) {
            let data = ev.sourceTarget.options;
        */
        markers.addLayer(marker);
    });
    mymap.addLayer(markers);
});
