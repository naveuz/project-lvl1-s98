export default () => {
  const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min)) + min;
  const firstNumber = getRandomInt(0, 100);
  const secondNumber = getRandomInt(0, 100);
  const operators = ['+', '-', '*'];
  const operator = operators[getRandomInt(0, operators.length - 1)];
  const greeting = 'What is the result of the expression?';
  let correct;
  let question;
  switch (operator) {
    case '+':
      correct = firstNumber + secondNumber;
      question = `${firstNumber} + ${secondNumber}`;
      break;
    case '-':
      correct = firstNumber - secondNumber;
      question = `${firstNumber} - ${secondNumber}`;
      break;
    case '*':
      correct = firstNumber * secondNumber;
      question = `${firstNumber} * ${secondNumber}`;
      break;
    default:
      break;
  }
  return { greeting, correct, question };
};
