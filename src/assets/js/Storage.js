// LocalStorage Wrapper
// save Array => transform: String -> localStorage.setItem
// get array => localStorage.getItem -> transform: Array

import Event from "./Events";
export default class Storage extends Event {
  constructor(localStorageKey) {
    super();
    this.key = localStorageKey;
    this.data = this.get();
  }
  addDataSet(data) {
    this.data.push(data);
    this.emit("updated", this.data);
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
    this.data = JSON.parse(localStorageValue) || [];
    this.emit("updated", this.data);
    return this.data;
  }

  initFinished() {
    this.emit("updated", this.data);
  }
}

export const noteStorage = new Storage("myAwesomeNote");

noteStorage.on("addItem", notes => {
  noteStorage.addDataSet(notes);
});
noteStorage.on("updated", notes => {
  renderNotes(notes);
});

noteStorage.initFinished();
