var map, infoWindow, service;
var hostnameRegexp = new RegExp('^https?://.+?/');
var days = ["Ponedjeljak", "Utorak", "Srijeda", "Četvrtak", "Petak", "Subota", "Nedjelja"];
var request, mapMoved = true;
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
    ],
    streetViewControl : false,
    mapTypeControlOptions: {
      style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,  
      position: google.maps.ControlPosition.BOTTOM_LEFT
    },
   fullscreenControlOptions: {
      position: google.maps.ControlPosition.BOTTOM_RIGHT
    },
    zoomControlOptions: {
      position: google.maps.ControlPosition.TOP_RIGHT
    }

  });

  service = new google.maps.places.PlacesService(map);
  infoWindow = new google.maps.InfoWindow({
    content: document.getElementById('info-content')
  });

//autocomplete
  var card = document.getElementById('pac-card');
  map.controls[google.maps.ControlPosition.TOP_CENTER].push(card);

  var input = document.getElementById('pac-input');
  //bottom left corner (sw)
  var p1 = new google.maps.LatLng(43.807908, 18.317789);
  //top left corner (ne)
  var p2 = new google.maps.LatLng(43.883274, 18.469452);
  var options = {
    componentRestrictions: {
        'country': 'BA'
    },
    bounds : new google.maps.LatLngBounds(p1, p2),
    strictBounds: true,
    language: 'bs'
  };

  var autocomplete = new google.maps.places.Autocomplete(input, options);
  autocomplete.setFields(['address_components', 'geometry', 'icon', 'name', 'rating', 
        'website', 'vicinity', 'formatted_phone_number', 'place_id', 'price_level', 'opening_hours']);
  autocomplete.setTypes([]);
  var infowindow = new google.maps.InfoWindow();
  var infowindowContent = document.getElementById('infowindow-content');
  infowindow.setContent(infowindowContent)
  var marker = new google.maps.Marker({
    map: map,
    anchorPoint: new google.maps.Point(0, -29)
  });


  autocomplete.addListener('place_changed', function() {
    infowindow.close();
    marker.setVisible(false);
    var place = autocomplete.getPlace();
    if (!place.geometry) {
      // User entered the name of a Place that was not suggested and
      // pressed the Enter key, or the Place Details request failed.
      window.alert("Nema pronađenih rezultata za: '" + place.name + "'");
      return;
    }

    // If the place has a geometry, then present it on a map.
    if (place.geometry.viewport) {
      map.fitBounds(place.geometry.viewport);
    } else {
      map.setCenter(place.geometry.location);
      map.setZoom(17);
    }
    marker.setPosition(place.geometry.location);
    marker.placeResult = place; 

    marker.setVisible(true);
    service.getDetails({placeId: place.place_id}, function(place, status) {
      if (status !== google.maps.places.PlacesServiceStatus.OK) {
        return;
      }
      google.maps.event.addListener(marker, 'click', function() {
        infoWindow.open(map, marker);
        buildIWContent(place);
      });
      infoWindow.open(map, marker);
      buildIWContent(place);
    });
    /*var infoWindow = new google.maps.InfoWindow({content: place.name});
    google.maps.event.addListener(marker, 'click', function() {
      infoWindow.open(map, marker);
    });*/
    /*var address = '';
    

    infowindowContent.children['place-icon'].src = place.icon;
    infowindowContent.children['place-name'].textContent = place.name;
    infowindowContent.children['place-address'].textContent = address;*/
    //infowindow.open(map, marker);
  });


  $(".checkbox :checkbox").change(function(event) {
    if (this.checked) {
        // the checkbox is now checked 
        if(!loaded[this.name]) {
          request = {
            //location: center,
            //radius: 10000,
            bounds:map.getBounds(),
            types: [this.name],
            language : 'bs'
          };
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

  //reload markers on map drag
  map.addListener('center_changed', function() {
    var checkBoxes = $(".checkbox input[type=checkbox]:checked").get();
    for (var i = checkBoxes.length - 1; i >= 0; i--) {
      request = {
        bounds:map.getBounds(),
        types: [checkBoxes[i].name],
        language : 'bs'
      };
      service.nearbySearch(request, function(results, status) {
        if (status == google.maps.places.PlacesServiceStatus.OK) {
          //let type = results[0].types[0];
          let type = checkBoxes[i].name;
          for (var i = 0; i < results.length; i++) {
            createMarker(results[i], type);
          }
        }
      });
    } 
  });


}
//end initMap









function buildIWContent(place) {
  document.getElementById('iw-icon').innerHTML = '<img class="hotelIcon" ' +
      'src="' + place.icon + '"/>';
  document.getElementById('iw-url').innerHTML = '<b><a href="' + place.url +
      '">' + place.name + '</a></b>';
  document.getElementById('iw-address').textContent = place.vicinity;
  if (place.formatted_phone_number) {
    document.getElementById('iw-phone-row').style.display = '';
    document.getElementById('iw-phone').textContent =
        place.formatted_phone_number;
  } else {
    document.getElementById('iw-phone-row').style.display = 'none';
  }

  // Assign a five-star rating to the hotel, using a black star ('&#10029;')
  // to indicate the rating the hotel has earned, and a white star ('&#10025;')
  // for the rating points not achieved.
  if (place.rating) {
    var ratingHtml = '';
    for (var i = 0; i < 5; i++) {
      if (place.rating < (i + 0.5)) {
        ratingHtml += '&#10025;';
      } else {
        ratingHtml += '&#10029;';
      }
    document.getElementById('iw-rating-row').style.display = '';
    document.getElementById('iw-rating').innerHTML = ratingHtml;
    }
  } else {
    document.getElementById('iw-rating-row').style.display = 'none';
  }

  // The regexp isolates the first part of the URL (domain plus subdomain)
  // to give a short URL for displaying in the info window.
  if (place.website) {
    var fullUrl = place.website;
    var website = hostnameRegexp.exec(place.website);
    if (website === null) {
      website = 'http://' + place.website + '/';
      fullUrl = website;
    }
    document.getElementById('iw-website-row').style.display = '';
    document.getElementById('iw-website').textContent = website;
  } else {
    document.getElementById('iw-website-row').style.display = 'none';
  }
  if(place.price_level) {
    var level
    switch(place.price_level) {
      case(0):{
        level = "Besplatno";
        break;
      }
      case(1):{
        level = "Jeftino";
        break;
      }
      case(2):{
        level = "Srednje";
        break;
      }
      case(3):{
        level = "Skupo";
        break;
      }
      case(4):{
        level = "Vrlo skupo";
        break;
      }

    }
    document.getElementById('iw-price-row').style.display = '';
    document.getElementById('iw-price').textContent = level;
  } else {
    document.getElementById('iw-price-row').style.display = 'none';
  }
  if(place.opening_hours) {
    var date = new Date();
    var opening_hours = place.opening_hours
    var open;
    var dan = opening_hours.periods[date.getDay()];
    let always = false;
    if(place.permanently_closed) {
      open = "Zatvoreno do daljnjeg";
    } else
    if(opening_hours.open_now) {
      open = "Otvoreno";
      if(dan.close) {
        open += ", zatvara se u " + dan.close.time.toString().substr(0,2) + ":" + dan.close.time.toString().substr(2) + "h";
      } else {
        open = "Otvoreno 24/7";
        always = true;

      }
    } else {
      open = "Zatvoreno";
      let timeStr = date.getHours().toString() + date.getMinutes().toString();
      let nextDay = (date.getDay()+1) % opening_hours.periods.length;
      if(dan.open > timeStr) {
        open += ", otvara se u " + days[nextDay] + " u " + dan.open.time.toString().substr(0,2) + ":" + dan.open.time.toString().substr(2) + "h";
      } else {
        dan = opening_hours.periods[nextDay];
        open += ", otvara se u " + days[nextDay] + " u " + dan.open.time.toString().substr(0,2) + ":" + dan.open.time.toString().substr(2) + "h";
      }

    }
    document.getElementById('iw-open-row').style.display = '';
    document.getElementById('iw-open').textContent = open;
    if(!always) {
      document.getElementById('iw-open-hours-row').style.display = '';
      var divs = document.getElementsByClassName('weekday');
      for (var i =  0; i < opening_hours.weekday_text.length; i++) {
        divs[i].style.display = '';
        var text = opening_hours.weekday_text[i];
        text = days[i] + text.substr(text.indexOf(":"));
        text.replace("closed", "zatvoreno");
        divs[i].innerHTML = text;
      }
    }
    
    //document.getElementById('iw-open-hours').textContent = ;
  } else {
    document.getElementById('iw-open-row').style.display = 'none';
    document.getElementById('iw-open-hours-row').style.display = 'none';
    var divs = document.getElementsByClassName('weekday');
    for (var i =  0; i < divs.length; i++) {
      divs[i].style.display = 'none';
    }
  }
}



function showInfoWindow() {
  var marker = this;
  service.getDetails({placeId: marker.placeResult.place_id}, function(place, status) {
    if (status !== google.maps.places.PlacesServiceStatus.OK) {
      return;
    }
    infoWindow.open(map, marker);
    buildIWContent(place);
  });
}


function createMarker(place, type) {
  let id = place.place_id;
  let m = markers[type];
  let found = false;
  for (var i = markers[type].length - 1; i >= 0; i--) {
    if(m[i].placeResult.place_id == id) {
      return;
    }
  }

  var marker = new google.maps.Marker({
    position: place.geometry.location,
    icon: icons[type].icon,
    map: map
  });
  marker.placeResult = place; 
  google.maps.event.addListener(marker, 'click', showInfoWindow);
  markers[type].push(marker);
  console.log(place);
}

function callback(results, status) {
  if (status == google.maps.places.PlacesServiceStatus.OK) {
    let type = results[0].types[0];
    for (var i = 0; i < results.length; i++) {
      var place = results[i];
      createMarker(place, type);
    }
  }
}

