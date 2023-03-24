import * as fs from "fs/promises";

// to make a new directory
export async function mkDir(address, relativePath) {
  const folderName = address + relativePath;
  try {
    console.log("Creating new directory ...");
    await fs.mkdir(folderName);
    console.log("New directory created.");
  } catch (err) {
    console.log("Such directory already exists!");
    console.error(err);
  }
}

// to read the content of the directory
export async function readDir(address, relativePath) {
  try {
    const data = await fs.readdir(address + relativePath);
    console.log(data);
  } catch (err) {
    console.log("Path not found!");
  }
}

// to delete directory
export async function delDir(address, relativePath) {
  if (relativePath === "/") {
    console.log("Cannot delete root!");
  } else {
    try {
      await fs.rm(
        address + relativePath,
        { recursive: true, force: true },
        (err) => {
          if (err) {
            throw err;
          }
        }
      );
      console.log(`${relativePath} is deleted!`);
    } catch (err) {
      console.log("Path not found!");
    }
  }
}

// to rename a directory
export async function renameDir(address, name1, name2) {
  try {
    await fs.rename(address + name1, address + name2);
    console.log("File successfully renamed!");
  } catch (err) {
    console.log("Path not found!");
  }
}
