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

    // случайная задача
    function generateRandomTask() {
        const operators = ['+', '-', '*', '/'];
        const num1 = Math.floor(Math.random() * 20); // Случайное число от 0 до 20
        const num2 = Math.floor(Math.random() * 20); // Случайное число от 0 до 20
        const operator = operators[Math.floor(Math.random() * operators.length)];

    // чтобы избежать деления на ноль
    if (operator === '/') {
        return num2 === 0 ? `${num1} / 1` : `${num1} / ${num2}`;
    }

    return `${num1} ${operator} ${num2}`;
    }

    function calculateResult(task) {
        const [num1, operator, num2] = task.split(" ");
        switch (operator) {
            case '+':
                return parseFloat(num1) + parseFloat(num2);
            case '-':
                return parseFloat(num1) - parseFloat(num2);
            case '*':
                return parseFloat(num1) * parseFloat(num2);
            case '/':
                return parseFloat(num1) / parseFloat(num2);
        }
    }

    const task = generateRandomTask();
    const userAnswer = prompt(`Решите задачу: ${task}`);

    // Проверка ответа
    const correctAnswer = calculateResult(task);
        if (parseFloat(userAnswer) === correctAnswer) {
            alert("Правильно!");
        } else {
            alert(`Неправильно. Правильный ответ: ${correctAnswer}`);
        }

    if (confirm('Играем ещё раз?')) {
        simpleArithmetic();
    }
}
