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
            alert('Введено неверное значение');
            continue;
        }

        if (randomNumber === userNumber) {
            alert('Угадал!');
            break;
        } else {
            alert(`введеное число ${userNumber > randomNumber ? 'больше' : 'меньше'} загаданного`);
        }    
    }

    if (confirm('Играем ещё раз!')) {
        guessTheNumber();
    }
}
