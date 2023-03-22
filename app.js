const apiKey = "03524e301bd282a24ea4499bdae38d2f";


function displayWeather(data) {
    const { name, main, weather } = data;
    const weatherImage = document.getElementById('weather-container');
    const temperature = main.temp;
    const description = weather[0].description;
    const ids = toString(weather[0].id);
    let ids2 = ids;
    console.log(ids);
    console.log(ids2);
    const output = `${name} <br> Temperature : ${temperature}°C <br> ${description}`;
    document.getElementById("weather").innerHTML = output;

    if (ids2 !== ids) {
      const icon = weather[0].icon;
      const imageSource = `https://openweathermap.org/img/wn/${icon}.png`;
      weatherImage.onload = function () {
        ids2 = ids;
      };
      weatherImage.src = "";
      weatherImage.src = imageSource;
    }
    if (ids2.startsWith("2")) {
      weatherImage.src = "https://openweathermap.org/img/wn/11d@2x.png";
    } else if (ids2.startsWith("3")) {
      weatherImage.src = 'https://openweathermap.org/img/wn/09d@2x.png';
    } else if (ids2.startsWith("5")) {
      weatherImage.src = 'https://openweathermap.org/img/wn/10d@2x.png';
    } else if (ids2.startsWith("6")) {
      weatherImage.src = 'https://openweathermap.org/img/wn/13d@2x.png';
    } else if (ids2.startsWith("7")) {
      weatherImage.src = 'https://openweathermap.org/img/wn/50d@2x.png';
    } else if (ids2.includes ="800") {
      weatherImage.src = 'https://openweathermap.org/img/wn/01d@2x.png';
    } else if (ids2.includes ="801") {
      weatherImage.src = 'https://openweathermap.org/img/wn/02d@2x.png';
    } else if (ids2.includes ="802") {
      weatherImage.src = 'https://openweathermap.org/img/wn/03d@2x.png';
    } else if (ids2.includes ="803") {
      weatherImage.src = 'https://openweathermap.org/img/wn/04d@2x.png';
    } else if (ids2.includes ="804") {
      weatherImage.src = 'https://openweathermap.org/img/wn/04d@2x.png';
    } else {
      weatherImage.src = "images/ngdata.png";
    }
}

function getCurrentLocationWeather() {
    navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
        fetch(url)
            .then((response) => response.json())
            .then((data) => displayWeather(data));
    });
}

function getCityWeather(city) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    fetch(url)
        .then((response) => response.json())
        .then((data) => displayWeather(data))
        .catch((error) => {
            const output = `Error: ${error.message}`;
            document.getElementById("weather").innerHTML = output;
        });
}

document.getElementById("search").addEventListener("click", () => {
    const city = document.getElementById("city").value;
    getCityWeather(city);
});


getCurrentLocationWeather();

