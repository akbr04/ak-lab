const apiKey = 'cfd2128ebb9f5b38b56d4a612a0f55c9';
const cityInput = document.getElementById('cityInput');
const getWeatherButton = document.getElementById('btn');
const weatherInfo = document.getElementById('weather-info');

getWeatherButton.addEventListener('click', () => {
  const city = cityInput.value;

  if (city === '') {
    alert('Please enter a city name.');
    return;
  }

  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

  fetch(apiUrl)
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then((data) => {
      const weatherDescription = data.weather[0].description;
      const temperature = data.main.temp;
      const windSpeed = data.wind.speed;

      const weatherMessage = `<p>Weather: ${weatherDescription}<br>Temperature: ${temperature}°C<br>Wind Speed: ${windSpeed} m/s<p>`;

      weatherInfo.innerHTML = weatherMessage;
    })
    .catch((error) => {
      if (error instanceof Error) {
        alert('An error occurred: ' + error.message);
      } else {
        alert('An error occurred. Please try again later.');
      }
    });
});