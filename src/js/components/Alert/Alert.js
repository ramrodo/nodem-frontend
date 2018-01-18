import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './style.scss';

function Alert(props) {
  const {
    className,
    children,
    color,
  } = props;

  const classes = classnames({
    'alert-message': true,
    [color]: !!color,
    [className]: !!className,
  });

  return (<div styleName={classes}>
    {children}
  </div>);
}

Alert.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  color: PropTypes.string.isRequired,
};

export default Alert;
