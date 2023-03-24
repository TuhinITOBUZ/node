import process from "process";
import path from "path";
import { createFile, deleteFile, read, write } from "./fileOperations.mjs";
import { mkDir, readDir, delDir, renameDir } from "./folderOperations.mjs";

let args = process.argv;
let address = path.dirname(args[1]) + "/root/";
let task = "";
let name = "";
let text = "";
let operation = "";

function showList() {
  console.log("Enter 'list' to display all options.");
  console.log("Enter 1 to create a file.");
  console.log("Enter 2 to delete a file.");
  console.log("Enter 3 to read a file.");
  console.log("Enter 4 to write a file.");
  console.log("Enter 5 to make a directory.");
  console.log("Enter 6 to delete a directory.");
  console.log("Enter 7 to read the content of a directory.");
  console.log("Enter 8 to rename a directory.");
  console.log("Enter 9 to view the list agin.");
  console.log("Enter 0 to terminate.");
}

function performOperation(operation) {
  if (operation === "createFile") {
    createFile(address, task);
  } else if (operation === "deleteFile") {
    deleteFile(address, task);
  } else if (operation === "read") {
    read(address, task);
  } else if (operation === "write") {
    write(address, task, text);
  } else if (operation === "mkDir") {
    mkDir(address, task);
  } else if (operation === "delDir") {
    delDir(address, task);
  } else if (operation === "readDir") {
    readDir(address, task);
  } else if (operation === "renameDir") {
    renameDir(address, task, text);
  } else {
    console.log("Wrong input details.");
  }
}

showList();
process.stdin.on("data", (data) => {
  task = Number(data.toString().trim().split(" ")[0]);
  name = data.toString().trim().split(" ")[0]
  text = data.toString().trim().split(" ")[1];
  if (task === "0") {
    process.exit();
  } else if (task === 1) {
    operation = "createFile";
    console.log("Enter /path/file-name.extension to create the file.");
  } else if (task === 2) {
    operation = "deleteFile";
    console.log("Enter /path/file-name.extension to delete the file.");
  } else if (task === 3) {
    operation = "read";
    console.log("Enter /path/file-name.extension to read the file.");
  } else if (task === 4) {
    operation = "write";
    console.log(
      "Enter /path/file-name.extension and the text to write the file."
    );
  } else if (task === 5) {
    operation = "mkDir";
    console.log("Enter /path/folder-name to create the directory.");
  } else if (task === 6) {
    operation = "delDir";
    console.log("Enter /relative-path of the folder to delete the directory.");
  } else if (task === 7) {
    operation = "readDir";
    console.log("Enter /relative-path to read the content of the directory.");
  } else if (task === 8) {
    operation = "renameDir";
    console.log(
      "Enter /path/existing-name then /path/new-name to rename a folder"
    );
  } else if (task === 9) {
    showList();
  } else if (!isNaN(task)) {
    performOperation(operation);
  } else {
    console.log(`Wrong input`);
  }
});
