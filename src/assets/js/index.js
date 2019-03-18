import "@scss/styles.scss";
import Storage from "./Storage";

// Helper
const $ = selector => document.querySelector(selector);

const addNoteInput = $("#add-note");
const addNoteButton = $("#add-note-button");
const noteContainer = $("#notes");

addNoteButton.addEventListener("click", e => {
  const note = addNoteInput.value;
  noteStorage.emit("addItem", note);
});

const renderNotes = notes => {
  noteContainer.innerHTML = notes
    .map(note => {
      return `
    <div class="note col-lg-4">${note}</div>
  `;
    })
    .join("");
};
