import { formatDate } from '@/utils/dateFormatter.js';

function dailyProcessDataForNext5days(data) {
    const dailyAverages = {};

    data.list.forEach(item => {
        const date = item.dt_txt.split(' ')[0];
        const dayOfWeek = formatDate(item.dt, 'weekday');

        if (!dailyAverages[date]) {
            dailyAverages[date] = {
                tempsMin: [],
                tempsMax: [],
                icons: {},
                dayOfWeek
            };
        }

        dailyAverages[date].tempsMin.push(item.main.temp_min);
        dailyAverages[date].tempsMax.push(item.main.temp_max);

        const icon = item.weather[0].icon;
        if (!dailyAverages[date].icons[icon]) {
            dailyAverages[date].icons[icon] = 0;
        }
        dailyAverages[date].icons[icon]++;
    });

    return Object.keys(dailyAverages).map(date => {
        const dayData = dailyAverages[date];
        const mostFrequentIcon = Object.keys(dayData.icons).sort((a, b) => dayData.icons[b] - dayData.icons[a])[0];

        return {
            date,
            dayOfWeek: dayData.dayOfWeek,
            avgMinTemp: average(dayData.tempsMin),
            avgMaxTemp: average(dayData.tempsMax),
            icon: mostFrequentIcon
        };
    });
}

function average(arr) {
    return arr.reduce((a, b) => a + b, 0) / arr.length;
}

export { dailyProcessDataForNext5days };