import 'leaflet';

var mymap = L.map('mapid').setView([-8.19, 158.55], 7);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(mymap);

let position = [];

$.get('/api/locations').done(function(data) {
    let markers = new L.MarkerClusterGroup();
    $(data).each(function(a, b) {
        let gjson = {"properties":b.id};
        let html = "<center class='bold'>" +b.name+"</center>"+ "<hr><button href='#' data="+b.id+" class='btn btn-primary btn-block' onclick='getDetails(this)'>" +
            "<i class='fas fa-info-circle'></i> View Details</button>";
        let marker = L.marker(b.latlng, gjson).bindPopup(html).openPopup();
        /*
        marker.on('click', function(ev) {
            let data = ev.sourceTarget.options;
        */
        markers.addLayer(marker);
    });
    mymap.addLayer(markers);
});
