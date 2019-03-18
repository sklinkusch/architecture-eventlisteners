// LocalStorage Wrapper
// save Array => transform: String -> localStorage.setItem
// get array => localStorage.getItem -> transform: Array

export default class Storage {
  constructor(localStorageKey) {
    this.key = localStorageKey;
  }
  save(ele) {
    localStorage.setItem(this.key, ele);
  }
  get() {
    return localStorage.getItem(this.key);
  }
}
