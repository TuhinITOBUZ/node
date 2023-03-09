import { weatherData as db } from "./weatherDb.mjs";

// function to add a new location
export function addLocation(location, tempC, condition) {
  db.push({ location: location, tempC: tempC, condition: condition });
}

// function to update a location data
export function updateLocation(location, tempC, condition) {
  return db.filter(function (ele) {
    if (ele.location != location) {
      return ele;
    } else {
      ele.tempC = tempC;
      ele.condition = condition;
      return ele;
    }
  });
}

// function to get location data
export function getLocationData(location) {
  return db.filter((ele) => {
    if (ele.location === location) {
      return ele;
    }
  });
}

// functions to get all the locations
export function getLocationNames() {
  let locationList = [];
  for (let i = 0; i < db.length; i++) {
    locationList.push(db[i].location);
  }
  return locationList;
}

// function to delete a location
export function deleteLocation(location) {
  for (let i = 0; i < db.length; i++) {
    if (db[i].location === location) {
      db.splice(i, 1);
    }
  }
}
