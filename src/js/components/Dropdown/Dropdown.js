import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import onClickOutside from 'react-onclickoutside';
import './style.scss';

const optionShape = {
  value: PropTypes.string,
  label: PropTypes.string,
};

@onClickOutside
class Dropdown extends Component {
  static propTypes = {
    name: PropTypes.string,
    alwaysOpen: PropTypes.bool,
    className: PropTypes.string,
    labelText: PropTypes.node,
    defaultOptionText: PropTypes.node,
    options: PropTypes.arrayOf(PropTypes.shape(optionShape)).isRequired,
    selectedOption: PropTypes.shape(optionShape),
    input: PropTypes.shape({
      // ReduxForm Prop
      name: PropTypes.string,
      onChange: PropTypes.func,
    }),
    template: PropTypes.func,
    onChange: PropTypes.func,
  }

  static defaultProps = {
    className: '',
    defaultOptionText: 'Opciones',
    selectedOption: {},
    template: option => option.label,
  }

  constructor(props) {
    super(props);

    this.state = {
      showOptions: props.alwaysOpen || false,
    };
  }

  handleClickOutside = () => {
    const { alwaysOpen } = this.props;

    this.setState({
      showOptions: alwaysOpen || false,
    });
  }

  toggleMenu = (e) => {
    const { alwaysOpen } = this.props;
    const { showOptions } = this.state;

    e.stopPropagation();

    this.setState({
      showOptions: alwaysOpen || !showOptions,
    });
  }

  renderLabel() {
    const { input, options, selectedOption, defaultOptionText, template } = this.props;
    let option = {
      ...selectedOption,
    };

    if (input) {
      for (let i = 0; i < options.length; i += 1) {
        if (options[i].value === input.value.value) {
          option = options[i];
          break;
        }
      }
    }

    return option.label ? template(option, true) : defaultOptionText;
  }

  renderOption = (option) => {
    const { input, onChange, selectedOption, template } = this.props;
    const { disabled } = option;

    let value = selectedOption.value;

    if (input) {
      value = input.value;
    }

    const active = value === option.value;
    const classes = classnames({
      active,
      disabled,
    });

    return (<a
      tabIndex="0"
      disabled={disabled}
      className={classes}
      onClick={disabled ? undefined : (e) => {
        this.toggleMenu(e);

        if (input && input.onChange) {
          input.onChange(option);
        } else if (onChange) {
          onChange(option);
        }
      }}
    >
      {template(option, active)}
    </a>);
  }

  render() {
    const {
      className,
      labelText,
      options,
      input,
    } = this.props;
    const { showOptions } = this.state;
    const classes = classnames({
      dropdown: true,
      open: showOptions,
    });
    let name = this.props.name;

    if (input) {
      name = input.name;
    }

    return (<div className={className} styleName="dropdown-container">
      {labelText && <label htmlFor={name}>{labelText}</label>}

      <div styleName={classes}>
        <button type="button" onClick={this.toggleMenu} id={name}>
          <span styleName="dropdown-label">
            {this.renderLabel()}
          </span>

          {!showOptions && <i className="icon-caret-down" />}
          {showOptions && <i className="icon-caret-up" />}
        </button>

        {showOptions && <ul styleName="dropdown-options">
          {options && options.map(option => <li key={option.value}>
            {this.renderOption(option)}
          </li>)}
        </ul>}
      </div>
    </div>);
  }
}

export default Dropdown;
