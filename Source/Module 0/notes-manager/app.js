const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const userName = "Алексей";
console.log(`${userName}, добро пожаловать в Консольный Менеджер Заметок!`);

let userInput;

// rl.question("Введите число: ", (input) => {
//   userInput = input;
//   console.log(`Ваше число: ${userInput}`);
//   rl.question("Введите второе число: ", (input) => {
//     userInput += input;
//     console.log(`Ваше число: ${userInput}`);
//     rl.close();
//   });
// });

// rl.question("Введите число: ", (input) => {
//   userInput = +input;
//   console.log(`Ваше число: ${userInput}`);
//   rl.question("Введите второе число: ", (input) => {
//     userInput += input;
//     console.log(`Ваше число: ${userInput}`);
//     rl.close();
//   });
// });

console.log("\nВыберите действие:");
console.log("1. Добавить заметку");
console.log("2. Просмотреть все заметки");
console.log("3. Прочитать заметку");
console.log("4. Удалить заметку");
console.log("5. Редактировать заметку");
console.log("6. Поиск заметок");
console.log("0. Выход");

rl.question("Введите число: ", (input) => {
  userInput = +input;
  console.log(`Вы выбрали действие: ${userInput}`);
  rl.close();
});
