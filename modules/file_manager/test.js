process.stdin.on("data", (data) => {
  if (data.toString().trim() === "0") {
    process.exit();
  } else {
    let task = data.toString().trim().split(" ")[0]
    let name = data.toString().trim().split(" ")[1]
    let text = data.toString().trim().split(" ")[2]
    console.log(task);
    console.log(name);
    console.log(text);
  }
});
