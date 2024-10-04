const fs = require("fs");

let notes = [];

function loadNotes() {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJSON = dataBuffer.toString();
    notes = JSON.parse(dataJSON);
  } catch (e) {
    notes = [];
  }
}

function saveNotes() {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJSON);
}

function addNote(title, content) {
  loadNotes();
  notes.push({ title, content });
  saveNotes();
}

function viewNotes() {
  loadNotes();
  if (notes.length === 0) {
    console.log("У вас нет заметок.");
  }

  for (let note of notes) {
    console.log(note.title);
  }
}

function readNote(title) {
  loadNotes();
  const note = notes.find((note) => note.title === title);
  if (note) {
    console.log(`\nЗаголовок: ${note.title}`);
    console.log(`Содержимое: ${note.content}`);
  } else {
    console.log("Заметка не найдена.");
  }
}

function editNote(title, newContent) {
  loadNotes();
  const noteIndex = notes.findIndex((note) => note.title === title);
  if (noteIndex !== -1) {
    notes[noteIndex].content = newContent;
    saveNotes();
    console.log("Заметка обновлена.");
  } else {
    console.log("Заметка не найдена.");
  }
}

function deleteNote(title) {
  loadNotes();
  const notesToKeep = notes.filter((note) => note.title !== title);
  notes = notesToKeep;
  saveNotes();
  console.log("Заметка удалена.");
}

function searchNotes(keyword) {
  loadNotes();
  const filteredNotes = notes.filter((note) => {
    return note.title.includes(keyword) || note.content.includes(keyword);
  });
  if (filteredNotes.length > 0) {
    console.log("Найденные заметки:");
    filteredNotes.forEach((note) => {
      console.log(`- ${note.title}`);
    });
  } else {
    console.log("Заметки не найдены.");
  }
}

module.exports = {
  addNote,
  viewNotes,
  readNote,
  editNote,
  deleteNote,
  searchNotes,
};
