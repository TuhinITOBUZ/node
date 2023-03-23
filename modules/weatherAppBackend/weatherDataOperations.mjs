// function to add a new location
export function addLocation(database, location, tempC, condition) {
  try {
    let flag = false;
    for (let i = 0; i < database.length; i++) {
      if (database[i].location === location) {
        flag = true;
        break;
      }
    }
    if (flag == false) {
      database.push({ location: location, tempC: tempC, condition: condition });
    } else {
      console.log("location already exists");
    }
  } catch (err) {
    console.error(err);
  }
}

// function to update a location data
export function updateLocation(database, location, tempC, condition) {
  try {
    return database.filter(function (element) {
      if (element.location != location) {
        return element;
      } else {
        element.tempC = tempC;
        element.condition = condition;
        return element;
      }
    });
  } catch (err) {
    console.error(err);
  }
}

// function to delete a location
export function deleteLocation(database, location) {
  try {
    let flag = false;
    for (let i = 0; i < database.length; i++) {
      if (database[i].location === location) {
        database.splice(i, 1);
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
export function getLocationData(database, location) {
  try {
    let flag = false;
    for (let i = 0; i < database.length; i++) {
      if (database[i].location === location) {
        flag = true;
        return database[i];
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
export function getLocationNames(database) {
  try {
    let locationList = [];
    for (let i = 0; i < database.length; i++) {
      locationList.push(database[i].location);
    }
    return locationList;
  } catch (err) {
    console.error(err);
  }
}
