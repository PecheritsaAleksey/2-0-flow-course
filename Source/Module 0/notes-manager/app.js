const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const notes = [];
const userName = "Алексей";
console.log(`${userName}, добро пожаловать в Консольный Менеджер Заметок!`);

console.log("\nВыберите действие:");
console.log("1. Добавить заметку");
console.log("2. Просмотреть все заметки");
console.log("3. Прочитать заметку");
console.log("4. Удалить заметку");
console.log("5. Редактировать заметку");
console.log("6. Поиск заметок");
console.log("0. Выход");

rl.question("Выберите действие: ", (input) => {
  switch (input) {
    case "1":
      const newNote = {};
      rl.question("Введите название заметки: ", (title) => {
        newNote.title = title;
        rl.question("Введите содержание заметки: ", (content) => {
          newNote.content = content;
          notes.push(newNote);
          console.log("Заметка добавлена!");
        });
      });
      break;
    case "2":
      console.log("Просмотреть все заметки...");
      break;
    case "3":
      console.log("Прочитать заметку...");
      break;
    case "4":
      console.log("Удалить заметку...");
      break;
    case "5":
      console.log("Редактировать заметку...");
      break;
    case "6":
      console.log("Поиск заметок...");
      break;
    case "0":
      console.log("Выход...");
  }
});
