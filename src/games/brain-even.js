export default () => {
  const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min)) + min;
  const randomInt = getRandomInt(0, 100);
  const result = randomInt % 2 === 0 ? 'yes' : 'no';
  console.log(`Question: ${randomInt}`);
  return result;
};
