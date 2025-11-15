console.log('\n%c Задание 1','color:green'); 
const arr = [1, 5, 4, 10, 0, 3];
    for (let i = 0; i < arr.length; i++) {
    
    console.log(arr[i]);
        if (arr[i] === 10) {
            break;
    }
}

console.log('\n%c Задание 2','color:green'); 
const newArr = arr
console.log(arr.lastIndexOf(4));

console.log('\n%c Задание 3','color:green'); 
const arr3 = [1, 3, 5, 10, 20];

console.log(arr.join(' '));

console.log('\n%c Задание 4','color:green'); 
const arr4 = [];
    for (let i = 0; i < 3; i++) {
        const arr5 = [];
        for (let i = 0; i < 3; i++) {
        arr5.push(1);        
    } 
    arr4.push(arr5);
}

console.log(arr4);

console.log('\n%c Задание 5','color:green'); 
const arrn5 = [1, 1, 1];
    arrn5.push(2, 2, 2);

console.log(arrn5);

console.log('\n%c Задание 6','color:green'); 
const arr6 = [9, 8, 7, 'a', 6, 5];
    arr6.sort();
    const filterArr6 = arr6.filter(item => typeof item === 'number');

console.log(filterArr6);

console.log('\n%c Задание 7-Угадай число','color:green'); 
const arr7 = [9, 8, 7, 6, 5];
const userNumber = +prompt('Введите число');
    if (arr7.includes(userNumber)) {
        alert('Угадал');
    } else {
        alert('Не угадал');
    }

console.log('\n%c Задание 8','color:green'); 
let str = 'abcdef';
    str = str.split('');
    console.log(str);
    str.reverse();
    str = str.join('');

console.log(str);

console.log('\n%c Задание 9','color:green'); 
const arr9 = [[1, 2, 3], [4, 5, 6]];
const mergeArray = [...arr9[0], ...arr9[1]];

console.log(mergeArray);


console.log('\n%c Задание 10','color:green'); 
const arr10 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 0; i < arr10.length; i++) {
    if (arr10[i + 1]) {
        console.log(arr10[i] + arr10[i + 1]);
    }
}

console.log('\n%c Задание 11','color:green'); 
function squared(arr) {
    return arr.map(item => item ** 2);
}

console.log(squared([1, 2, 3]));

console.log('\n%c Задание 12','color:green'); 
function getLength(arr12) {
    return arr12.map(item => item.length);
}

console.log(getLength(['Привет', 'Пока']));

console.log('\n%c Задание 13','color:green'); 
function negativNumbers(array) {
    return array.filter(item => item < 0);
}

console.log(negativNumbers([1, 2, 3, -4, 5, -6, 7, 8, 9, 10]));

console.log('\n%c Задание 14','color:green'); 
let randomArr = Array.from({length: 10}, () => Math.floor(Math.random() * 10 + 1));
console.log(randomArr);
let honestArr = randomArr.filter(num => num % 2 === 0);
console.log(honestArr);


console.log('\n%c Задание 15','color:green'); 
function randomNumber() {
    return Math.floor(Math.random() * 10);
}
const arr15 = [];
    for (let i = 0; i < 10; i++) {
        arr15.push(randomNumber());
    }
console.log(arr15);
console.log(arr15.reduce((a, b) => a + b) / arr15.length);


