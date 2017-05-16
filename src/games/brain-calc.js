export default () => {
  const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min)) + min;
  const firstNumber = getRandomInt(0, 100);
  const secondNumber = getRandomInt(0, 100);
  const operators = ['+', '-', '*'];
  const operator = operators[getRandomInt(0, operators.length - 1)];
  let result = 0;
  switch (operator) {
    case '+':
      result = firstNumber + secondNumber;
      console.log(`Question: ${firstNumber} + ${secondNumber}`);
      break;
    case '-':
      result = firstNumber - secondNumber;
      console.log(`Question: ${firstNumber} - ${secondNumber}`);
      break;
    case '*':
      result = firstNumber * secondNumber;
      console.log(`Question: ${firstNumber} * ${secondNumber}`);
      break;
    default:
      break;
  }
  return String(result);
};
