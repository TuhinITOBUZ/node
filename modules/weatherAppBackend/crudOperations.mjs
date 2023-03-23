import * as fileOperations from "./fileOperations.mjs";

// reading file
fileOperations.readData();

// adding a new location in file
let newlocation = "Delhi";
let newTempC = 27;
let newCondition = "Sunny";
fileOperations.addNewlocation(
  newlocation.toLowerCase(),
  newTempC,
  newCondition[0].toUpperCase() + newCondition.substring(1, newCondition.length)
);

// updating a location data in file
let updatelocation = "Mumbai";
let updateTempC = 21;
let updateCondition = "Clear";
fileOperations.updateNewLcation(
  updatelocation.toLowerCase(),
  updateTempC,
  updateCondition[0].toUpperCase() +
    updateCondition.substring(1, updateCondition.length)
);

// deleting a location data from file
fileOperations.deleteExistingLocation("Kolkata".toLowerCase());
