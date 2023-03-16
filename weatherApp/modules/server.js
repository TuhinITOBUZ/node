const http = require("http");
const fs = require("fs");
const path = require("path");
const port = 5000;

function readData() {
  try {
    let dbPath = path.resolve("db.txt");
    const data = fs.readFileSync(dbPath, "utf8");
    const arr = JSON.parse(data);
    return arr;
  } catch (err) {
    console.log(err);
  }
}

const data = readData();

function getRouterBasedData(route) {
  let status = 200;
  let locData = {};
  let loc = route.split("/")[1];  
  for (let i = 0; i < data.length; i++) {
    if (data[i].location === loc) {
      locData = data[i];
    }
  }
  return JSON.stringify({
    status,
    route,
    location: loc,
    data: locData,
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
  res.end(getRequestData(req));
});

server.listen(port, () => {
  console.log(`server listening at port ${port}`);
});
