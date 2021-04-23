import limite_num from './limite_nums';

export default function operate(operacion, valor1, valor2) {
  let result;
  switch (operacion) {
    case '+':
      result = valor1 + valor2;
      break;
    case '-':
      result = valor1 - valor2;
      break;
    case '÷':
      result = valor1 / valor2;
      break;
    case 'x':
      result = valor1 * valor2;
      break;
    case '%':
      result = valor1 % valor2;
      break;
    default:
      result = valor2;
      break;
  }
  if (result >= 10 ** limite_num || -(10 ** limite_num) >= result) {
    throw Error('El resultado excede el maximo de digitos.');
  }
  return result;
}
