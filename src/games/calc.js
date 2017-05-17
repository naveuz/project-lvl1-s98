import game from '../';
import { randOperator, randNumber } from '../math';

export default () => {
  const firstNumber = randNumber();
  const secondNumber = randNumber();
  const greeting = 'What is the result of the expression?';
  let correct;
  let question;
  switch (randOperator) {
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
  return game(greeting, correct, question);
};
