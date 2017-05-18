import readlineSync from 'readline-sync';

const game = (greeting, getDataGame) => {
  console.log('Welcome to the Brain Games!');
  console.log(greeting);
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  for (let i = 0; i < 3; i += 1) {
    const data = getDataGame();
    const [question, answer] = data;
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer === String(answer)) {
      console.log('Correct!');
    } else {
      return console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'.\nLet's try again, ${userName}!`);
    }
  }
  return console.log(`Congratulations, ${userName}!`);
};
export default game;
