import * as fs from "fs";

// to create a file
export function createFile(address, relativePath) {
  if (!fs.existsSync(address + relativePath)) {
    try {
      fs.writeFileSync(address + relativePath, "");
      console.log("File created successfully!!");
    } catch (err) {
      console.error(err);
    }
  } else {
    console.log("Path does not exist!");
  }
}

// to delete a file
export function deleteFile(address, relativePath) {
  if (fs.existsSync(address + relativePath)) {
    try {
      fs.unlinkSync(address + relativePath);
      console.log("File delted!");
    } catch (err) {
      console.error(err);
    }
  } else {
    console.log("Path does not exist!");
  }
}

// to read a file
export function read(address, relativePath) {
  if (fs.existsSync(address + relativePath)) {
    console.log("Reading file ...");
    try {
      const data = fs.readFileSync(address + relativePath, "utf8");
      console.log(data);
    } catch (err) {
      console.error(err);
    }
  } else {
    console.log("Path does not exist!");
  }
}

// to write a file
export function write(address, relativePath, text) {
  if (fs.existsSync(address + relativePath)) {
    try {
      fs.writeFileSync(address + relativePath, text);
      console.log("File written successfully!");
    } catch (err) {
      console.error(err);
    }
  } else {
    console.log("Path does not exist!");
  }
}
