const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "a1eed637aemsh58e64b984be8593p1b48fcjsn655d3219ab7f",
    "X-RapidAPI-Host": "shazam-core.p.rapidapi.com",
  },
};
fetch("https://shazam-core.p.rapidapi.com/v1/charts/world", options)
  .then((response) => response.json())
  .then((response) => console.log(response))
  .catch((err) => console.error(err));
