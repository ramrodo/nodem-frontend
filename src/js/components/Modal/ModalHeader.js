import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import './style.scss';
import { Icon, Button } from '../';

class ModalHeader extends PureComponent {
  static propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
    onClose: PropTypes.func.isRequired,
  }

  render() {
    const {
      className,
      children,
      onClose,
    } = this.props;

    return (<header styleName="modal-header" className={className}>

      <div styleName="close">
        <Button id="cross-button" color="unstyled" onClick={onClose}>
          <Icon type="closeGray" width="14" height="14" />
        </Button>
      </div>

      <div>
        {children}
      </div>
    </header>);
  }
}

export default ModalHeader;
