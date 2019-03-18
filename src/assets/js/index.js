import "@scss/styles.scss";

// Helper
const $ = selector => document.querySelector(selector);

const addNoteInput = $("#add-note");
const addNoteButton = $("#add-note-button");

addNoteButton.addEventListener("click", e => {
  const note = addNoteInput.value;
  console.log(note);
});

console.log(addNoteInput);
console.log(addNoteButton);
