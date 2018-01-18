import React from 'react';
import PropTypes from 'prop-types';

import user from './assets/icon-user.svg';
import password from './assets/icon-password.svg';
import logo from './assets/logo-login.svg';
import logoBlue from './assets/logo-azul.svg';
import logoMobile from './assets/logo-mobile.svg';
import email from './assets/icon-email.svg';
import tenants from './assets/icon-tenants.svg';
import devices from './assets/icon-devices.svg';
import general from './assets/icon-general.svg';
import payments from './assets/icon-payments.svg';
import staff from './assets/icon-staff.svg';
import users from './assets/icon-users.svg';
import visitors from './assets/icon-visitors.svg';
import menu from './assets/icon-menu.svg';
import arrowUp from './assets/icon-arrow-up.svg';
import arrowDown from './assets/icon-arrow-down.svg';
import arrowUpGray from './assets/icon-arrow-up-gray.svg';
import arrowDownGray from './assets/icon-arrow-down-gray.svg';
import arrowLeftGray from './assets/icon-arrow-left-gray.svg';
import arrowRightGray from './assets/icon-arrow-right-gray.svg';
import arrowSort from './assets/icon-arrow-sort.svg';
import buildings from './assets/icon-buildings.svg';
import buildingsWhite from './assets/icon-buildings-white.svg';
import successWhite from './assets/icon-success-white.svg';
import successGreen from './assets/icon-success-green.svg';
import plans from './assets/icon-plans.svg';
import addWhite from './assets/icon-add-white.svg';
import search from './assets/icon-search.svg';
import successCircleGreen from './assets/icon-success-circle-green.svg';
import view from './assets/icon-view.svg';
import closeGreen from './assets/icon-close-green.svg';
import closeRed from './assets/icon-close-red.svg';
import closeGray from './assets/icon-close-gray.svg';
import attentionRed from './assets/icon-attention-red.svg';
import attentionCircleRed from './assets/icon-attention-red-circle.svg';
import visa from './assets/icon-visa.svg';
import masterCard from './assets/icon-master-card.svg';
import carnet from './assets/icon-carnet.png';
import americanExpress from './assets/icon-american-express.svg';
import shield from './assets/icon-shield.svg';
import backCard from './assets/icon-back-card.svg';
import openpay from './assets/logo-openpay.png';
import questionBlue from './assets/icon-question-blue.svg';
import cameraBlue from './assets/icon-camera-blue.svg';
import cameraRed from './assets/icon-camera-red.svg';

const icons = {
  user,
  email,
  password,
  logo,
  logoBlue,
  logoMobile,
  tenants,
  devices,
  general,
  payments,
  staff,
  users,
  visitors,
  menu,
  arrowUp,
  arrowDown,
  arrowUpGray,
  arrowDownGray,
  arrowLeftGray,
  arrowRightGray,
  arrowSort,
  buildings,
  buildingsWhite,
  successWhite,
  successGreen,
  plans,
  addWhite,
  search,
  successCircleGreen,
  view,
  closeGreen,
  closeRed,
  closeGray,
  attentionRed,
  attentionCircleRed,
  visa,
  masterCard,
  carnet,
  americanExpress,
  shield,
  backCard,
  openpay,
  questionBlue,
  cameraBlue,
  cameraRed,
};

function Icon(props) {
  const {
    type,
    ...others
  } = props;

  return (<img src={icons[type]} alt={type} {...others} />);
}

Icon.propTypes = {
  type: PropTypes.oneOf(Object.keys(icons)),
};

Icon.defaultProps = {
  width: 22,
  height: 22,
};

export default Icon;
