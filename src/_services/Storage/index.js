class LocalStorageMock {
  constructor() {
    this.store = {};
  }

  clear() {
    this.store = {};
  }

  getItem(key) {
    return this.store[key] || null;
  }

  setItem(key, value) {
    this.store[key] = value.toString();
  }

  removeItem(key) {
    delete this.store[key];
  }
}

export default function getStorage() {
  try {
    const uid = new Date();
    localStorage.setItem(uid, uid);
    localStorage.removeItem(uid);

    return localStorage;
  } catch (error) {
    return new LocalStorageMock();
  }
}
