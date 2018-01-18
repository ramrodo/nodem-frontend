import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './style.scss';

function Button(props) {
  const {
    className,
    children,
    color,
    disabled,
    onClick,
    spinner,
    ...others
  } = props;

  const classes = classnames({
    btn: true,
    [`btn-${color}`]: !!color,
    disabled: !!disabled,
  });

  return (<button
    {...others}
    className={className}
    styleName={classes}
    onClick={onClick}
    disabled={disabled}
  >
    {!spinner && children}
    {spinner && <i styleName="spinner" />}
  </button>);
}

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  color: PropTypes.string,
  disabled: PropTypes.bool,
  spinner: PropTypes.bool,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  type: 'button',
};

export default Button;
