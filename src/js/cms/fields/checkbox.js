import PropTypes from 'prop-types';
import React from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { Map } from 'immutable';

function valueToString(value) {
  return value ? value.map(v => v.trim()).filter(v => v).join(',').replace(/,([^\s]|$)/g, ', $1') : '';
}

export default class CheckboxControl extends React.Component {

  constructor(props) {
    super(props);
    const { value } = props;

    this.state = {
      value: valueToString(value)
    };
  }

  static propTypes = {
    onChange: PropTypes.func.isRequired,
    value: PropTypes.node,
    forID: PropTypes.string.isRequired,
    classNameWrapper: PropTypes.string.isRequired,
    setActiveStyle: PropTypes.func.isRequired,
    setInactiveStyle: PropTypes.func.isRequired,
    field: ImmutablePropTypes.contains({
      options: ImmutablePropTypes.listOf(PropTypes.oneOfType([
        PropTypes.string,
        ImmutablePropTypes.contains({
          label: PropTypes.string.isRequired,
          value: PropTypes.string.isRequired,
        }),
      ])).isRequired,
    }),
  };

  static defaultProps = {
    value: [],
  };

  handleChange = (e) => {
    const { onChange } = this.props;
    const oldValue = valueToString(this.props.value).split(',').map(val => val.trim());
    const newValue = e.target.value;
    if (oldValue.includes(newValue)) {
      oldValue.splice(oldValue.indexOf(newValue), 1)
    } else {
      oldValue.push(newValue)
    }

    const parsedValue = valueToString(oldValue);
    this.setState({ value: parsedValue });
    onChange(oldValue.map(val => val.trim()).filter(v => v));
  };

  render() {
    const { field, classNameWrapper } = this.props;
    const fieldOptions = field.get('options');
    const selected = this.state.value;

    if (!fieldOptions) {
      return <div>Error rendering checkbox control for {field.get('name')}: No options</div>;
    }

    const options = [
      ...fieldOptions.map((option) => {
        if (typeof option === 'string') {
          return { label: option, value: option };
        }
        return Map.isMap(option) ? option.toJS() : option;
      }),
    ];

    return (
      <div className={classNameWrapper}>
        {
          options.map(
            (option, idx) => <label key={idx} style={{display: 'block'}}>
              <input
                type="checkbox"
                value={option.value}
                onChange={this.handleChange}
                checked={selected.includes(option.value)}
              />&nbsp; 
              {option.label}
            </label>
          )
        }
      </div>
    );
  }
}
