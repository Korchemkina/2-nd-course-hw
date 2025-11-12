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
