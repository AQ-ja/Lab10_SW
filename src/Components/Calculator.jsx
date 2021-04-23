/* eslint-disable camelcase */
// Codigo de ejemplo:
// https://github.com/ahfarmer/calculator
// extraido de:
// https://es.reactjs.org/community/examples.html
// Diseño a partir de la calculadora de Samsung.
import React from 'react';
import '../Styles/calculadora.css';
import Display from './Display';
import operate from '../utils/funcionalidades';
import Teclado from './Teclado';
import exist from '../utils/salida';
import characterAmount from '../utils/Cantidades';
import limite_nums from '../nonvarianle/limite_nums';

export default class Calculadora extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      storedValue: 0,
      bufferedValue: null,
      operation: null,
      currentValue: 0,
      overwrite: true,
      decimals: null,
      error: false,
    };
    this.history = [];
    this.saveState = true;

    this.appendNumber = this.appendNumber.bind(this);
    this.addOperation = this.addOperation.bind(this);
    this.toggleSign = this.toggleSign.bind(this);
    this.clear = this.clear.bind(this);
    this.resolveAndBuffer = this.resolveAndBuffer.bind(this);
    this.activateDecimals = this.activateDecimals.bind(this);
    this.undo = this.undo.bind(this);
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.saveState) {
      if (!this.statesAreEqual(prevState)) {
        this.history.push(prevState);
      }
    } else {
      this.saveState = true;
    }
  }

  appendNumber(number) {
    const { overwrite, decimals, error } = this.state;

    if (error) {
      return;
    }

    if (overwrite) {
      this.overwriteValues(number);
      return;
    }

    if (!this.canWrite()) {
      return;
    }

    if (exist(decimals)) {
      this.setState((prevState) => ({
        currentValue: prevState.currentValue + number * 10 ** (-prevState.decimals - 1),
        decimals: prevState.decimals + 1,
      }));
      return;
    }

    this.setState((prevState) => ({ currentValue: prevState.currentValue * 10 + number }));
  }

  overwriteValues(number) {
    const { bufferedValue } = this.state;
    if (exist(bufferedValue)) {
      this.setState({
        overwrite: false,
        currentValue: number,
        storedValue: 0,
        bufferedValue: null,
        operation: null,
        decimals: null,
      });
    } else {
      this.setState({ overwrite: false, currentValue: number, decimals: null });
    }
  }

  addOperation(operator) {
    const { bufferedValue, operation, error } = this.state;
    if (error) {
      return;
    }

    if (exist(bufferedValue)) {
      this.unbufferAndOperate(operator);
      return;
    }

    if (operation) {
      this.resolvePendingOperators(operator);
      return;
    }

    this.setState((prevState) => ({
      storedValue: prevState.currentValue,
      overwrite: true,
      operation: operator,
    }));
  }

  resolvePendingOperators(operator) {
    const {
      operation, overwrite, storedValue, currentValue,
    } = this.state;

    if (overwrite) {
      this.setState({ operation: operator });
    } else {
      try {
        const result = operate(operation, storedValue, currentValue);
        this.setState({
          storedValue: result,
          currentValue: result,
          overwrite: true,
          operation: operator,
        });
      } catch (e) {
        this.errorHandling();
      }
    }
  }

  unbufferAndOperate(operator) {
    this.setState((prevState) => ({
      bufferedValue: null,
      storedValue: prevState.currentValue,
      overwrite: true,
      operation: operator,
    }));
  }

  resolveAndBuffer() {
    const {
      bufferedValue, operation, currentValue, storedValue,
    } = this.state;

    try {
      if (exist(bufferedValue)) {
        const result = operate(operation, currentValue, bufferedValue);
        this.setState((prevState) => ({
          storedValue: prevState.currentValue,
          currentValue: result,
        }));
      } else {
        const result = operate(operation, storedValue, currentValue);
        this.setState((prevState) => ({
          bufferedValue: prevState.currentValue,
          currentValue: result,
          overwrite: true,
          decimals: null,
        }));
      }
    } catch (e) {
      this.errorHandling();
    }
  }

  toggleSign() {
    this.setState((prevState) => ({ currentValue: -prevState.currentValue }));
  }

  clear() {
    this.setState({
      storedValue: 0,
      bufferedValue: null,
      operation: null,
      decimals: null,
      currentValue: 0,
      overwrite: true,
      error: false,
    });
  }

  activateDecimals() {
    const { overwrite, bufferedValue } = this.state;

    if (overwrite) {
      if (exist(bufferedValue)) {
        this.setState({
          decimals: 0,
          overwrite: false,
          currentValue: 0,
          bufferedValue: null,
          storedValue: 0,
          operation: null,
        });
      } else {
        this.setState({
          decimals: 0,
          overwrite: false,
          currentValue: 0,
        });
      }
    } else if (this.canWrite()) {
      this.setState({ decimals: 0 });
    }
  }

  errorHandling() {
    this.setState({
      storedValue: 0,
      bufferedValue: null,
      operation: null,
      currentValue: 0,
      overwrite: true,
      decimals: null,
      error: true,
    });
  }

  canWrite() {
    const { currentValue, decimals } = this.state;
    return characterAmount(currentValue, decimals) < limite_nums;
  }

  statesAreEqual(otherState) {
    const { state } = this;
    return state.storedValue === otherState.currentValue
      && state.bufferedValue === otherState.bufferedValue
      && state.operation === otherState.operation
      && state.currentValue === otherState.currentValue
      && state.overwrite === otherState.overwrite
      && state.decimals === otherState.decimals
      && state.error === otherState.error;
  }

  undo() {
    if (this.history.length > 0) {
      this.saveState = false;
      this.setState(this.history.pop());
    }
  }

  render() {
    const {
      currentValue, operation, storedValue, bufferedValue, decimals, error,
    } = this.state;

    return (
      <div className="Calculator">
        <Display
          number={currentValue}
          operation={operation}
          stored={storedValue}
          bufferedValue={bufferedValue}
          decimalAmount={decimals}
          showError={error}
        />
        <Teclado
          signToggle={this.toggleSign}
          addNumber={this.appendNumber}
          addOperation={this.addOperation}
          clear={this.clear}
          resolve={this.resolveAndBuffer}
          activateDecimals={this.activateDecimals}
          undo={this.undo}
        />
      </div>
    );
  }
}
