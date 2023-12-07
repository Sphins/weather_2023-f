const hourlyProcessDataForNext24Hours = (data) => {
    const currentTime = Date.now(); // Temps actuel en millisecondes
    const oneDayInMilliseconds = 24 * 60 * 60 * 1000; // 24 heures en millisecondes

    // Filtrer la liste pour obtenir les prévisions pour les prochaines 24 heures
    const next24HoursForecast = data.list.filter(forecast => {
        const forecastTime = forecast.dt * 1000; // Convertir le timestamp en millisecondes
        return forecastTime >= currentTime && forecastTime <= currentTime + oneDayInMilliseconds;
    });

    return next24HoursForecast;
};
export { hourlyProcessDataForNext24Hours }