// import scss file
import "@scss/styles.scss";
// import objects from other js files
import { noteStorage } from "./Storage";
import { domElements } from "./helper";
// deconstruct domElements to access properties directly
const { addNoteButton, addNoteInput, clearButton, noteDiv } = domElements;
// add an eventListener on the add button
addNoteButton.addEventListener("click", () => {
  const note = addNoteInput.value;
  if (note) {
    noteStorage.emit("addItem", note);
    addNoteInput.value = "";
  }
});
// add an eventListener on the clear button
clearButton.addEventListener("click", () => {
  noteStorage.emit("clear");
});
