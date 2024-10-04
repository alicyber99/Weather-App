const apikey = "1e65eac23936e3694393d48ef2bd1217";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apikey}`);
    var data = await response.json();
    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

    if(data.weather[0].main == "Clouds"){
        weatherIcon.src = "Image/clouds.png";
    }
    else if(data.weather[0].main == "Haze" || data.weather[0].main == "Clear"){
        weatherIcon.src = "Image/clear.png";
    }
    else if(data.weather[0].main == "Drizzle"){
        weatherIcon.src = "Image/drizzle.png";
    }
    else if(data.weather[0].main == "Mist"){
        weatherIcon.src = "Image/clear.png";
    }
    else if(data.weather[0].main == "Rain"){
        weatherIcon.src = "Image/rain.png";
    }
    else  if(data.weather[0].main == "Snow"){
        weather.src = "Image/snow.png";
    }
    document.querySelector(".weather").style.display = "block";
}
searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
})





























