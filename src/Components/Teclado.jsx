import React from 'react';
import PropTypes from 'prop-types';
import './Teclado.css';
import Button from './Button';

export default function Teclado(props) {
  const {
    signToggle, addNumber, addOperation, clear, resolve, activateDecimals, undo,
  } = props;

  return (
    <div className="Teclado">
      <div className="row">
        <Button content="C" onClick={clear} isSpecial />
        <Button content="+/-" onClick={signToggle} isSpecial />
        <Button content=" ⤺ " onClick={undo} superSpecial />
        <Button content="%" onClick={addOperation} isSymbol isSpecial />
        <Button content="÷" onClick={addOperation} isSymbol />
      </div>
      <div className="row">
        <Button content={7} onClick={addNumber} />
        <Button content={8} onClick={addNumber} />
        <Button content={9} onClick={addNumber} />
        <Button content="x" onClick={addOperation} isSymbol />
      </div>
      <div className="row">
        <Button content={4} onClick={addNumber} />
        <Button content={5} onClick={addNumber} />
        <Button content={6} onClick={addNumber} />
        <Button content="-" onClick={addOperation} isSymbol />
      </div>
      <div className="row">
        <Button content={1} onClick={addNumber} />
        <Button content={2} onClick={addNumber} />
        <Button content={3} onClick={addNumber} />
        <Button content="+" isSymbol onClick={addOperation} />
      </div>
      <div className="row">
        <Button content={0} onClick={addNumber} isWide />
        <Button content="." onClick={activateDecimals} isSymbol />
        <Button content="=" onClick={resolve} superSpecial />
      </div>
    </div>
  );
}

Teclado.propTypes = {
  signToggle: PropTypes.func.isRequired,
  addNumber: PropTypes.func.isRequired,
  addOperation: PropTypes.func.isRequired,
  clear: PropTypes.func.isRequired,
  resolve: PropTypes.func.isRequired,
  activateDecimals: PropTypes.func.isRequired,
  undo: PropTypes.func.isRequired,
};
