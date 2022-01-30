"use strict";

var cityName = document.getElementById('cityName');
var submitBtn = document.getElementById('submitBtn');
var city_name = document.getElementById('city_name');
var temp_status = document.getElementById('temp_status');
var temp = document.getElementById('temp');
var datahide = document.querySelector('.middle_layer');

var getInfo = function getInfo(event) {
  var cityVal, url, response, data, arrData, tempMood;
  return regeneratorRuntime.async(function getInfo$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          event.preventDefault();
          cityVal = cityName.value;
          console.log(cityVal);

          if (!(cityVal === "")) {
            _context.next = 8;
            break;
          }

          city_name.innerText = "Please write the city name.";
          datahide.classList.add('data_hide');
          _context.next = 30;
          break;

        case 8:
          _context.prev = 8;
          url = "https://api.openweathermap.org/data/2.5/weather?q=".concat(cityVal, "&units=metric&appid=e7d12ef78d130ac5496658a66ddad17f");
          _context.next = 12;
          return regeneratorRuntime.awrap(fetch(url));

        case 12:
          response = _context.sent;
          _context.next = 15;
          return regeneratorRuntime.awrap(response.json());

        case 15:
          data = _context.sent;
          console.log(data);
          arrData = [data];
          city_name.innerText = "".concat(arrData[0].name, ", ").concat(arrData[0].sys.country);
          temp.innerText = arrData[0].main.temp;
          tempMood = arrData[0].weather[0].main;
          console.log(tempMood); //condtion to check weather

          if (tempMood === "Clear") {
            temp_status.innerHTML = "<i class= 'fas fa-sun' style='color: #eccc68;'></i>";
          } else if (tempMood === "Clouds") {
            temp_status.innerHTML = "<i class= 'fas fa-cloud' style='color: #f1f2f6;'></i>";
          } else if (tempMood === "Rain") {
            temp_status.innerHTML = "<i class= 'fas fa-cloud-Rain' style='color: #a4b0be;'></i>";
          } else if (tempMood === "Mist") {
            temp_status.innerHTML = "<i class='fas fa-smog' style='color: #f1f2f6;'></i>";
          } else {
            temp_status.innerHTML = "<i class= 'fas fa-sun' style='color: #eccc68;'></i>";
          }

          datahide.classList.remove('data_hide');
          _context.next = 30;
          break;

        case 26:
          _context.prev = 26;
          _context.t0 = _context["catch"](8);
          city_name.innerText = "Please write city name properly.";
          datahide.classList.add('data_hide');

        case 30:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[8, 26]]);
};

submitBtn.addEventListener('click', getInfo);