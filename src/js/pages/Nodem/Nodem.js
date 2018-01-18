import React, { Component } from 'react';
import { push } from 'react-router-redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { ModalAnimation } from '../../components/';
import { Header, ModalCreatePlan } from './components';
import './style.scss';

const mapStateToProps = () => {
  return {

  };
};

const actions = { redirectTo: push };
const pageName = 'nodem';

@connect(mapStateToProps, actions)
class Nodem extends Component {
  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.shape({
        id: PropTypes.string,
      }),
    }),
  };

  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
    };
  }

  actionModal = () => {
    this.setState({ showModal: true });
  }

  closeSuccessModal = () => {
    console.log('close');
    this.setState({ showModal: false });
  }

  render() {
    const errors = null;
    const loading = false;
    const showSuccessModal = false;
    const { showModal } = this.state;

    return (<div styleName={pageName} id={pageName}>
      <Header onCreatePlan={this.actionModal} />

      {showModal && <ModalAnimation>
        <ModalCreatePlan
          id="modal-create"
          onCancel={this.closeSuccessModal}
          onCreatePlan={(dataPlan, planType) => this.createPlan(dataPlan, planType)}
          errors={errors}
          loading={loading}
          successModal={showSuccessModal}
          onClose={this.closeSuccessModal}
        />
      </ModalAnimation>}
    </div>
    );
  }
}

export default Nodem;
