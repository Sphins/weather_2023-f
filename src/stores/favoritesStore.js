import { reactive } from 'vue';

export const favoritesStore = reactive({
    favorites: JSON.parse(localStorage.getItem('favorites')) || [],

    findAll() {
        return this.favorites;
    },

    save(data) {
        localStorage.setItem('favorites', JSON.stringify(data));
    }
});
