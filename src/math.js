export const getRandNumber = (min, max) => Math.floor(Math.random() * (max - min)) + min;

export const getGcd = (num1, num2) => {
  const min = Math.min(num1, num2);
  const max = Math.max(num1, num2);
  let result;
  if (min === 0) {
    return max;
  }
  for (let i = min; i > 0; i -= 1) {
    if (max % i === 0 && min % i === 0) {
      result = i;
      break;
    }
  }
  return result;
};

export const isEven = num => num % 2 === 0;
