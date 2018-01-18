import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

import Button from './Button';

function ActionButton(props) {
  const {
    text,
    ...others
  } = props;

  return (<Button color="action" {...others}>
    <span>{text}</span>
  </Button>);
}

ActionButton.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  text: PropTypes.string,
  onClick: PropTypes.func,
};

export default ActionButton;
