import * as fs from "fs";

// to make a new directory
export function mkDir(address, relativePath) {
  const folderName = address + relativePath;
  try {
    if (!fs.existsSync(folderName)) {
      console.log("Creating new directory ...");
      fs.mkdirSync(folderName);
      console.log("New directory created.");
    }
  } catch (err) {
    console.log("Such directory already exists!");
    console.error(err);
  }
}

// to read the content of the directory
export function readDir(address, relativePath) {
  if (fs.existsSync(address + relativePath)) {
    try {
      const data = fs.readdirSync(address + relativePath);
      console.log(data);
    } catch (err) {
      console.error(err);
    }
  } else {
    console.log("Path does not exist!");
  }
}

// to delete dir
export function delDir(address, relativePath) {
  if (relativePath === "/") {
    console.log("Cannot delete root!");
  } else {
    if (fs.existsSync(address + relativePath)) {
      fs.rmdir(
        address + relativePath,
        { recursive: true, force: true },
        (err) => {
          if (err) {
            throw err;
          }
          console.log(`${relativePath} is deleted!`);
        }
      );
    } else {
      console.log("Path does not exist!");
    }
  }
}

// to rename a dir
export function renameDir(address, name1, name2) {
  if (fs.existsSync(address + name1)) {
    try {
      fs.renameSync(address + name1, address + name2);
      console.log("File successfully renamed!");
    } catch (err) {
      console.error(err);
    }
  } else {
    console.log("Path does not exist!");
  }
}
