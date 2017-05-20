import readlineSync from 'readline-sync';
import { car, cdr } from 'hexlet-pairs';

const game = (greeting, getDataGame) => {
  console.log('Welcome to the Brain Games!');
  console.log(greeting);
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  for (let i = 0; i < 3; i += 1) {
    const data = getDataGame();
    console.log(`Question: ${car(data)}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer === String(cdr(data))) {
      console.log('Correct!');
    } else {
      return console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${cdr(data)}'.\nLet's try again, ${userName}!`);
    }
  }
  return console.log(`Congratulations, ${userName}!`);
};
export default game;
