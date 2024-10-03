const { getInput, rl } = require("./utils.js");
const { addNote, viewNotes } = require("./notes.js");

const userName = "Алексей";
console.log(`${userName}, добро пожаловать в Консольный Менеджер Заметок!`);

showMenu();

async function showMenu() {
  console.log("\nВыберите действие:");
  console.log("1. Добавить заметку");
  console.log("2. Просмотреть все заметки");
  console.log("3. Прочитать заметку");
  console.log("4. Удалить заметку");
  console.log("5. Редактировать заметку");
  console.log("6. Поиск заметок");
  console.log("0. Выход");

  const input = await getInput("Выберите действие: ");

  switch (input) {
    case "1":
      const title = await getInput("Введите название заметки: ");
      const content = await getInput("Введите содержание заметки: ");
      addNote(title, content);
      showMenu();
      break;
    case "2":
      viewNotes();
      showMenu();
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
      rl.close();
  }
}
