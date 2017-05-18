import game from '../';
import { randNumber, commonDivisor } from '../math';

const greeting = 'Find the greatest common divisor of given numbers.';
const getQuestion = () => {
  const firstNumber = randNumber();
  const secondNumber = randNumber();
  return [firstNumber, secondNumber];
};
const correctAnswer = (question) => {
  const [num1, num2] = question;
  return commonDivisor(num1, num2);
};
const printQuestion = (question) => {
  const [num1, num2] = question;
  return `${num1} ${num2}`;
};

export default () => game(greeting, getQuestion, correctAnswer, printQuestion);
