import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

export default class Boton extends React.Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    const {
      content, isSymbol, isSpecial, onClick, superSpecial,
    } = this.props;

    if (isSymbol || !(isSpecial && !superSpecial)) {
      onClick(content);
    } else {
      onClick();
    }
  }

  render() {
    const {
      content,
      isSymbol,
      isWide,
      isSpecial,
      superSpecial,
    } = this.props;

    let buttonType = 'Number';

    if (isSymbol) {
      buttonType = 'Symbol';
    } else if (isSpecial) {
      buttonType = 'Static';
    } else if (superSpecial) {
      buttonType = 'Special';
    }

    if (isWide) {
      buttonType += ' Wide';
    }

    return (
      <button className={buttonType} onClick={this.onClick} type="button">{content}</button>
    );
  }
}

Boton.propTypes = {
  content: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  isSymbol: PropTypes.bool,
  isWide: PropTypes.bool,
  isSpecial: PropTypes.bool,
  superSpecial: PropTypes.bool,
};

Boton.defaultProps = {
  isSymbol: false,
  isWide: false,
  isSpecial: false,
  superSpecial: false,
  onClick: () => {},
};
