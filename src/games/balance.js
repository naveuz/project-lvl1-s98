import { cons } from 'hexlet-pairs';
import game from '../';
import { getRandNumber } from '../math';

const greeting = 'Balance the given number. ';
const balanceNumber = (num) => {
  const arr = Array.from(String(num)).map(el => Number(el));
  const min = Math.min(...arr);
  const max = Math.max(...arr);
  if (max - min > 1) {
    arr[arr.indexOf(max)] -= 1;
    arr[arr.indexOf(min)] += 1;
    return balanceNumber(Number(arr.join('')));
  }
  return arr.sort().join('');
};
const balance = () => {
  const number = getRandNumber(0, 10000);
  const answer = balanceNumber(number);
  return cons(number, answer);
};

export default () => game(greeting, balance);
