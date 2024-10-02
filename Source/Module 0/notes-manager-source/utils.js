const readline = require("readline");

// Создаем интерфейс для чтения ввода и вывода в консоль
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Функция для получения ввода от пользователя
function getInput(question) {
  return new Promise((resolve) => {
    rl.question(question, (answer) => {
      resolve(answer);
    });
  });
}

module.exports = {
  getInput,
  rl,
};
