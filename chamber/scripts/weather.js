// weather.js

const apiKey = '1c672706ec8404c7b4f5496e506eeded'; // Replace with your OpenWeatherMap API key
const city = 'Abeokuta'; // Replace with the chamber's actual location or coordinates

// Fetch weather data
async function getWeatherData() {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&cnt=4&appid=${apiKey}`);
        const data = await response.json();
        
        // Current weather data
        const currentTemp = data.list[0].main.temp;
        const description = data.list[0].weather[0].description;

        // Display current weather
        document.getElementById('current-temperature').textContent = `${currentTemp}°C`;
        document.getElementById('weather-description').textContent = description;

        // Display 3-day forecast
        let forecastHTML = '';
        for (let i = 1; i < 4; i++) {
            const dayForecast = data.list[i];
            const date = new Date(dayForecast.dt * 1000);
            const dayName = date.toLocaleString('en', { weekday: 'short' });
            const dayTemp = dayForecast.main.temp;
            
            forecastHTML += `
                <div class="forecast-day">
                    <p>${dayName}</p>
                    <p>${dayTemp}°C</p>
                </div>
            `;
        }
        document.getElementById('forecast-container').innerHTML = forecastHTML;
        
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
}

// Call the function to get weather data
getWeatherData();
