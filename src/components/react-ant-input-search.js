import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import noop from 'noop';
import objectAssign from 'object-assign';
import { Input } from 'antd';
import { returnEventTarget } from 'next-return-event';

export default class extends Component {
  /*===properties start===*/
  static propTypes = {
    className: PropTypes.string,
    onChange: PropTypes.func,
    onClear: PropTypes.func,
  };

  static defaultProps = {
    onChange: noop,
    onClear: noop
  };
  /*===properties end===*/

  _onChange = (inEvent) => {
    const { onChange, onClear } = this.props;
    const { value } = inEvent.target;
    onChange(inEvent);
    !value && onClear(inEvent);
  };

  render() {
    const { className, onChange, onClear, ...props } = this.props;
    return (
      <Input.Search type="search" onChange={this._onChange} {...props} className={classNames('react-ant-input-search', className)} />
    );
  }
}
