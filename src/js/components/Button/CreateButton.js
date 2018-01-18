import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

import Button from './Button';
import Icon from '../Icon';

function CreateButton(props) {
  const {
    text,
    ...others
  } = props;

  return (<Button color="create" {...others}>
    <Icon type="addWhite" width="16" height="16" />
    <span>{text}</span>
  </Button>);
}

CreateButton.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  disabled: PropTypes.bool,
  spinner: PropTypes.bool,
  text: PropTypes.string,
  onClick: PropTypes.func,
};

export default CreateButton;
