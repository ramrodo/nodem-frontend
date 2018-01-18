import React, { Component } from 'react';
import { reduxForm, Form } from 'redux-form';
import PropTypes from 'prop-types';

import './style.scss';
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Icon,
  Button,
  TextField,
  ErrorMessage,
} from '../../../../components';

@reduxForm({ form: 'createPlan' })
class ModalCreatePlan extends Component {
  static propTypes = {
    id: PropTypes.string,
    handleSubmit: PropTypes.func,
    onCancel: PropTypes.func,
    onClose: PropTypes.func,
    onCreatePlan: PropTypes.func,
    successModal: PropTypes.bool,
    valid: PropTypes.bool,
    errors: PropTypes.shape({
      message: PropTypes.string,
    }),
    loading: PropTypes.bool,
  };

  constructor(props) {
    super(props);
    this.state = {
      privatePlan: true,
    };
  }

  onSubmit = (plan) => {
    const { privatePlan } = this.state;
    const planType = privatePlan ? 'PRIVATE' : 'PUBLIC';
    this.props.onCreatePlan(plan, planType);
  }

  handleChange = () => {
    const { privatePlan } = this.state;
    this.setState({ privatePlan: !privatePlan });
  }

  render() {
    const {
      id,
      handleSubmit,
      onCancel,
      onClose,
      successModal,
      errors,
      loading,
      valid,
    } = this.props;

    return (<div id={id} styleName="modal-create-plan">
      <Modal width={430}>
        <ModalHeader onClose={onClose}>
          {!successModal && <h1 id="title-create-plan">Agregar Paquete</h1>}

          {successModal && <div styleName="title-success">
            <Icon type="successCircleGreen" width="80" height="80" />
            <h1 id="title-success">Nuevo Plan Agregado</h1>
          </div>}
        </ModalHeader>

        {!successModal && <div>
          <Form method="post" onSubmit={handleSubmit(this.onSubmit)}>
            <ModalBody>

              {errors && (errors.code || errors.message) &&
                <ErrorMessage id="created-error" error={errors} /> }

              <div className="row">
                <TextField
                  id="name"
                  name="name"
                  labelText="Serie's name"
                />
              </div>

              <div className="row">
                <TextField
                  id="mfal"
                  name="mfal"
                  labelText="Serie's MFAL"
                />
              </div>

              <div className="row">
                <TextField
                  id="preference"
                  name="preference"
                  labelText="Preference %"
                />
              </div>
            </ModalBody>
            <ModalFooter>
              <div styleName="left-footer">
                <Button
                  type="button"
                  color="default-border"
                  onClick={onCancel}
                >
                  Cancelar
                </Button>
              </div>
              <div styleName="right-footer">
                <Button
                  id="btn-create"
                  type="submit"
                  color="info block"
                  spinner={loading}
                  disabled={!valid || loading}
                >
                  Add serie
                </Button>
              </div>
            </ModalFooter>
          </Form>
        </div>}

      </Modal>
    </div>);
  }
}

export default ModalCreatePlan;
