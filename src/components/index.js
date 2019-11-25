import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import noop from '@feizheng/noop';
import objectAssign from 'object-assign';
import { Input } from 'antd';

const CLASS_NAME = 'react-ant-input-search';

export default class extends Component {
  static displayName = CLASS_NAME;
  static propTypes = {
    className: PropTypes.string,
    onChange: PropTypes.func,
    onClear: PropTypes.func
  };

  static defaultProps = {
    onChange: noop,
    onClear: noop
  };

  onChange = (inEvent) => {
    const { onChange, onClear } = this.props;
    const { value } = inEvent.target;
    onChange(inEvent);
    !value && onClear(inEvent);
  };

  render() {
    const { className, onChange, onClear, ...props } = this.props;
    return (
      <Input.Search
        data-component={CLASS_NAME}
        className={classNames(CLASS_NAME, className)}
        type="search"
        onChange={this.onChange}
        {...props}
      />
    );
  }
}
