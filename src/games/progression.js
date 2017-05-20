import { cons } from 'hexlet-pairs';
import game from '../';
import { getRandNumber } from '../math';

const greeting = 'What number is missing in this progression?';
const progression = () => {
  const first = getRandNumber(1, 10);
  const diff = getRandNumber(1, 10);
  const unknown = getRandNumber(1, 10);
  const arr = [];
  arr[0] = first;
  for (let i = 1; i < 10; i += 1) {
    arr[i] = arr[i - 1] + diff;
  }
  arr[unknown] = '..';
  const question = arr.join(' ');
  const answer = first + (diff * unknown);
  return cons(question, answer);
};

export default () => game(greeting, progression);
