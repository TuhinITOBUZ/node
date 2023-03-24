import * as fs from "fs/promises";

// to create a file
export async function createFile(address, relativePath) {
  try {
    await fs.writeFile(address + relativePath, "");
    console.log("File created successfully!!");
  } catch (err) {
    console.log("Incorrect input or the file is missing.");
  }
}

// to delete a file
export async function deleteFile(address, relativePath) {
  try {
    await fs.unlink(address + relativePath);
    console.log("File delted!");
  } catch (err) {
    console.log("Incorrect input or the file is missing.");
  }
}

// to read a file
export async function read(address, relativePath) {
  console.log("Reading file ...");
  try {
    const data = await fs.readFile(address + relativePath, "utf8");
    console.log(data);
  } catch (err) {
    console.log("Incorrect input or the file is missing.");
  }
}

// to write a file
export async function write(address, relativePath, text) {
  try {
    await fs.writeFile(address + relativePath, text);
    console.log("File written successfully!");
  } catch (err) {
    console.log("Incorrect input or the file is missing.");
  }
}
