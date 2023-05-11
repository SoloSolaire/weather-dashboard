var searchButton = $('#searchBtn');
var userInput = $('#search');


searchButton.on('click', function() {
    var city = userInput.val();
    var apiKey = "05087c8bf4bf181bc27106843c5b0130";
    var requestToday = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + apiKey + "&units=imperial";
    var requestWeek = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=" + apiKey + "&units=imperial";
    console.log('today', requestToday);
    console.log('week', requestWeek);

    fetch(requestToday)
    .then(function (response) {
        return response.json();
    })
    .then(function (todayData) {
        var currentCity = document.querySelector('#city-name');
        var todayTemp = document.querySelector("#temp-now");
        var todayWind = document.querySelector("#wind-now");
        var todayHumid = document.querySelector("#humid-now");

        currentCity.textContent = todayData.name + " (" + dayjs.unix(todayData.dt).format('M/D/YYYY') + ")";
        todayTemp.textContent = 'Temp: ' + todayData.main.temp.toFixed(2) + '°F';
        todayWind.textContent = 'Wind: ' + todayData.wind.speed + ' MPH';
        todayHumid.textContent = 'Humidity: ' + todayData.main.humidity + '%';
    })
} )