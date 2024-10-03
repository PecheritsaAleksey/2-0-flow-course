const notes = [];

function addNote(title, content) {
  notes.push({ title, content });
}

function viewNotes() {
  if (notes.length === 0) {
    console.log("У вас нет заметок.");
  }

  for (let note of notes) {
    console.log(note.title);
  }
}

module.exports = {
  addNote,
  viewNotes,
};
