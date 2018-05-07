export class Favorites {
  constructor(favorites = []) {
    this.add = this.add.bind(this);
    this.remove = this.remove.bind(this);
    this.isFavorite = this.isFavorite.bind(this);

    this.favorites = favorites.length > 0 ? favorites : this.getFavoritesFromLocalStorage();
  }

  // eslint-disable-next-line
  getFavoritesFromLocalStorage() {
    if (localStorage.getItem('favorites')) {
      return JSON.parse(localStorage.getItem('favorites'));
    }

    localStorage.setItem('favorites', JSON.stringify([]));
    return [];
  }

  add(id) {
    this.favorites = [...this.favorites, id];

    localStorage.setItem('favorites', JSON.stringify(this.favorites));
  }

  remove(id) {
    this.favorites = this.favorites.filter(e => e !== id);

    localStorage.setItem('favorites', JSON.stringify(this.favorites));
  }

  isFavorite(id) {
    return this.favorites.includes(id);
  }
}

export const favoritesFactory = () => new Favorites();
