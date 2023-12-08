const readlineSync = require('readline-sync');

const calculateDistance = () => {
    const x1 = readlineSync.question("Введите расстояние точки x1 ")
    const y1 = readlineSync.question("Введите расстояние точки y2 ")
    const x2 = readlineSync.question("Введите расстояние точки x2 ")
    const y2 = readlineSync.question("Введите расстояние точки y2 ")
    return Math.sqrt(Math.pow((x1 - x2), 2) + Math.pow((y1 - y2), 2));
};

console.log("Расстояние между двумя точками", calculateDistance())