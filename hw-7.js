console.log('\n%c Задание 1','color:green');
let str = 'js';
str = str.toUpperCase();
console.log(str);

console.log('\n%c Задание 2','color:green'); 
function filter(arr, str) {
    const lowerStr = str.toLowerCase();
    return arr.filter(item => item.toLowerCase().startsWith(lowerStr));
}

console.log(filter(['JavaScript', 'Java', 'Python'], 'ja'))

console.log('\n%c Задание 3','color:green'); 
let num = 32.58884;
console.log(Math.floor(num));
console.log(Math.ceil(num));
console.log(Math.round(num));

console.log('\n%c Задание 4','color:green');
console.log(Math.min(52, 53, 49, 77, 21, 32));
console.log(Math.max(52, 53, 49, 77, 21, 32));

console.log('\n%c Задание 5','color:green'); 
function getRandomNumber() {
    return Math.floor(Math.random() * 10) + 1;
}

console.log(getRandomNumber());

console.log('\n%c Задание 6','color:green'); 
function getRandomNumb(num) {
    return Array.from({length: Math.floor(num / 2)}, () => Math.floor(Math.random() * num));
}

console.log(getRandomNumb(10));

console.log('\n%c Задание 7','color:green'); 
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min +1) + min);
}

console.log(getRandomInt(15, 18));

console.log('\n%c Задание 8','color:green');

console.log(new Date());

console.log('\n%c Задание 9','color:green'); 
const currentDate = new Date();
currentDate.setDate(currentDate.getDate() + 73);

console.log(currentDate);

console.log('\n%c Задание 10','color:green'); 
function formatDate(date) {
    const days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
    const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
    const year = date.getFullYear();
    const month = date.getMonth();
    const day = date.getDate();
    const dayOfWeek = days[date.getDay()];
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    return `
    Дата: ${day} ${months[month]} ${year} — это ${dayOfWeek}.
    Время: ${hours}:${minutes}:${seconds}`;
}

console.log(formatDate(new Date()));