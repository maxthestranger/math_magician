import React from 'react';
import { PropTypes } from 'prop-types';

export default function Button({ value, handleClick }) {
  return (
    <button
      type="button"
      className={`btn ${
        ['÷', 'x', '-', '+', '='].includes(value) ? 'primary' : ''
      } ${value === '0' ? 'zero' : ''}`}
      value="AC"
      onClick={() => handleClick(value)}
    >
      {value}
    </button>
  );
}

Button.propTypes = {
  value: PropTypes.string.isRequired,
  handleClick: PropTypes.func,
};

Button.defaultProps = {
  handleClick: () => null,
};
