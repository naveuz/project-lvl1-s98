import { cons } from 'hexlet-pairs';
import game from '../';
import { getRandNumber, isEven } from '../math';

const greeting = 'Answer "yes" if number even otherwise answer "no".';
const even = () => {
  const number = getRandNumber(0, 100);
  const answer = isEven(number) ? 'yes' : 'no';
  return cons(number, answer);
};

export default () => game(greeting, even);
