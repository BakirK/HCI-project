var iconBase = 'https://maps.google.com/mapfiles/kml/shapes/';
var icons = {
  parking: {
    name: 'Parking',
    icon: 'icons/parking.png',
  },
  library: {
    name: 'Library',
    icon: 'icons/library.png'
  },
  travel_agency: {
    name: 'Info',
    icon: 'icons/travel_agency.png'
  },
  car_wash: {
    name: 'Carwash',
    icon: "icons/car_wash.png"
  },
  gas_station: {
    name: 'Gas',
    icon: "icons/gas_station.png"
  },
  grocery_or_supermarket: {
    name: 'Grocery',
    icon: "icons/grocery_or_supermarket.png"
  },
  lodging : {
    name: 'Lodging',
    icon: "icons/lodging.png"
  },
  jewelry_store : {
    name: 'Jewelry_store',
    icon: "icons/jewelry_store.png"
  },
  home_goods_store : {
    name: 'home_goods_store',
    icon: "icons/home_goods_store.png"
  },
  liquor_store : {
    name: 'liquor_store',
    icon: "icons/liquor_store.png"
  },
  shopping_mall : {
    name: 'shopping_mall',
    icon: "icons/shopping_mall.png"
  },
  restaurant : {
    name: 'restaurant',
    icon: "icons/restaurant.png"
  },
  bar : {
    name: 'bar',
    icon: "icons/bar.png"
  },
  cafe : {
    name: 'cafe',
    icon: "icons/cafe.png"
  },
  bakery : {
    name: 'bakery',
    icon: "icons/bakery.png"
  },
  night_club : {
    name: 'night_club',
    icon: "icons/night_club.png"
  },
  bank : {
    name: 'bank',
    icon: "icons/bank.png"
  },
  atm : {
    name: 'atm',
    icon: "icons/atm.png"
  },
  embassy : {
    name: 'embassy',
    icon: "icons/embassy.png"
  },
  gym : {
    name: 'gym',
    icon: "icons/gym.png"
  },
  laundry : {
    name: 'laundry',
    icon: "icons/laundry.png"
  },
  zoo : {
    name: 'zoo',
    icon: "icons/zoo.png"
  },
  museum : {
    name: 'museum',
    icon: "icons/museum.png"
  },
  airport : {
    name: 'airport',
    icon: "icons/airport.png"
  },
  taxi_stand : {
    name: 'taxi_stand',
    icon: "icons/taxi_stand.png"
  },
  car_rental : {
    name: 'car_rental',
    icon: "icons/car_rental.png"
  },
  bus_station : {
    name: 'bus_station',
    icon: "icons/bus_station.png"
  },
  light_rail_station : {
    name: 'light_rail_station',
    icon: "icons/light_rail_station.png"
  }
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
  light_rail_station : []
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
  light_rail_station : false
}

var whatMarker = {
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
  light_rail_station : false
}