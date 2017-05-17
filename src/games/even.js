import game from '../';
import { firstNumber } from '../math';

export default () => {
  const question = firstNumber;
  const greeting = 'Answer "yes" if number even otherwise answer "no".';
  const correct = question % 2 === 0 ? 'yes' : 'no';
  return game(greeting, correct, question);
};
