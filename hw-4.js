console.log('\n%c Задание 1','color:green'); 
let i = 0;
while (i < 2) {console.log ("Привет")
i++;
}
console.log('\n%c Задание 2','color:green'); 
let num = 1;
let n = 5;
while (num <= n) {console.log(num);
    num +=1;
}
console.log('\n%c Задание 3','color:green'); 
let numb =7;
do {
    console.log(numb);
    numb++;
} while (numb <= 22);

console.log('\n%c Задание 4','color:green'); 
const obj = {
    "Коля" : '200',
    "Вася" : '300',
    "Петя" : '400'
}
for (let key in obj) {
    console.log(`${key}: ${obj[key]}`, "долларов");    
    
}

console.log('\n%c Задание 5','color:green'); 
let number = 1000;
let cycle = 0;
let result = [];
while (number > 50) {
   result.push(number);
   number /= 2;
   cycle++;
}
    console.log("результат деления:", number,  "количество циклов:", cycle);

console.log('\n%c Задание 6','color:green'); 
for (let dayNamber = 3; dayNamber <= 31; dayNamber += 7) {
    console.log("Сегодня пятница,",  dayNamber, "-е число. Необходимо подготовить отчет.");    
}

console.log('\n%c Задание доп 1','color:green'); 
let k = 100;
let iterations = 0;
let res = [];
while (k > 0) {
   res.push(k);
   k -= 7;
   iterations++;
}    
console.log("результат вычитания:", k,  "количество итераций:", iterations);

console.log('\n%c Задание доп 2','color:green'); 
const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
for (let i = 0; i < months.length; i++) {
    console.log("Месяц:", months[i], "порядковый номер в году:", i + 1)    
}

console.log('\n%c Задание доп 3','color:green');
const boock = {
     "название" : 'Борьба за огонь', 
     "автор" : 'Жозеф Рони-старший.', 
     "год издания" : '1911', 
     "жанр" : 'Роман'
}
    for (let key in boock) {
    console.log(`${key}: ${boock[key]}`);
    }

console.log('\n%c Задание доп 4','color:green'); 
const randomNumber = [];
    for (let i = 0; i < 10; i++) {
        randomNumber.push(Math.floor(Math.random() * 1001));
    }    
    let min = Math.min(...randomNumber);
        console.log(randomNumber, min); 
           
    
