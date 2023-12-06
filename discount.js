const readlineSync = require('readline-sync');

const calculateDiscount = () => {
    const price = readlineSync.question('Введите цену товара');
    const discountPercentage = readlineSync.question('Введите процент скидки');
        return price - (price * discountPercentage/100)
}
console.log("Цена товара с учётом скидки",calculateDiscount(),", поздравляем :)");