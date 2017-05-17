export default () => {
  const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min)) + min;
  const question = getRandomInt(0, 100);
  const greeting = 'Answer "yes" if number even otherwise answer "no".';
  const correct = question % 2 === 0 ? 'yes' : 'no';
  return { greeting, correct, question };
};
