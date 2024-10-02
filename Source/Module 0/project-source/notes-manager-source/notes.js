// notes.js

const fs = require("fs");

let notes = [];

// Функция для загрузки заметок из файла
function loadNotes() {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJSON = dataBuffer.toString();
    notes = JSON.parse(dataJSON);
  } catch (e) {
    notes = [];
  }
}

// Функция для сохранения заметок в файл
function saveNotes() {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJSON);
}

// Добавление новой заметки
function addNote(title, content) {
  loadNotes();
  const duplicateNote = notes.find((note) => note.title === title);
  if (!duplicateNote) {
    notes.push({ title: title, content: content });
    saveNotes();
    console.log("Заметка успешно добавлена!");
  } else {
    console.log("Заметка с таким заголовком уже существует.");
  }
}

// Просмотр всех заметок
function viewNotes() {
  loadNotes();
  if (notes.length === 0) {
    console.log("У вас нет заметок.");
  } else {
    console.log("Ваши заметки:");
    notes.forEach((note, index) => {
      console.log(`${index + 1}. ${note.title}`);
    });
  }
}

// Чтение конкретной заметки
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

// Удаление заметки
function deleteNote(title) {
  loadNotes();
  const notesToKeep = notes.filter((note) => note.title !== title);
  if (notes.length > notesToKeep.length) {
    notes = notesToKeep;
    saveNotes();
    console.log("Заметка удалена.");
  } else {
    console.log("Заметка не найдена.");
  }
}

// Редактирование заметки
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

// Поиск заметок по ключевому слову
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
  deleteNote,
  editNote,
  searchNotes,
};
