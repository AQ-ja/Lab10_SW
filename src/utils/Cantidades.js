import exist from './salida';

export default function Ccanti(number, decimals) {
  let cantidadDecimales = decimals;
  if (!exist(decimals)) {
    cantidadDecimales = -1;
  }
  const textNumber = (Math.trunc(number)).toString();
  return textNumber.length + cantidadDecimales + 1;
}
