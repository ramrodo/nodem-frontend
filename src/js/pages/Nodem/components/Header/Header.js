import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './style.scss';

import { Icon, CreateButton, Title } from '../../../../components';

class Header extends PureComponent {

  static propTypes = {
    onCreatePlan: PropTypes.func,
  }

  render() {
    const {
      onCreatePlan,
    } = this.props;

    return (<header className="row clearfix" styleName="plan-list-header">
      <div className="col-6">
        <Title
          color="primary"
          icon={<Icon type="plans" width="40" height="40" />}
          border
        >
          Nodem
        </Title>
      </div>

      <div className="col-6">
        <CreateButton id="btn-create-plan" styleName="create-btn" text="Agregar Paquete" onClick={onCreatePlan} />
      </div>
    </header>);
  }
}

export default Header;
