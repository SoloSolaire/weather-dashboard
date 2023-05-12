var searchButton = $('#searchBtn');
var userInput = $('#search');


searchButton.on('click', function() {
    var city = userInput.val();
    var apiKey = "05087c8bf4bf181bc27106843c5b0130";
    var requestToday = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + apiKey + "&units=imperial";
    var requestWeek = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=" + apiKey + "&units=imperial";
    console.log('today', requestToday);
    console.log('week', requestWeek);

        localStorage.setItem('city', city)

    //fetch api for current day
    fetch(requestToday)
    .then(function (response) {
        return response.json();
    })
    //display weather data for current day
    .then(function (todayData) {
        var currentCity = document.querySelector('#city-name');
        var todayTemp = document.querySelector("#temp-now");
        var todayWind = document.querySelector("#wind-now");
        var todayHumid = document.querySelector("#humid-now");
        var weatherIcon = document.querySelector("#icon-now");

        currentCity.textContent = todayData.name + " (" + dayjs.unix(todayData.dt).format('M/D/YYYY') + ") ";
        todayTemp.textContent = 'Temp: ' + todayData.main.temp.toFixed(2) + '°F';
        todayWind.textContent = 'Wind: ' + todayData.wind.speed + ' MPH';
        todayHumid.textContent = 'Humidity: ' + todayData.main.humidity + '%';

        if (todayData.weather[0].main === "Thunderstorm") {
            weatherIcon.textContent = "⚡"
        }

        if (todayData.weather[0].main === "Drizzle") {
            weatherIcon.textContent = "🌦️"
        }

        if (todayData.weather[0].main === "Rain") {
            weatherIcon.textContent = "🌧️"
        }

        if (todayData.weather[0].main === "Snow") {
            weatherIcon.textContent = "☃️"
        }

        if (todayData.weather[0].main === "Mist") {
            weatherIcon.textContent = "🌫️"
        }

        if (todayData.weather[0].main === "Clear") {
            weatherIcon.textContent = "🌞"
        }

        if (todayData.weather[0].main === "Clouds") {
            weatherIcon.textContent = "☁️"
        }

        localStorage.setItem('weather today', JSON.stringify(todayData));
    });

    //fetch api for 5-day week
    fetch(requestWeek)
    .then(function (response) {
        return response.json();
    })
    //display weather data for 5-day week
    .then(function hello(weekData) {
        for (i = 1; i < 6; i++){
            var addDay = dayjs().add(i, 'day').format('M/D/YYYY');
            var dayWeek = document.querySelector("#card-day-" + i);
            var weekTemp = document.querySelector("#card-temp-" + i);
            var weekWind = document.querySelector("#card-wind-" + i);
            var weekHumid = document.querySelector("#card-humid-" + i);
            var weekIcon = document.querySelector("#card-icon-" + i);

            dayWeek.textContent = addDay;
            weekTemp.textContent = 'Temp: ' + weekData.list[i].main.temp.toFixed(2) + '°F';
            weekWind.textContent = 'Wind: ' + weekData.list[i].wind.speed + ' MPH';
            weekHumid.textContent = 'Humidity: ' + weekData.list[i].main.humidity + '%';

            if (weekData.list[i].weather[0].main === "Thunderstorm") {
                weekIcon.textContent = "⚡"
            }
            if (weekData.list[i].weather[0].main === "Drizzle") {
                weekIcon.textContent = "🌦️"
            }
            if (weekData.list[i].weather[0].main === "Rain") {
                weekIcon.textContent = "🌧️"
            }
            if (weekData.list[i].weather[0].main === "Snow") {
                weekIcon.textContent = "☃️"
            }
            if (weekData.list[i].weather[0].main === "Mist") {
                weekIcon.textContent = "🌫️"
            }
            if (weekData.list[i].weather[0].main === "Clear") {
                weekIcon.textContent = "🌞"
            }
            if (weekData.list[i].weather[0].main === "Clouds") {
                weekIcon.textContent = "☁️"
            }
            localStorage.setItem('weather 5-day', JSON.stringify(weekData));

        }
    })
        var createBtn = $('#search-history').append("<button id='historyBtn' class='history-button'>" + city + "</button>");

} )

var historyButton = $('#historyBtn');

historyButton.on("click", function() {
    JSON.parse(localStorage.getItem('weather today'));   
})
