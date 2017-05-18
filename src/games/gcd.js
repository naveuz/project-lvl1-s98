import game from '../';
import { getRandNumber, getGcd } from '../math';

const greeting = 'Find the greatest common divisor of given numbers.';
const gcd = () => {
  const firstNumber = getRandNumber(0, 100);
  const secondNumber = getRandNumber(0, 100);
  const answer = getGcd(firstNumber, secondNumber);
  const question = `${firstNumber} ${secondNumber}`;
  return [question, answer];
};

export default () => game(greeting, gcd);
