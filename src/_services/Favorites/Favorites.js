import localStorageKey from '../../_config/localstorage';
import getStorage from '../Storage';
import userService from '../../_services/User/index';

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
    // Return empty array when user is not logged in
    if (!userService.isAuthenticated()) {
      return Promise.all([]);
    }

    const requestOptions = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userService.getToken()}`,
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
    // Reject immediately if user is not logge din
    if (!userService.isAuthenticated()) {
      return Promise.reject(new Error('Unauthorized'));
    }
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userService.getToken()}`,
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
    // Reject immediately if user is not logge din
    if (!userService.isAuthenticated()) {
      return Promise.reject(new Error('Unauthorized'));
    }
    const requestOptions = {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userService.getToken()}`,
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
