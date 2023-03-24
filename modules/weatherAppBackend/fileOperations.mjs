import * as fs from "fs/promises";
import path from "path";
import {
  addLocation,
  updateLocation,
  deleteLocation,
} from "./weatherDataOperations.mjs";

// function to read file
export async function readData() {
  try {
    const databasePath = path.resolve("database.txt");
    const data =await fs.readFile(databasePath, "utf8");
    const array = JSON.parse(data);
    console.log(array);
    return array;
  } catch (err) {
    console.log(err);
  }
}

//  function to write file with given array od data
export async function writeData(array) {
  try {
    const databasePath = path.resolve("database.txt");
    await fs.writeFile(databasePath, JSON.stringify(array), function (err) {
      if (err) {
        return console.error(err);
      }
    });
  } catch (err) {
    console.log(err);
  }
}

// function to add new data to the file
export function addNewlocation(location, tempC, condition) {
  try {
    const array = readData();
    addLocation(array, location, tempC, condition);
    writeData(array);
  } catch (err) {
    console.error(err);
  }
}

// function to update a location data
export function updateNewLcation(location, tempC, condition) {
  try {
    const array = readData();
    updateLocation(array, location, tempC, condition);
    writeData(array);
  } catch (err) {
    console.error(err);
  }
}

// function to delete a location data
export function deleteExistingLocation(location) {
  try {
    const array = readData();
    deleteLocation(array, location);
    writeData(array);
  } catch (err) {
    console.error(err);
  }
}
