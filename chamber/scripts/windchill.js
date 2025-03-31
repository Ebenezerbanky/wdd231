
function showWeather(obj){
    let tempobj = document.querySelector("#temperature");
    let windspeedobj = document.querySelector("#windspeed");
    let windchilldobj = document.querySelector("#windchill");
    let weathericon = document.querySelector("#weathericon");
    let weatherdesc = document.querySelector("#weatherdesc");
    let iconURL = `https://openweathermap.org/img/wn/${obj.weather[0].icon}@2x.png`;

    let windchillmsg = "N/A";
    let temp = obj.main.temp;
    let windspeed = obj.wind.speed;

    if (temp <= 50 &&  windspeed > 3) {
        chill = Math.round((35.74 + (0.6215 * temp))-(35.75 * Math.pow(windspeed,0.16)) + (0.4275*temp*Math.pow(windspeed,0.16))) + " km/h";
        windchillmsg = chill + " ° F";
    };

    tempobj.textContent = Math.round(temp);
    windspeedobj.textContent = windspeed;
    windchilldobj.innerHTML = windchillmsg;
    weathericon.setAttribute ("src", iconURL);
    weatherdesc.textContent = obj.weather[0].description;
}

const LAT = "43.826";
const LON = "-111.7897";
const APIKEY = "87a2274e37afb2733385877c040c7a2d";
const apiURL = `https://api.openweathermap.org/data/2.5/weather?lat=${LAT}&lon=${LON}&appid=${APIKEY}&units=imperial`;


fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        showWeather(jsObject);
    });