import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import config from '../../config';

function CustomHelmet(props) {
  const {
    children,
  } = props;

  return (<Helmet
    titleTemplate={`%s - ${config.title}`}
  >
    {children}
  </Helmet>);
}

CustomHelmet.propTypes = {
  children: PropTypes.node,
};

export default CustomHelmet;
