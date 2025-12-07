const guessTheNumber = () => {
    alert('Угадай число');

    let randomNumber = Math.floor(Math.random() * 100) + 1;
    console.log(randomNumber);
    let userInput, userNumber;

    for (;;) {
        userInput = prompt('Введите число от 1 до 100');

        if (userInput === null) {
            break;
        } 

        userNumber = Number(userInput);

        if (isNaN(userNumber) || userNumber < 1 || userNumber > 100) {
            alert('Вы ввели неверное значение');
            continue;
        }

        if (randomNumber === userNumber) {
            alert('Вы угадали!');
            break;
        } else {
            alert(`введеное число ${userNumber > randomNumber ? 'больше' : 'меньше'} загаданного`);
        }    
    }

    if (confirm('Играем ещё раз?')) {
        guessTheNumber();
    }
}

const simpleArithmetic = () => {
    alert('Простая арифметика');

    const operators = ['+', '-', '*', '/'];

    while (true) {
        let randomArr = Array.from({length: 2}, () => Math.floor(Math.random() * 20 + 1));
        let operator = operators[Math.floor(Math.random() * operators.length)];

        if (operator === '/' && randomArr[1] === 0) randomArr[1] = 1;

        let correctAnswer = eval(`${randomArr[0]} ${operator} ${randomArr[1]}`);

        if (operator === '/') correctAnswer = +correctAnswer.toFixed(2);

        let input = prompt(`Решите задачу ${randomArr[0]} ${operator} ${randomArr[1]}`);

        if (input === null) break;

        let userAnswer = Number(input);
        if (isNaN(userAnswer)) {
            alert ('Введите корректное число');
            continue;
        }

        userAnswer === correctAnswer
        ? alert ('Ответ правильный')
        : alert (`Ошибка! Правильный ответ: ${correctAnswer}`);

        if (!confirm('Сыграть ещё раз?')) break;

    }
    
}

const flipTheText = () => {
    alert('Переверни текст');
    
    const userInput = prompt('Введите текст для переворота:');
        if (userInput !== null) {
        const reversedText = userInput.split('').reverse().join('');
            alert('Перевернутый текст: ' + reversedText);
        } else {
            alert('Вы не ввели текст.');
        }
if (confirm('Играем ещё раз?')) {
        flipTheText();
    }
}


const quiz = () => {
    alert('Простая викторина');

const quiz = [
    {
        question: "Какой цвет небо?",
        options: ["1. Красный", "2. Синий", "3. Зеленый"],
        correctAnswer: 2
    },
    {
        question: "Сколько дней в неделе?",
        options: ["1. Шесть", "2. Семь", "3. Восемь"],
        correctAnswer: 2
    },
    {
        question: "Сколько у человека пальцев на одной руке?",
        options: ["1. Четыре", "2. Пять", "3. Шесть"],
        correctAnswer: 2
    }
];
let score = 0;

for (let i = 0; i < quiz.length; i++) {
    const currentQuestion = quiz[i].question;
    const answerOptions = quiz[i].options.join("\n");
    
    let userAnswer = prompt(`${currentQuestion}\n\nВарианты ответов:\n${answerOptions}\n\nВведите номер выбранного варианта.`, "");
    userAnswer = parseInt(userAnswer.trim());
        if (!isNaN(userAnswer) && userAnswer === quiz[i].correctAnswer){
        score++;
        }
    }
alert(`Вы ответили верно на ${score} из ${quiz.length} вопросов.`);

// if (confirm('Играем ещё раз?')) {
//         quiz();
//     }

}