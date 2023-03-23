import http from "http"
import fs from "fs"
import path from "path";

const port = 5000;

function readData() {
  try {
    const databasePath = path.resolve("./database.txt");
    const data = fs.readFileSync(databasePath, "utf8");
    const array = JSON.parse(data);
    return array;
  } catch (err) {
    console.log(err);
  }
}

const data = readData();

function getRouterBasedData(route) {
  let status = 200;
  let locationData;
  let location = route.split("/")[1];
  for (let i = 0; i < data.length; i++) {
    if (data[i].location === location) {
      locationData = data[i];
    }
  }
  return JSON.stringify({
    status,
    route,
    data: locationData,
  });
}

function getRequestData(req) {
  if (req.url === "/") {
    return JSON.stringify(data);
  } else {
    return getRouterBasedData(req.url);
  }
}

const server = http.createServer((req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.end(getRequestData(req));
});

server.listen(port, () => {
  console.log(`server listening at port ${port}`);
});
