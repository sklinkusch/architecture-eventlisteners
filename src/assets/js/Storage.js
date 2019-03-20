// LocalStorage Wrapper
// save Array -> transform: String -> localStorage.setItem
// get Array -> localStorage.getItem -> transform: Array
// import default class from Events.js
import MyNiceEvents from "./Events";
// import object from helper function
import { renderNotes } from "./helper";
// definition of main class Storage
export default class Storage extends MyNiceEvents {
  constructor(localStorageKey) {
    super();
    this.key = localStorageKey;
    this.data = this.get();
  }
  // wrapper method to add an item
  addDataSet(dataParameter) {
    this.data.push(dataParameter);
    this.emit("updated", this.data);
    this.save();
  }
  // wrapper method to clear the list
  clear() {
    this.data = [];
    this.emit("updated", this.data);
    this.save();
  }
  // wrapper method to remove a single item
  removeDataSet(dataParameter) {
    // remove from this.data
    // this.data = this.data.filter((note, index) => index != dataParameter);
    this.data.splice(dataParameter, 1);
    // console.log(`OK remove key -> ${dataParameter}`);
    // update ui
    this.emit("updated", this.data);
    // save
    this.save();
  }
  // method to save data to localStorage
  save() {
    // have access to current data
    const data = this.data;
    // transform to string
    const stringified = JSON.stringify(data);
    // save to localStorage
    window.localStorage.setItem(this.key, stringified);
  }
  // method to get data from localStorage
  get() {
    const localStorageValue = window.localStorage.getItem(this.key);
    this.data = JSON.parse(localStorageValue) || [];
    this.emit("updated", this.data);
    return this.data;
  }
  // update the ui when loading has finished
  initFinished() {
    this.emit("updated", this.data);
  }
}
// create object as instance of this class
export const noteStorage = new Storage("myAwesomeNote");
// bind functions to event signals
noteStorage.on("addItem", note => {
  noteStorage.addDataSet(note);
});

noteStorage.on("updated", notes => {
  renderNotes(notes);
});

noteStorage.on("removeItem", note => {
  noteStorage.removeDataSet(note);
});

noteStorage.on("clear", () => {
  noteStorage.clear();
});
// update the ui
noteStorage.initFinished();
