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

do {
    alert('Простая викторина');
    let score = 0;
    for (let q of quiz) {
        let messege = `${q.question}\n${q.options.join('\n')}`;
        let answer = prompt(messege);

        if (answer === null) {
            alert("Игра прервана!");
            return;
        }

        let isNumberCorrect = Number(answer) === q.correctAnswer;
        let isTextCorrect = answer.trim().toLowerCase() === q.options[q.correctAnswer - 1]
            .replace(/^\d+\.\s*/, '')
            .toLowerCase();

        if (isNumberCorrect || isTextCorrect) {
            alert ('Правильно');
            score++;
        } else {
            alert (`Не правильно, правильный ответ: ${q.options[q.correctAnswer - 1]}`);
        }
    }

    alert(`Викторина завершена!\nПравильных ответов: ${score} из ${quiz.length}`);
} while (confirm("Хотите сыграть ещё раз?") );
}


const rockPaperScissors = () => {
    alert('Камень, ножницы, бумага');

function playGame() {
    const options = ["камень", "ножницы", "бумага"];
    let playAgain = true;

    while (playAgain) {
        const normalUserChoice = prompt("Выберите: камень, ножницы или бумага");
        const computerChoice = options[Math.floor(Math.random() * options.length)];

        if (normalUserChoice === null) {
            alert("Игра прервана!");
            break;
        }
        let userChoice = normalUserChoice.toLowerCase();
        if (!options.includes(userChoice)) {
        alert("Неверный выбор. Пожалуйста, выберите камень, ножницы или бумага.");
            continue;
        }

    let result;

    if (userChoice === computerChoice) {
        result = "Ничья!";
    } else if (
        (userChoice === "камень" && computerChoice === "ножницы") ||
        (userChoice === "ножницы" && computerChoice === "бумага") ||
        (userChoice === "бумага" && computerChoice === "камень")
    ) {
        result = "Вы победили!";
    } else {
        result = "Компьютер победил!";
    }

    alert(`Ваш выбор: ${userChoice}\nВыбор компьютера: ${computerChoice}\nРезультат: ${result}`);

    playAgain = confirm("Сыграем ещё?");
    }
}

playGame();
}

