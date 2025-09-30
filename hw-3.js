console.log('%c Задание №1:', 'color:green');
let password = 'пароль';
let usersPassword = prompt('Введите пароль');
(password === usersPassword)? console.log('Пароль введен верно'):console.log('Пароль введен неправильно');

console.log('%c Задание №2:', 'color:green');
let c = 2;
if (c >= 0 && c <= 10) {
    console.log('Верно');
} else {
    console.log('Неверно');
}

console.log('%c Задание №3:', 'color:green');
let d = 45;
let e = 55;
if (d > 100 || e > 100) {
    console.log('Верно');
} else {
    console.log('Неверно');
}

console.log('%c Задание №4:', 'color:green');
let a = '2';
let b = '3';
alert(Number(a) + Number(b));

console.log('%c Задание №5:', 'color:green');
let monthNumber = 14;
switch (monthNumber) {
    case 1:
    case 2:
    case 12:
        alert('Зима');        
        break;
    case 3:
    case 4:
    case 5:
        alert('Весна');        
        break;
    case 6:
    case 7:
    case 8:
        alert('Лето');        
        break;
    case 9:
    case 10:
    case 11:
        alert('Осень');        
        break;
    default:
        alert('Неверно');
        break;
}

console.log('%c Доп.задание №1:', 'color:green');
let num = prompt('Пожалуйста, введите любое число');
num = Number(num);
if (isNaN(num) || num === 0) {
    alert('Введено не верное значение');
} else {
    if (num % 2 === 0) {
        alert("Четное число");
    } else {
        alert("Нечетное число");
    }
}

console.log('%c Доп.задание №2-3:', 'color:green');
let questionOS = prompt("Введите код операционной системы (0 для iOS, 1 для Android)");
let clientOS = parseInt(questionOS, 10);

let questionYear = prompt("Введите год выпуска устройства");
let howOld = Number(questionYear);
let clientDeviceYear = 2015;

if (clientOS === 0) { // iOS
    if (howOld <= clientDeviceYear) {
        alert('Установите облегченную версию приложения для iOS по ссылке');
    } else {
        alert('Установите версию приложения для iOS по ссылке');
    }
} else if (clientOS === 1) { // Android
    if (howOld <= clientDeviceYear) {
        alert('Установите облегченную версию приложения для Android по ссылке');
    } else {
        alert('Установите версию приложения для Android по ссылке');
    }
} else {
    alert('Неизвестный код операционной системы');
}
