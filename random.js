const readlineSync = require('readline-sync');

function generateRandomEquation (num = readlineSync.question('Множитель: ')) {
  return `${Math.floor(Math.random() * num)}x + ${Math.floor(Math.random() * num)} = ${Math.floor(Math.random() * num)}`;
}

console.log(generateRandomEquation());