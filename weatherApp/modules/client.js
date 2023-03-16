
async function getWeatherDataFromLocalApi(loc) {
  const url = `http:/localhost:5000/${loc}`;
  const response = await fetch(url)
    .then(function (res) {
      return res.json();
    })
    .catch((err) => {
      console.log(err);
    });
  if (response.error) {
    alert(response.error.message);
  } else {
    console.log(response);
  }
}
getWeatherDataFromLocalApi("Kolkata");
