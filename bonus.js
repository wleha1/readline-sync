const readlineSync = require('readline-sync');

function calculateEmployeeBonus (salary = readlineSync.question('Зарплата сотрудника: '), perfomanceRating = readlineSync.question('Рейтинг сотрудника: ')) {
    if (perfomanceRating > 8); {
      return `Бонус составляет: ${salary * 0.2}`;
  }
  return `Бонус составляет: ${salary * 0.1}`;

}

console.log(calculateEmployeeBonus())