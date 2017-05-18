import game from '../';
import { getRandOperator, getRandNumber } from '../math';

const greeting = 'What is the result of the expression?';
const calc = () => {
  const firstNumber = getRandNumber(0, 100);
  const secondNumber = getRandNumber(0, 100);
  const operator = getRandOperator();
  let question;
  let answer;
  switch (operator) {
    case '+':
      question = `${firstNumber} + ${secondNumber}`;
      answer = firstNumber + secondNumber;
      break;
    case '-':
      question = `${firstNumber} - ${secondNumber}`;
      answer = firstNumber - secondNumber;
      break;
    case '*':
      question = `${firstNumber} * ${secondNumber}`;
      answer = firstNumber * secondNumber;
      break;
    default:
      break;
  }
  return [question, answer];
};

export default () => game(greeting, calc);
