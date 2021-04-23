import React from 'react';
import PropTypes from 'prop-types';
import '../Styles/keyboard.css';
import Button from './Button';

export default function Teclado(props) {
  const {
    signToggle, addNumber, addOperation, clear, resolve, activateDecimals, undo,
  } = props;

  return (
    <div className="Teclado">
      <div className="row">
        <Button content="C" onClick={clear} estatico />
        <Button content="+/-" onClick={signToggle} estatico />
        <Button content=" ⤺ " onClick={undo} uniko />
        <Button content="%" onClick={addOperation} simbolo estatico />
        <Button content="÷" onClick={addOperation} simbolo />
      </div>
      <div className="row">
        <Button content={7} onClick={addNumber} />
        <Button content={8} onClick={addNumber} />
        <Button content={9} onClick={addNumber} />
        <Button content="x" onClick={addOperation} simbolo />
      </div>
      <div className="row">
        <Button content={4} onClick={addNumber} />
        <Button content={5} onClick={addNumber} />
        <Button content={6} onClick={addNumber} />
        <Button content="-" onClick={addOperation} simbolo />
      </div>
      <div className="row">
        <Button content={1} onClick={addNumber} />
        <Button content={2} onClick={addNumber} />
        <Button content={3} onClick={addNumber} />
        <Button content="+" simbolo onClick={addOperation} />
      </div>
      <div className="row">
        <Button content={0} onClick={addNumber} isWide />
        <Button content="." onClick={activateDecimals} simbolo />
        <Button content="=" onClick={resolve} uniko />
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
