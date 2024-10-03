const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const userName = "Алексей";
console.log(`${userName}, добро пожаловать в Консольный Менеджер Заметок!`);

let userInput;

rl.question("Введите число: ", (input) => {
  userInput = input;
  console.log(`Ваше число: ${userInput}`);

  rl.close();
});
