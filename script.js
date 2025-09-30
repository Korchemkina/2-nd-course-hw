let a = 10;
alert(a);
a = 20;
alert(a);

const yearOfManufacture = 2007;
alert(`Год выпуска певого iPhone: ${yearOfManufacture}`);

const creatorName = "Брендан Айк/(Brendan Eich)";
alert(`Имя создателя языка JavaScript: ${creatorName}`);

let x = 10;
let y = 2;
let sum = x + y;
let dif = x - y;
let mult = x * y;
let div = x / y;
alert(`сумма: ${sum}, разность: ${dif}, произведение: ${mult} и частное (результат деления): ${div}`);

let result = y ** 5;
alert(`Результат возведения 2-х в 5-ю степень = ${result}`);

a = 9;
let b = 2;
let remainderOfDivision = a % b;
alert(`остаток от деления переменных = ${remainderOfDivision}`);

let num = 1;
num += 5;
num -= 3;
num *= 7;
num /= 3;
num += 1;
num -= 1;
alert(num);

let age = Number(prompt("Сколько Вам лет?"));
alert(`Возраст Пользователя ${age} годикоф`);

const User = {
   name: 'Шурик',
   age: 21,
   isAdmin: true
}

let names = prompt("Как Вас зовут?");
alert(`Привет, ${names} !`);

let number = Number(prompt("Загадайте любое число, в результате получите 5. Проверим?"));
mult = number * 2;
alert(`Удвоили загаданное число = ${mult}`);
sum = mult + 10;
alert(`К удвоенному числу прибавили 10 = ${sum}`);
div = sum / 2;
alert(`Полученное число разделили на 2 = ${div}`);
dif = div - number;
alert(`Из результата вычли первоначальное загаданное число = ${dif}`);
alert(`Ну вот! А Вы сомнивались... Результат: ${dif}`);


