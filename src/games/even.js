import game from '../';
import { randNumber, even } from '../math';

const getQuestion = () => randNumber();
const greeting = 'Answer "yes" if number even otherwise answer "no".';
const correctAnswer = question => even(question);
const printQuestion = question => String(question);

export default () => game(greeting, getQuestion, correctAnswer, printQuestion);
