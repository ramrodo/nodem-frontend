import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';
import classnames from 'classnames';
import blacklist from 'blacklist';
import './style.scss';

function handleNumericKeyDown(e) {
  const { key } = e;

  if (key === 'ArrowUp' || key === 'ArrowDown') {
    e.preventDefault();
  }
}

class TextField extends Component {
  static propTypes = {
    id: PropTypes.string,
    className: PropTypes.string,
    styleName: PropTypes.string,
    disabled: PropTypes.bool,
    errorText: PropTypes.node,
    labelText: PropTypes.node,
    leftIcon: PropTypes.node,
    rightIcon: PropTypes.node,
    multiLine: PropTypes.bool,
    inline: PropTypes.bool,
    name: PropTypes.string,
    type: PropTypes.string,
    fileName: PropTypes.string,
    width: PropTypes.number,
  }

  static defaultProps = {
    className: '',
    multiLine: false,
    type: 'text',
    errorText: 'Valor requerido',
  }

  buildInput(field) {
    const { multiLine, leftIcon, rightIcon, type, fileName } = this.props;
    const inputProps = blacklist(field,
      'input',
      'errorText',
      'labelText',
      'leftIcon',
      'rightIcon',
      'multiLine',
      'meta',
      'fileName',
      'inline',
      'boldLabel',
    );
    const containerStyleNames = classnames({
      'input-group': true,
      'left-text': typeof leftIcon === 'string',
      'right-text': typeof rightIcon === 'string',
      'left-icon': (typeof leftIcon !== 'string' && leftIcon),
      'right-icon': (typeof rightIcon !== 'string' && rightIcon),
    });
    let inputElement;

    if (type === 'number') {
      inputProps.onKeyDown = inputProps.onKeyDown ? inputProps.onKeyDown : handleNumericKeyDown;
      inputProps.onWheel = e => e.preventDefault();
    }

    if (multiLine) {
      inputElement = (<textarea {...field.input} styleName="input" />);
    } else if (type === 'file') {
      inputElement = (<button type="button" styleName="input" onClick={() => this.inputFile.click()}>
        <input
          {...inputProps}
          onChange={field.input.onChange}
          ref={(ele) => { this.inputFile = ele; }}
        />
        <span title={fileName}>{fileName}</span>
      </button>);
    } else {
      inputElement = (<input {...field.input} {...inputProps} styleName="input" />);
    }

    return (<div styleName={containerStyleNames}>
      {leftIcon && <span styleName="input-addon">
        {leftIcon}
      </span>}

      {inputElement}

      {rightIcon && <span styleName="input-addon">
        {rightIcon}
      </span>}
    </div>);
  }


  renderField = (field) => {
    const {
      id,
      className,
      styleName,
      errorText,
      labelText,
      disabled,
      inline,
      name,
      width,
    } = this.props;
    const style = { width };
    const inputElement = this.buildInput(field);
    const hasError = !field.meta.active && field.meta.error && field.meta.touched;
    const stylenames = classnames({
      'input-container': true,
      error: hasError,
      [styleName]: !!styleName,
      disabled,
      inline,
    });

    return (<div className={className} styleName={stylenames} style={style}>
      {labelText && <label htmlFor={name}>{labelText}</label>}
      {inputElement}
      {hasError && <span id={`${id}-error`} styleName="input-error-text">{errorText}</span>}
    </div>);
  }

  render() {
    return (<Field {...this.props} component={this.renderField} />);
  }
}

export default TextField;
