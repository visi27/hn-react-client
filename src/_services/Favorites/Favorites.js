import localStorageKey from '../../_config/localstorage';
import getStorage from '../Storage';

const storage = getStorage();

export class Favorites {
  constructor(favorites = []) {
    this.add = this.add.bind(this);
    this.remove = this.remove.bind(this);
    this.isFavorite = this.isFavorite.bind(this);

    this.favorites = favorites.length > 0 ? favorites : this.getFavoritesFromLocalStorage();
  }

  // eslint-disable-next-line
  getFavoritesFromLocalStorage() {
    if (storage.getItem(localStorageKey)) {
      return JSON.parse(localStorage.getItem(localStorageKey));
    }

    storage.setItem(localStorageKey, JSON.stringify([]));
    return [];
  }

  add(id) {
    this.favorites = [...this.favorites, id];

    storage.setItem(localStorageKey, JSON.stringify(this.favorites));
  }

  remove(id) {
    this.favorites = this.favorites.filter(e => e !== id);

    storage.setItem(localStorageKey, JSON.stringify(this.favorites));
  }

  isFavorite(id) {
    return this.favorites.includes(id);
  }
}

export const favoritesFactory = () => new Favorites();
