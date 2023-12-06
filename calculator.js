const readlineSync = require('readline-sync');
const incomeTaxCalculator = () => {
    const income = readlineSync.question("Введите доход");
    return income * (15/100);
};
console.log(incomeTaxCalculator())