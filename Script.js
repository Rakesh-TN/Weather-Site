let weather = {
    "apiKey": "1dbf75075e4acda2cf2d109344681ec0",
    fetchWeather: function (city) {
        fetch("https://api.openweathermap.org/data/2.5/weather?q="
            + city
            + "&units=metric&appid="
            + this.apiKey
        )
            .then((response) => response.json())
            .then((data) => this.displayWeather(data))
    },
    displayWeather: function (data) {
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;
        document.querySelector(".city").innerHTML = "Weather in " + name;
        document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon + ".png";
        document.querySelector(".description").innerHTML = description;
        document.querySelector(".temp").innerHTML = Math.round(temp) + "°C";
        document.querySelector(".humidity").innerHTML = "Humidity: " + humidity + "%";
        document.querySelector(".wind").innerHTML = "Wind Speed: " + speed + "Km/hr";
    },
    search: function () {
        this.fetchWeather(document.querySelector(".city-search").value)
    }
}

document.querySelector(".search button").addEventListener("click", function () {
    weather.search();
})

document.querySelector(".city-search").addEventListener("keydown", function (event) {
    if (event.key == "Enter") {
    weather.search();
    }
})
