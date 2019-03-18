// LocalStorage Wrapper
// save Array => transform: String -> localStorage.setItem
// get array => localStorage.getItem -> transform: Array

export default class Storage {
  constructor(localStorageKey) {
    this.key = localStorageKey;
    this.data = this.get();
  }
  addDataSet(data) {
    this.data.push(data);
    this.save();
  }
  save() {
    // should have access to current data
    const data = this.data;
    // transform to string
    const stringified = JSON.stringify(data);
    // save to localStorage
    localStorage.setItem(this.key, stringified);
  }
  get() {
    const localStorageValue = localStorage.getItem(this.key);
    return (this.data = JSON.parse(localStorageValue) || []);
  }
}
