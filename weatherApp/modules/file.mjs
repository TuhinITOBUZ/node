import * as fs from 'fs';
import { addLocation, updateLocation, deleteLocation } from './weatherOperations.mjs';

fs.readFile('db.txt', function (err, data){
  if (err) {
    return console.error(err)
  }
  const arr = JSON.parse(data)

  addLocation(arr, 'Kerala', 25, 'Clear')

  updateLocation(arr, 'Kerala', 30, 'Sunny' )

  deleteLocation(arr, 'Kerala')

  fs.writeFile('db.txt', JSON.stringify(arr), function(err){
    if (err) {
      return console.error(err)
    }
  })
})