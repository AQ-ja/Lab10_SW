/* eslint-disable linebreak-style */
/* eslint-disable no-undef */
/* eslint-disable linebreak-style */
import React from 'react';
import { screen, render } from '@testing-library/react';
import Display from './Display';

describe('Display', () => {
  it('Muestra los decimales necesarios y requeridos', () => {
    render(<Display number={1600.111} decimalAmount={2} />);
    expect(screen.getByText('1600.11'));
  });

  it('Muestra el signo de la suma', () => {
    render(<Display stored={24} operation="+" />);
    expect(screen.getByText('24 +'));
  });

  it('Muestra el signo de resta', () => {
    render(<Display stored={25} operation="-" />);
    expect(screen.getByText('25 -'));
  });

  it('Muestra los numeros correctamente', () => {
    render(<Display stored={1290} />);
    expect(screen.getByText('1290'));
  });

  it('Maneja numeros grandes', () => {
    render(<Display number={12345.678} />);
    expect(screen.getByText('12345.678'));
  });
// eslint-disable-next-line eol-last
});