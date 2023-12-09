const readlineSync = require('readline-sync');

const calculateBalance = () => {
  const incomes = readlineSync.question("Введите доходы ");
  const expenses = readlineSync.question("Введите расходы ");
    return (incomes - expenses);
}

console.log("Ваш баланс:", calculateBalance())