var iconBase = 'https://maps.google.com/mapfiles/kml/shapes/';
var icons = {
  parking: {
    name: 'Parking',
    icon: iconBase + 'parking_lot_maps.png',
  },
  library: {
    name: 'Library',
    icon: iconBase + 'library_maps.png'
  },
  travel_agency: {
    name: 'Info',
    icon: iconBase + 'info-i_maps.png'
  },
  car_wash: {
    name: 'Carwash',
    icon: "icons/carwash.png"
  },
  gas_station: {
    name: 'Gas',
    icon: iconBase + "gas_stations.png"
  },
  grocery_or_supermarket: {
    name: 'Carwash',
    icon: iconBase + "grocery.png"
  },
  grocery_or_supermarket: {
    name: 'Carwash',
    icon: iconBase + "grocery.png"
  },
  lodging : {
    name: 'Lodging',
    icon: iconBase + "lodging.png"
  }
  jewelry_store
  home_goods_store
  liquor_store
  shopping_mall
  restaurant
  barcafe
  bakery
  night_club
  bank
  atm
  embassy
  gym
  laundry
  zoo
  museum
  airport
  taxi_stand
  car_rental
  bus_station
  light_rail_station
};

var markers = {
  parking : [],
  travel_agency : [],
  library : [],
  car_wash : [],
  gas_station : [],
  grocery_or_supermarket : [],
  home_goods_store: [],
  lodging : [],
  jewelry_store : [],
  liquor_store : [],
  shopping_mall : [],
  restaurant : [],
  bar : [],
  cafe : [],
  bakery : [],
  bank : [],
  atm : [],
  embassy : [],
  gym : [],
  laundry : [],
  night_club : [],
  zoo : [],
  museum : [],
  airport : [],
  taxi_stand : [],
  car_rental : [],
  bus_station : [],
  light_rail_station : [],
  night_club : [],


}
var loaded = {
  parking : false,
  travel_agency : false,
  library : false,
  car_wash : false, 
  gas_station : false,
  grocery_or_supermarket : false, 
  home_goods_store : false,
  lodging : false,
  jewelry_store : false,
  liquor_store : false,
  shopping_mall : false,
  restaurant : false,
  bar : false,
  cafe : false,
  bakery : false,
  night_club : false,
  bank : false,
  atm : false,
  embassy : false,
  gym : false,
  laundry : false,
  zoo : false,
  museum : false,
  airport : false,
  taxi_stand : false,
  car_rental : false,
  bus_station : false,
  light_rail_station : false,
}