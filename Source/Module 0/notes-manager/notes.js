let notes = [];

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

function readNote(title) {
  const note = notes.find((note) => note.title === title);
  if (note) {
    console.log(`\nЗаголовок: ${note.title}`);
    console.log(`Содержимое: ${note.content}`);
  } else {
    console.log("Заметка не найдена.");
  }
}

function editNote(title, newContent) {
  const noteIndex = notes.findIndex((note) => note.title === title);
  if (noteIndex !== -1) {
    notes[noteIndex].content = newContent;
    console.log("Заметка обновлена.");
  } else {
    console.log("Заметка не найдена.");
  }
}

function deleteNote(title) {
  const notesToKeep = notes.filter((note) => note.title !== title);
  notes = notesToKeep;
  console.log("Заметка удалена.");
}

function searchNotes(keyword) {
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
