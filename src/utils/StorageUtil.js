class StorageUtil {
  constructor(prefix) {
    this.prefix = prefix;
  }

  save(key, value) {
    if (window.localStorage) {
      window.localStorage.setItem(`${this.prefix}${key}`, JSON.stringify(value));
    }
  }

  load(key) {
    return JSON.parse(window.localStorage.getItem(`${this.prefix}${key}`));
  }
}

const Storage = new StorageUtil('_MACOS_CALENDAR_');

export default Storage;
