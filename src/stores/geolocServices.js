

export async function getCurrentPosition() {
    return new Promise((resolve, reject) => {
        if ('geolocation' in navigator) {
            navigator.geolocation.getCurrentPosition(resolve, reject);
        } else {
            reject('Geolocation is not supported by this browser.');
        }
    });
}

const API_KEY = 'ba71202a01cdae9115678b15e6cba61d';

async function getCoordinatesForCity(cityName) {
    const url = `http://api.openweathermap.org/geo/1.0/direct?q=${encodeURIComponent(cityName)}&limit=1&appid=${API_KEY}`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data && data.length > 0) {
            return {
                name: data[0].name,
                lat: data[0].lat,
                lon: data[0].lon
            };
        } else {
            // Lancez une nouvelle Error avec un message spécifique pour une ville non trouvée
            throw new Error(`Aucun résultat trouvé pour '${cityName}'`);
        }
    } catch (error) {
        // Propagez cette erreur pour qu'elle puisse être gérée par le composant appelant
        throw error;
    }
}

export { getCoordinatesForCity };