import game from '../';
import { randNumber, commonDivisor } from '../math';

export default () => {
  const num1 = randNumber();
  const num2 = randNumber();
  const greeting = 'Find the greatest common divisor of given numbers.';
  const correct = commonDivisor();
  const question = `${num1} ${num2}`;
  return game(greeting, correct, question);
};
