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

  getFavoritesFromAPI() {
    const user = JSON.parse(storage.getItem('user'));

    const requestOptions = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${user.token}`,
      },
    };

    return fetch('http://localhost:8080/app_dev.php/api/v2.0/favorites/', requestOptions)
      .then((response) => {
        if (!response.ok) {
          return Promise.reject(response.statusText);
        }
        return response.json();
      })
      .then((favorites) => {
        favorites.items.forEach((item) => {
          this.favorites = [...this.favorites, item.objectID];
          storage.setItem(localStorageKey, JSON.stringify(this.favorites));
        });
      });
  }

  add(item) {
    const user = JSON.parse(storage.getItem('user'));

    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${user.token}`,
      },
      body: JSON.stringify(item),
    };

    return fetch('http://localhost:8080/app_dev.php/api/v2.0/favorites/', requestOptions)
      .then((response) => {
        if (!response.ok) {
          return Promise.reject(response.statusText);
        }
        return response.json();
      })
      .then(() => {
        this.favorites = [...this.favorites, item.objectID];
        storage.setItem(localStorageKey, JSON.stringify(this.favorites));
      });
  }

  remove(item) {
    const user = JSON.parse(storage.getItem('user'));

    const requestOptions = {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${user.token}`,
      },
    };

    return fetch(
      `http://localhost:8080/app_dev.php/api/v2.0/favorites/${item.objectID}`,
      requestOptions,
    )
      .then((response) => {
        if (!response.ok) {
          return Promise.reject(response.statusText);
        }
        return response.text();
      })
      .then(() => {
        this.favorites = this.favorites.filter(e => e !== item.objectID);
        storage.setItem(localStorageKey, JSON.stringify(this.favorites));
      });
  }

  isFavorite(id) {
    return this.favorites.includes(id);
  }
}

export const favoritesFactory = () => new Favorites();
