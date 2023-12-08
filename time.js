const readlineSync = require('readline-sync');

const calculateTime = () => {
    const distance = readlineSync.question("Введите расстояние ");
    const speed = readlineSync.question("Введите скорость в км/ч ");
    
    converTime(Math.round((distance / speed) * 60 * 60))
};
    const converTime = (time = 3665) => {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;

    console.log(`${hours} час(ов) ${minutes} минут(ы) ${seconds} секунды`);
}

calculateTime();