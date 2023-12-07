const API_KEY = 'ba71202a01cdae9115678b15e6cba61d';
const BASE_URL = 'https://api.openweathermap.org/data/2.5/forecast';

const getHourlyDailyAllData = async (lat, lon) => {
    const url = new URL(BASE_URL);
    url.search = new URLSearchParams({
        lat,
        lon,
        units: 'metric',
        lang: 'fr',
        appid: API_KEY
    });
    try {
        const response = await fetch(url.toString());
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error in hourlyForecastService:', error);
        throw error;
    }
};

export { getHourlyDailyAllData };
