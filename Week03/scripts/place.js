// Footer: Current Year and Last Modified
const currentYear = new Date().getFullYear();
document.getElementById('currentyear').textContent = currentYear;

const lastModified = document.lastModified;
document.getElementById('lastModified').textContent = `Last Modified: ${lastModified}`;

// Wind Chill Calculation
function calculateWindChill(temperature, windSpeed) {
    // Metric formula: °C, km/h
    return (13.12 + 0.6215 * temperature - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temperature * Math.pow(windSpeed, 0.16)).toFixed(1);
}

// Static weather data (Metric for Madagascar)
const temperature = 25; // °C
const windSpeed = 10; // km/h

// Update weather display
document.getElementById('temperature').textContent = temperature;
document.getElementById('windspeed').textContent = windSpeed;

// Check if wind chill is applicable
if (temperature <= 10 && windSpeed > 4.8) {
    const windChill = calculateWindChill(temperature, windSpeed);
    document.getElementById('windchill').textContent = `${windChill} °C`;
} else {
    document.getElementById('windchill').textContent = 'N/A';
}