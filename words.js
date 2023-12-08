const readlineSync = require('readline-sync');

const countWords =() => {
    const sentence = readlineSync.question("Введите строку ")
        return sentence.split(' ').length
};

console.log("Количество слов в строке:" + countWords())