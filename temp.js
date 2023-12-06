const readlineSync = require('readline-sync');

const celsiusToFahrenheit = () => {
    const income = readlineSync.question("Введите градусы Цельсия ");
    const F = (income * 9 / 5) + 32;
    return  F;
};

console.log("Градусы Фаренгейта",celsiusToFahrenheit(),", поздравляем :)");