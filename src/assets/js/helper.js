import { noteStorage } from "./Storage";
// Helper
export const $ = selector => document.querySelector(selector);

export const domElements = {
  addNoteInput: $("#add-note"),
  addNoteButton: $("#add-note-button"),
  noteContainer: $("#notes")
};

export const renderNotes = notes => {
  domElements.noteContainer.innerHTML = notes
    .map((note, index) => {
      return `
        <div class="note col-lg-4" id="${index}">
          ${note}
        </div>
      `;
    })
    .join("");
  targetNotes();
};

const targetNotes = () => {
  const noteDiv = document.querySelectorAll(".note");
  if (noteDiv !== null) {
    noteDiv.forEach(node => {
      node.addEventListener("click", event => {
        const id = event.target.id;
        noteStorage.emit("removeItem", id);
      });
    });
  }
};
