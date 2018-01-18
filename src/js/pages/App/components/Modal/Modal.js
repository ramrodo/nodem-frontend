import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  ErrorMessage,
} from '../../../../components';


class ModalChangePassword extends PureComponent {
  static propTypes = {
    loading: PropTypes.bool,
    success: PropTypes.bool,
    errors: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.bool,
    ]),
    onCancel: PropTypes.func,
    onSubmit: PropTypes.func,
  };

  static defaultProps = {
    cancelText: 'Cancelar',
    submitText: 'Cambiar',
  };

  render() {
    const {
      loading,
      success,
      errors,
      onSubmit,
      onCancel,
    } = this.props;

    return (<Modal className="custom-modal">
      <ModalHeader>
        <h1>Modal Title</h1>
      </ModalHeader>
      <div>
        <ModalBody>
          {!success && <span>
            <div className="row">
              <ErrorMessage error={errors} type="alert" />
            </div>

            <div className="row">
              <p>
                Cras malesuada lacus erat, sit amet placerat libero porta ac.
                Aliquam venenatis varius augue. Phasellus finibus tellus et
                tellus ultrices efficitur ac et purus. Nullam luctus bibendum
                dolor non porta. Sed ut maximus purus. Quisque sed lorem sagittis,
                pharetra nulla sit amet, malesuada dolor. Curabitur quis aliquet
                leo, eu interdum arcu. Nunc tristique vel nisl vel maximus.
              </p>
            </div>
          </span>}

          {success && <div className="success-message">
            <p>Success message</p>
          </div>}

        </ModalBody>
        <ModalFooter>
          {!success && <div className="row">
            <div className="col-6">
              <Button type="button" onClick={onCancel}>
                Cancel
              </Button>
            </div>
            <div className="col-6">
              <Button
                type={onSubmit ? 'button' : 'submit'}
                color="primary"
                spinner={loading}
                disabled={loading}
                onClick={onSubmit}
              >
                Submit
              </Button>
            </div>
          </div>}
          {success && <div className="row">
            <div>
              <Button
                type="button"
                color="primary"
                spinner={loading}
                disabled={loading}
                onClick={onSubmit}
              >
                Finalizar
              </Button>
            </div>
          </div>}
        </ModalFooter>
      </div>
    </Modal>);
  }
}

export default ModalChangePassword;
