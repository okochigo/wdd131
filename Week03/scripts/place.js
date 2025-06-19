document.addEventListener('DOMContentLoaded', () => {
    
    document.getElementById('currentYear').textContent = new Date().getFullYear();
    document.getElementById('lastModified').textContent = document.lastModified;

    
    const temperature = 10; 
    const windSpeed = 5; 


    document.getElementById('temperature').textContent = temperature;
    document.getElementById('windSpeed').textContent = windSpeed;

    
    const windChillElement = document.getElementById('windChill');
    if (temperature <= 10 && windSpeed > 4.8) {
        const windChill = calculateWindChill(temperature, windSpeed);
        windChillElement.textContent = `${windChill.toFixed(1)}°C`;
    } else {
        windChillElement.textContent = 'N/A';
    }
});


function calculateWindChill(temp, speed) {
    return 13.12 + 0.6215 * temp - 11.37 * Math.pow(speed, 0.16) + 0.3965 * temp * Math.pow(speed, 0.16);
  }