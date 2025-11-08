// const guessTheNumber = () => {
//     alert('Угадай число');

//     let randomNumber = Math.floor(Math.random() * 100) + 1;
//     console.log(randomNumber);
//     let userInput, userNumber;

//     for (;;) {
//         userInput = prompt('Введите число от 1 до 100');

//         if (userInput === null) {
//             break;
//         } 

//         userNumber = Number(userInput);

//         if (isNaN(userNumber) || userNumber < 1 || userNumber > 100) {
//             alert('Вы ввели неверное значение');
//             continue;
//         }

//         if (randomNumber === userNumber) {
//             alert('Вы угадали!');
//             break;
//         } else {
//             alert(`введеное число ${userNumber > randomNumber ? 'больше' : 'меньше'} загаданного`);
//         }    
//     }

//     if (confirm('Играем ещё раз?')) {
//         guessTheNumber();
//     }
// }

const simpleArithmetic = () => {
    alert('Простая арифметика');
}

        function startGame() {
            const operators = ['+', '-', '*', '/'];
            const num1 = getRandomInt(1, 20);
            const num2 = getRandomInt(1, 20);
            const operator = operators[getRandomInt(0, operators.length)];

            let question = `${num1} ${operator} ${num2}`;
            let userAnswer = prompt(`Решите задачу: ${question}`);

            // Оценка правильного ответа
            let correctAnswer = eval(question);

            // Проверка и вывод результата
            if (parseFloat(userAnswer) === correctAnswer) {
                document.getElementById('result').innerText = 'Верный ответ!';
            } else {
                document.getElementById('result').innerText = `Ошибка! Правильный ответ: ${correctAnswer}`;
            }
        }

        function getRandomInt(min, max) {
            return Math.floor(Math.random() * (max - min)) + min;
        }