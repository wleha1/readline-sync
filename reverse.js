const readlineSync = require('readline-sync');
function reverseStringWithException(str = readlineSync.question('Строка: '), exception = readlineSync.question('Слово исключение: ')) {
    const words = str.split(' ');
  
    for (let i = 0; i < words.length; i++) {
      if (words[i] !== exception) {
        words[i] = words[i].split('').reverse().join('');
      }
    }
  
    return words.reverse().join(' ');
}
console.log(reverseStringWithException());