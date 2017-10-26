navigator.geolocation.getCurrentPosition(function (position) {
  var lat = position.coords.latitude;
  var lon = position.coords.longitude;
  fetch('https://fcc-weather-api.glitch.me/api/current?lat=' + lat + '&lon=' + lon + '').then(
    function (response) {
      return response.json();
    }
  ).then(function (jsonData) {
    console.log(jsonData);
    document.getElementById('location').innerHTML = jsonData.name;
    document.getElementById('temp').innerHTML = parseFloat(jsonData.main.temp) + ' °C';
    document.getElementById('maxTemp').innerHTML = parseFloat(jsonData.main.temp_max) + ' °C';
    document.getElementById('minTemp').innerHTML = parseFloat(jsonData.main.temp_min) + ' °C';
    document.getElementById('symbol').src = jsonData.weather[0].icon;
  });

});

var isCelc = true;
var isFar = false;
var $temp = parseFloat(document.getElementById('temp').innerHTML);
var $maxTemp = parseFloat(document.getElementById('maxTemp').innerHTML);
var $minTemp = parseFloat(document.getElementById('minTemp').innerHTML);

function cToF() {
  if (!isFar) {

  }
}