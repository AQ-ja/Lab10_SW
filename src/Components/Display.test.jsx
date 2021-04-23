/* eslint-disable linebreak-style */
/* eslint-disable no-undef */
/* eslint-disable linebreak-style */
import React from 'react';
import { screen, render } from '@testing-library/react';
import Display from './Display';

describe('Display', () => {
  it('Muestra el signo de la operacion que hara', () => {
    render(<Display stored={5} operation="-" />);
    expect(screen.getByText('5 -')).not.toBeNull();
  });

  it('Solo muestra los decimales necesarios', () => {
    render(<Display number={1600.111} decimalAmount={2} />);
    expect(screen.getByText('1600.11')).not.toBeNull();
  });
// eslint-disable-next-line eol-last
});