// import object from Storage.js
import { noteStorage } from "./Storage";
// function and object to access DOM elements easier
const $ = selector => document.querySelector(selector);
export const domElements = {
  addNoteInput: $("#add-note"),
  addNoteButton: $("#add-note-button"),
  clearButton: $("#clear"),
  noteContainer: $("#notes"),
  noteDiv: null
};
// function to write notes to the ui
export const renderNotes = notes => {
  domElements.noteContainer.innerHTML = notes
    .map((note, index) => {
      return `
        <div class="note col-lg-5" id="${index}" title="click to remove">
          ${note}
        </div>
      `;
    })
    .join("");
  domElements.noteDiv = document.querySelectorAll(".note");
  targetNotes();
};
// function to add event listeners on each element to remove it
const targetNotes = () => {
  if (domElements.noteDiv !== null) {
    domElements.noteDiv.forEach(node => {
      node.addEventListener("click", event => {
        const id = event.target.id;
        noteStorage.emit("removeItem", id);
      });
    });
  }
};
