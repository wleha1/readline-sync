const readlineSync = require('readline-sync');

const calculateRectangleProperties = () => {
    const width = readlineSync.question("Введите ширину треугольника")
    const height = readlineSync.question("Введите высоту треугольника")
        return  [2*height+2*width, width*height]
};

console.log("Периметр и площадь треугольника", calculateRectangleProperties(), ", поздравляем :)")