import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './style.scss';

class Modal extends Component {
  static propTypes = {
    id: PropTypes.string,
    className: PropTypes.string,
    children: PropTypes.node,
    overModal: PropTypes.node,
    width: PropTypes.number,
    focusInput: PropTypes.bool,
  }

  static defaultProps = {
    className: '',
    width: 490,
    focusInput: true,
  }

  componentWillMount() {

  }

  componentDidMount() {
    const { focusInput } = this.props;
    const { modalContent } = this;

    if (focusInput) {
      const inputs = modalContent.querySelectorAll('input[type=text]') || [];
      if (inputs.length > 0) {
        inputs[0].focus();
      }
    }

    const scrollContainer = document.getElementById('scroll');
    const bodyClasses = scrollContainer.className;

    scrollContainer.className = `${bodyClasses} has-modal`;
  }

  componentWillUnmount() {
    const scrollContainer = document.getElementById('scroll');
    const bodyClasses = scrollContainer.className;
    const regex = /has-modal/ig;

    scrollContainer.className = bodyClasses.replace(regex, '');
  }

  setModalContentRed = (ele) => {
    this.modalContent = ele;
  }

  render() {
    const {
      id,
      className,
      children,
      overModal,
      width,
    } = this.props;
    const style = { width };

    return (<div styleName="modal" className={className} id={id}>
      <div styleName="modal-overlay" />
      <div styleName="modal-view">
        <div styleName="over-modal" style={style}>{overModal}</div>
        <div styleName="modal-container" style={style} ref={this.setModalContentRed}>
          {children}
        </div>
      </div>
    </div>);
  }
}

export default Modal;
