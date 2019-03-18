import "@scss/styles.scss";

// Helper
const $ = selector => document.querySelector(selector);

const noteStorageKey = "myAwesomeNote";

const addNoteInput = $("#add-note");
const addNoteButton = $("#add-note-button");
const noteContainer = $("#notes");

addNoteButton.addEventListener("click", e => {
  const note = addNoteInput.value;
  localStorage.setItem(noteStorageKey, note);
  renderNotes(note);
});

const renderNotes = note => {
  const templateOfNote = `
    <div class="note col-lg-4">${note}</div>
  `;
  noteContainer.innerHTML = templateOfNote;
};

renderNotes(localStorage.getItem(noteStorageKey));
