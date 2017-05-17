export default () => {
  const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min)) + min;
  const num1 = getRandomInt(1, 100);
  const num2 = getRandomInt(1, 100);
  const min = Math.min(num1, num2);
  const max = Math.max(num1, num2);
  const greeting = 'Find the greatest common divisor of given numbers.';
  const question = `${num1} ${num2}`;
  let correct;
  for (let i = min; i > 0; i -= 1) {
    if (max % i === 0 && min % i === 0) {
      correct = i;
      break;
    }
  }
  return { greeting, correct, question };
};
