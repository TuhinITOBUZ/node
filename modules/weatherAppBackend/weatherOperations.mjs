// function to add a new location
export function addLocation(db, location, tempC, condition) {
  try {
    let flag = false;
    for (let i = 0; i < db.length; i++) {
      if (db[i].location === location) {
        flag = true;
        break;
      }
    }
    if (flag == false) {
      db.push({ location: location, tempC: tempC, condition: condition });
    } else {
      console.log("Location already exists");
    }
  } catch (err) {
    console.error(err);
  }
}

// function to update a location data
export function updateLocation(db, location, tempC, condition) {
  try {
    return db.filter(function (ele) {
      if (ele.location != location) {
        return ele;
      } else {
        ele.tempC = tempC;
        ele.condition = condition;
        return ele;
      }
    });
  } catch (err) {
    console.error(err);
  }
}

// function to delete a location
export function deleteLocation(db, location) {
  try {
    let flag = false;
    for (let i = 0; i < db.length; i++) {
      if (db[i].location === location) {
        db.splice(i, 1);
        flag = true;
        break;
      }
    }
    if (flag == false) {
      console.log("location doesn't exists");
    }
  } catch (err) {
    console.error(err);
  }
}

// function to get details of a location
export function getLocationData(db, location) {
  try {
    let flag = false;
    for (let i = 0; i < db.length; i++) {
      if (db[i].location === location) {
        flag = true;
        return db[i];
      }
    }
    if (flag == false) {
      console.log("location does not exists");
    }
  } catch (err) {
    console.error(err);
  }
}

// functions to get all the locations
export function getLocationNames(db) {
  try {
    let locationList = [];
    for (let i = 0; i < db.length; i++) {
      locationList.push(db[i].location);
    }
    return locationList;
  } catch (err) {
    console.error(err);
  }
}
