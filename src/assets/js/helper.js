// import object from Storage.js
import { noteStorage } from "./Storage";
// function and object to access DOM elements easier
const $ = selector => document.querySelector(selector);
export const domElements = {
  addNoteInput: $("#add-note"),
  addNoteButton: $("#add-note-button"),
  clearButton: $("#clear"),
  noteContainer: $("#notes"),
  noteDiv: null,
  removeBtn: null
};
// function to write notes to the ui
export const renderNotes = notes => {
  domElements.noteContainer.innerHTML = notes
    .map((note, index) => {
      const { name, status } = note;
      const color = determineColor(status);
      return `
        <div class="note col-lg-5" style="background-color: ${color}" title="click to change status">
        <div class="note-container">
          <p>${name}</p>
          </div>
          <div class="btn-container">
          <button class="removeNote" id="${index}" title="click to remove"><span class="fas fa-times">&nbsp;</span></button>
          </div>
        </div>
      `;
    })
    .join("");
  domElements.noteDiv = document.querySelectorAll(".note-container");
  domElements.removeBtn = document.querySelectorAll(".removeNote");
  targetNotes();
};
// function to add event listeners on each element to remove it
const targetNotes = () => {
  if (domElements.noteDiv !== null) {
    domElements.noteDiv.forEach((note, index) => {
      note.addEventListener("click", event => {
        noteStorage.emit("toggleStatus", index);
      });
    });
  }
  if (domElements.removeBtn !== null) {
    domElements.removeBtn.forEach(button => {
      button.addEventListener("click", event => {
        const id = button.id;
        noteStorage.emit("removeItem", id);
      });
    });
  }
};
function determineColor(status) {
  switch (status) {
    case "in the queue":
      return "DodgerBlue";
    case "pending":
      return "yellow";
    case "done":
      return "LimeGreen";
    case "to be deleted":
      return "LightCoral";
  }
}
