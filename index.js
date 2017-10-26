navigator.geolocation.getCurrentPosition(function (position) {
  var lat = position.coords.latitude;
  var lon = position.coords.longitude;
  var tempF;
  var minTempF;
  var maxTempF;
  var tempC;
  var minTempC;
  var maxTempC;
  var locationName;
  var weatherIcon;
  var isCelsius = true;

  function convert() {
    if (isCelsius) {
      isCelsius = false;
      document.getElementById('temp').innerHTML = tempF + ' °F';
      document.getElementById('maxTemp').innerHTML = maxTempF + ' °F';
      document.getElementById('minTemp').innerHTML = minTempF + ' °F';
    } else {
      document.getElementById('temp').innerHTML = tempC + ' °C';
      document.getElementById('maxTemp').innerHTML = maxTempC + ' °C';
      document.getElementById('minTemp').innerHTML = minTempC + ' °C';
      isCelsius = true;
    }
  }

  fetch('https://fcc-weather-api.glitch.me/api/current?lat=' + lat + '&lon=' + lon + '')
  .then(
    function (response) {
      return response.json();
    })
  .then(function (jsonData) {
    console.log(jsonData);
    tempC = parseFloat(jsonData.main.temp).toFixed(2);
    minTempC = parseFloat(jsonData.main.temp_min).toFixed(2);
    maxTempC = parseFloat(jsonData.main.temp_max).toFixed(2);
    tempF = parseFloat((jsonData.main.temp * 1.8) + 32).toFixed(2);
    minTempF = parseFloat((jsonData.main.temp_min * 1.8) + 32).toFixed(2);
    maxTempF = parseFloat((jsonData.main.temp_max * 1.8) + 32).toFixed(2);
    locationName = jsonData.name;
    weatherIcon = jsonData.weather[0].icon;
  })
  .then (function() {
    document.getElementById('location').innerHTML = locationName;
    document.getElementById('temp').innerHTML = tempC + ' °C';
    document.getElementById('maxTemp').innerHTML = maxTempC + ' °C';
    document.getElementById('minTemp').innerHTML = minTempC + ' °C';
    document.getElementById('symbol').src = weatherIcon;
  })
  .catch(function (error) {
    console.log('Request failed', error);
  });

  var button = document.getElementById("tempToggle");
  button.addEventListener("click", convert, false);

});
