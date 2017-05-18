import game from '../';
import { getRandNumber, isPrime } from '../math';

const greeting = 'Is it a prime number?';
const prime = () => {
  const number = getRandNumber(0, 100);
  const answer = isPrime(number) ? 'yes' : 'no';
  return [number, answer];
};
export default () => game(greeting, prime);
