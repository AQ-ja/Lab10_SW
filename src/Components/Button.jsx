import React from 'react';
import PropTypes from 'prop-types';
import '../Styles/button.css';

export default class Boton extends React.Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    const {
      content, simbolo, estatico, onClick, uniko,
    } = this.props;

    if (simbolo || !(estatico && !uniko)) {
      onClick(content);
    } else {
      onClick();
    }
  }

  render() {
    const {
      content,
      simbolo,
      Amp,
      estatico,
      uniko,
    } = this.props;

    let buttonType = 'numero';

    if (simbolo) {
      buttonType = 'activo';
    } else if (estatico) {
      buttonType = 'fijo';
    } else if (uniko) {
      buttonType = 'ezpecial';
    }

    if (Amp) {
      buttonType += 'sid';
    }

    return (
      <button className={buttonType} onClick={this.onClick} type="button">{content}</button>
    );
  }
}

Boton.propTypes = {
  content: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  simbolo: PropTypes.bool,
  Amp: PropTypes.bool,
  estatico: PropTypes.bool,
  uniko: PropTypes.bool,
};

Boton.defaultProps = {
  simbolo: false,
  Amp: false,
  estatico: false,
  uniko: false,
  onClick: () => {},
};
