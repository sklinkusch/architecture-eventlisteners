import { noteStorage } from "./Storage";
// Helper
export const $ = selector => document.querySelector(selector);

export const domElements = {
  addNoteInput: $("#add-note"),
  addNoteButton: $("#add-note-button"),
  clearButton: $("#clear"),
  noteContainer: $("#notes"),
  noteDiv: null
};

export const renderNotes = notes => {
  domElements.noteContainer.innerHTML = notes
    .map((note, index) => {
      return `
        <div class="note col-lg-3" id="${index}" title="click to remove">
          ${note}
        </div>
      `;
    })
    .join("");
  domElements.noteDiv = document.querySelectorAll(".note");
  targetNotes();
};

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
