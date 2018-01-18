import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';

import './style.scss';

function EmptyState(props) {
  const { className, icon, description, onClick, buttonText } = props;
  return (<section className={`empty-state ${className}`}>
    <div className="content">
      {icon}
      {description}
      {onClick && <footer>
        <Button onClick={onClick} color="primary">{buttonText}</Button>
      </footer>}
    </div>
  </section>);
}

EmptyState.propTypes = {
  className: PropTypes.string,
  icon: PropTypes.node,
  description: PropTypes.node,
  buttonText: PropTypes.node,
  onClick: PropTypes.func,
};

EmptyState.defaultProps = {
  buttonText: <span><i className="icon-add" /> Add</span>,
};

export default EmptyState;
