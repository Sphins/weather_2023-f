// src/utils/dateFormatter.js
export function formatDate(timestamp, format) {
    const date = new Date(timestamp * 1000); // Convertit le timestamp Unix en millisecondes
    const options = {};

    switch (format) {
        case 'datetime':
            options.year = 'numeric';
            options.month = 'long';
            options.day = 'numeric';
            options.hour = '2-digit';
            options.minute = '2-digit';
            break;
        case 'time':
            options.hour = '2-digit';
            options.minute = '2-digit';
            break;
        case 'date':
            options.year = 'numeric';
            options.month = 'long';
            options.day = 'numeric';
            break;
    }

    return new Intl.DateTimeFormat('fr-FR', options).format(date);
}
