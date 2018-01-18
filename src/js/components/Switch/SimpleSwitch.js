import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './style.scss';

class SimpleSwitch extends PureComponent {
  static propTypes = {
    className: PropTypes.string,
    disabled: PropTypes.bool,
    checked: PropTypes.bool,
    name: PropTypes.string,
    prefixText: PropTypes.string,
    suffixText: PropTypes.string,
    onChange: PropTypes.func,
  }

  render() {
    const {
      className,
      disabled,
      name,
      prefixText,
      suffixText,
      checked,
      onChange,
    } = this.props;

    const classes = classnames({
      'single-switch': true,
      active: checked,
      [className]: !!className,
      disabled,
    });

    const switchClasses = classnames({
      switch: true,
      active: checked,
    });

    return (<div styleName={classes}>
      {prefixText && <span styleName="prefix-text">{prefixText}</span>}

      <div styleName={switchClasses}>
        <label htmlFor={name}>
          <div styleName="switch-button" />
        </label>
        <input
          id={name}
          type="checkbox"
          checked={checked}
          onChange={onChange}
        />
      </div>

      {suffixText && <span styleName="suffix-text">{suffixText}</span>}
    </div>);
  }
}

export default SimpleSwitch;
