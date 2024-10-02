const notes = require("./notes");
const utils = require("./utils");

console.log("Добро пожаловать в Консольный Менеджер Заметок!");

async function main() {
  let exit = false;

  while (!exit) {
    console.log("\nВыберите действие:");
    console.log("1. Добавить заметку");
    console.log("2. Просмотреть все заметки");
    console.log("3. Прочитать заметку");
    console.log("4. Удалить заметку");
    console.log("5. Редактировать заметку");
    console.log("6. Поиск заметок");
    console.log("0. Выход");

    const choice = await utils.getInput("Введите номер действия: ");

    switch (choice) {
      case "1":
        const title = await utils.getInput("Введите заголовок заметки: ");
        const content = await utils.getInput("Введите содержание заметки: ");
        notes.addNote(title, content);
        break;
      case "2":
        notes.viewNotes();
        break;
      case "3":
        const titleToRead = await utils.getInput(
          "Введите заголовок заметки для чтения: "
        );
        notes.readNote(titleToRead);
        break;
      case "4":
        const titleToDelete = await utils.getInput(
          "Введите заголовок заметки для удаления: "
        );
        notes.deleteNote(titleToDelete);
        break;
      case "5":
        const titleToEdit = await utils.getInput(
          "Введите заголовок заметки для редактирования: "
        );
        const newContent = await utils.getInput(
          "Введите новое содержание заметки: "
        );
        notes.editNote(titleToEdit, newContent);
        break;
      case "6":
        const keyword = await utils.getInput(
          "Введите ключевое слово для поиска: "
        );
        notes.searchNotes(keyword);
        break;
      case "0":
        console.log("Выход из приложения. До свидания!");
        exit = true;
        break;
      default:
        console.log(
          "Некорректный выбор. Пожалуйста, выберите действие от 0 до 6."
        );
        break;
    }
  }
  utils.rl.close(); // Закрываем интерфейс readline
}

main();
