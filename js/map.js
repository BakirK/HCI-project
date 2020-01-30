var mymap = L.map('mapid').setView([43.8563, 18.4131], 16);
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    accessToken: 'pk.eyJ1IjoibGFzZW1ibyIsImEiOiJjazYxOGR1NzIwMHExM2VtejlsajFtNGVoIn0.xCMTNwlvx_QFF6arbc9qfg'
}).addTo(mymap);