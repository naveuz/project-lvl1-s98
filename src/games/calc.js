import game from '../';
import { randOperator, randNumber } from '../math';

const greeting = 'What is the result of the expression?';
const getQuestion = () => {
  const firstNumber = randNumber();
  const secondNumber = randNumber();
  const operator = randOperator();
  return [firstNumber, secondNumber, operator];
};
const printQuestion = (question) => {
  const [num1, num2, operator] = question;
  let result;
  switch (operator) {
    case '+':
      result = `${num1} + ${num2}`;
      break;
    case '-':
      result = `${num1} - ${num2}`;
      break;
    case '*':
      result = `${num1} * ${num2}`;
      break;
    default:
      break;
  }
  return result;
};
const correctAnswer = (question) => {
  const [num1, num2, operator] = question;
  let correct;
  switch (operator) {
    case '+':
      correct = num1 + num2;
      break;
    case '-':
      correct = num1 - num2;
      break;
    case '*':
      correct = num1 * num2;
      break;
    default:
      break;
  }
  return correct;
};

export default () => game(greeting, getQuestion, correctAnswer, printQuestion);
