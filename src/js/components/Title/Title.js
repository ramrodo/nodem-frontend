import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './style.scss';

function Title(props) {
  const {
    className,
    children,
    tag,
    color,
    icon,
    border,
    ...others
  } = props;

  const stylenames = classnames({
    title: true,
    border: !!border,
    icon: !!icon,
    [color]: !!color,
  });

  const Element = tag;

  return (<Element {...others} className={className} styleName={stylenames}>
    {icon && <span styleName="title-icon" key="icon">{icon}</span>}
    <span styleName="title-text" key="text">{children}</span>
  </Element>);
}

Title.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  tag: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
  border: PropTypes.bool,
  color: PropTypes.oneOf([
    'default',
    'primary',
  ]),
  icon: PropTypes.node,
};

Title.defaultProps = {
  color: 'default',
  tag: 'h1',
};

export default Title;
