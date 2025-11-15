console.log('\n%c Задание 1','color:green'); 
const min = (a, b) => (a < b) ? a : b;

console.log(min(8, 4)); 
console.log(min(6, 6));

console.log('\n%c Задание 2','color:green'); 
const evenOdd = (n) => (n % 2 === 0) ? 'Число четное' : 'Число нечетное';

console.log(evenOdd(2));
console.log(evenOdd(3));

console.log('\n%c Задание 3','color:green'); 
function squared(number) {
    console.log(number ** 2);
}
const up = (n) => n ** 2;

squared(5);
console.log(up(6));

console.log('\n%c Задание 4-сколько тебе лет','color:green'); 
function age() {
    let age = +prompt('Сколько тебе лет?');

    if (age <= 0) {
        alert('Вы ввели отрицательное значение');
    } else if (age >= 0 && age <= 12) {
        alert('Привет, друг!');
    } else if (age >= 13) {
        alert('Добро пожаловать!');
    } else {
        alert('Вы ввели неправильное значение');
    }
}

age();

console.log('\n%c Задание 5','color:green');
function calc(a, b) {
    console.log(isNaN(a));
    console.log(isNaN(b));
    if (isNaN(a) || isNaN(b)) {
        return 'Одно или оба значения не являются числом';
    } else {
        return a * b;
    }
}

console.log(calc('fgfh', 3));

console.log('\n%c Задание 6','color:green'); 
function getNumber() {
    let number = prompt('Введите число');
    if (isNaN(number)) {
        return 'Переданный параметр не является числом';
    } else {
        return `${number} в кубе равняется ${number ** 3}`;
    }
}

console.log(getNumber());

console.log('\n%c Задание 7','color:green'); 
function getArea() {
    return Math.PI * this.radius ** 2;
}

function getPerimeter() {
    return 2 * Math.PI * this.radius;
}

const circlt1 = {
    radius: 10,
    methodGetArea: getArea,
    methodGetPerimeter: getPerimeter,
}

const circlt2 = {
    radius: 20,
    methodGetArea: getArea,
    methodGetPerimeter: getPerimeter,
}

console.log(circlt1.methodGetArea());
console.log(circlt2.methodGetArea());
