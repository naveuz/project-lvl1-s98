import readlineSync from 'readline-sync';

const game = (greeting, brainGame) => {
  console.log('Welcome to the Brain Games!');
  console.log(greeting);
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  for (let i = 0; i < 3; i += 1) {
    const correct = brainGame();
    const answer = readlineSync.question('Your answer: ');
    if (answer === correct) {
      console.log('Correct!');
    } else {
      return console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correct}'.\nLet's try again, ${userName}!`);
    }
  }
  return console.log(`Congratulations, ${userName}!`);
};
export default game;
