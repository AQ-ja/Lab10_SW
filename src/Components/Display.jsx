/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';
import '../Styles/screen.css';
import exist from '../utils/salida';
import limite_num from '../utils/limite_nums';

export default function Display(props) {
  const {
    number, operation, bufferedValue, stored, decimalAmount, showError,
  } = props;

  let message = '';
  if (exist(operation)) {
    message = `${stored} ${operation}`;
    if (exist(bufferedValue)) {
      message += ` ${bufferedValue} =`;
    }
  }

  let bigText;
  if (exist(decimalAmount)) {
    if (decimalAmount === 0) {
      bigText = `${number.toFixed(0)}.`;
    } else {
      bigText = number.toFixed(decimalAmount).toString();
    }
  } else {
    bigText = number.toString();
  }

  if (showError) {
    message = '';
    bigText = 'ERROR';
  }

  if (bigText.length > limite_num) {
    bigText = bigText.slice(0, limite_num);
  }

  return (
    <div className="Display">
      <span className="small-text">{message}</span>
      <span className="big-text">{bigText}</span>
    </div>
  );
}

Display.propTypes = {
  number: PropTypes.number,
  operation: PropTypes.string,
  bufferedValue: PropTypes.number,
  stored: PropTypes.number,
  decimalAmount: PropTypes.number,
  showError: PropTypes.bool,
};

Display.defaultProps = {
  number: 0,
  operation: '',
  bufferedValue: null,
  decimalAmount: null,
  stored: null,
  showError: false,
};
