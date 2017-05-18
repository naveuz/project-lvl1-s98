export const commonDivisor = (num1, num2) => {
  const min = Math.min(num1, num2);
  const max = Math.max(num1, num2);
  let result;
  for (let i = min; i > 0; i -= 1) {
    if (max % i === 0 && min % i === 0) {
      result = i;
      break;
    }
  }
  return result;
};
export const even = (num) => {
  if (num % 2 === 0) {
    return 'yes';
  }
  return 'no';
};
const randomInt = (min, max) => Math.floor(Math.random() * (max - min)) + min;
const operators = ['+', '-', '*'];
export const randOperator = () => operators[randomInt(0, operators.length - 1)];
export const randNumber = () => randomInt(0, 100);
