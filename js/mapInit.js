var map;
function initMap() {
  var center = new google.maps.LatLng(43.8563, 18.4131);
  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 16,
    center: center,
    mapTypeId: 'roadmap',
    gestureHandling: 'greedy',
    styles: [    
        {
            featureType: "poi",
            elementType: "labels",
            stylers: [{ visibility: "off" }]
        },
        {
          featureType: "transit",
          elementType: "labels",
          stylers: [{ visibility: "off" }]
        }
    ]
  });


  $(".checkbox :checkbox").change(function(event) {
    if (this.checked) {
        // the checkbox is now checked 
        if(!loaded[this.name]) {
          var request = {
            location: center,
            radius: 500,
            types: [this.name]
          };
          var service = new google.maps.places.PlacesService(map);
          service.nearbySearch(request, callback);
          loaded[this.name] = true;
        } else {
          let markArr = markers[this.name];
          for (var i = markArr.length - 1; i >= 0; i--) {
            markArr[i].setVisible(true);
          }
        }
        
        


    } else {
        // the checkbox is now no longer checked
        let markArr = markers[this.name];
        for (var i = markArr.length - 1; i >= 0; i--) {
          markArr[i].setVisible(false);
        }
    }
  });


}
//end initMap



function createMarker(place) {
  var placeLoc = place.geometry.location;
  var marker = new google.maps.Marker({
    position: placeLoc,
    icon: icons[place.types[0]].icon,
    map: map/*,
    label: { color: "#000000", fontSize: '12px', text: place.name }*/
  });
  var infoWindow = new google.maps.InfoWindow({content: place.name});
  google.maps.event.addListener(marker, 'click', function() {
    infoWindow.open(map, marker);
  });
  markers[place.types[0]].push(marker);
  console.log(place);
}

function callback(results, status) {
  if (status == google.maps.places.PlacesServiceStatus.OK) {
    for (var i = 0; i < results.length; i++) {
      var place = results[i];
      createMarker(place);
    }
  }
}

