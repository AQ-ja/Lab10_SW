import MAX_DIGITS from '../nonvarianle/MAX_DIGITS';

export default function operate(operation, value1, value2) {
  let result;
  switch (operation) {
    case '+':
      result = value1 + value2;
      break;
    case '-':
      result = value1 - value2;
      break;
    case '÷':
      result = value1 / value2;
      break;
    case 'x':
      result = value1 * value2;
      break;
    case '%':
      result = value1 % value2;
      break;
    default:
      result = value2;
      break;
  }
  if (result >= 10 ** MAX_DIGITS || -(10 ** MAX_DIGITS) >= result) {
    throw Error('Result exceeded max number of digits.');
  }
  return result;
}
