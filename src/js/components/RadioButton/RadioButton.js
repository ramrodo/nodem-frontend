import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './style.scss';

class RadioButton extends PureComponent {
  static propTypes = {
    className: PropTypes.string,
    checked: PropTypes.bool,
    disabled: PropTypes.bool,
    name: PropTypes.string,
    value: PropTypes.node,
    labelText: PropTypes.node,
    onClick: PropTypes.func,
  }

  constructor() {
    super();

    this.radio = undefined;

    this.onClickCustomRadio = this.onClickCustomRadio.bind(this);
    this.setRefRadio = this.setRefRadio.bind(this);
  }

  onClickCustomRadio() {
    this.radio.click();
  }

  setRefRadio(element) {
    this.radio = element;
  }

  render() {
    const {
      className,
      checked,
      disabled,
      name,
      value,
      labelText,
      onClick,
    } = this.props;

    const classes = classnames({
      radio: true,
      active: checked,
      disabled,
      [className]: !!className,
    });

    const radioClasses = classnames({
      'radio-button': true,
      active: checked,
    });

    const customProps = {
      onClick: this.onClickCustomRadio,
    };

    return (<div styleName={classes}>
      <label htmlFor={name}>
        <div styleName={radioClasses} {...customProps} />

        <span {...customProps}>
          {labelText}
        </span>

        <input
          type="radio"
          name={name}
          value={value}
          checked={checked}
          onClick={onClick}
          disabled={disabled}
          ref={this.setRefRadio}
        />
      </label>
    </div>);
  }
}

export default RadioButton;
