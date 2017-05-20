import { cons } from 'hexlet-pairs';
import game from '../';
import { getRandNumber } from '../math';

const greeting = 'What is the result of the expression?';
const calc = () => {
  const firstNumber = getRandNumber(0, 100);
  const secondNumber = getRandNumber(0, 100);
  const operators = ['+', '-', '*'];
  const getRandOperator = () => operators[getRandNumber(0, operators.length - 1)];
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
  return cons(question, answer);
};

export default () => game(greeting, calc);
