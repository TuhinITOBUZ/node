import * as fs from "fs";
import {
  addLocation,
  updateLocation,
  deleteLocation,
} from "./weatherOperations.mjs";
import path from "path";

// function to read file
export function readData() {
  try {
    const dbPath = path.resolve("db.txt");
    const data = fs.readFileSync(dbPath, "utf8");
    const arr = JSON.parse(data);
    console.log(arr);
    return arr;
  } catch (err) {
    console.log(err);
  }
}

//  function to write file
export function writeData(arr) {
  try {
    const dbPath = path.resolve("db.txt");
    fs.writeFileSync(dbPath, JSON.stringify(arr), function (err) {
      if (err) {
        return console.error(err);
      }
    });
  } catch (err) {
    console.log(err);
  }
}

// function to add new data
export function addLoc(location, tempC, condition) {
  try {
    const arr = readData();
    addLocation(arr, location, tempC, condition);
    writeData(arr);
  } catch (err) {
    console.error(err);
  }
}

// function to update a location data
export function updateLoc(location, tempC, condition) {
  try {
    const arr = readData();
    updateLocation(arr, location, tempC, condition);
    writeData(arr);
  } catch (err) {
    console.error(err);
  }
}

// function to delete a location data
export function deleteLoc(location) {
  try {
    const arr = readData();
    deleteLocation(arr, location);
    writeData(arr);
  } catch (err) {
    console.error(err);
  }
}
