import noop from '@feizheng/noop';
import { Input } from 'antd';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

const CLASS_NAME = 'react-ant-input-search';

export default class ReactAntInputSearch extends Component {
  static displayName = CLASS_NAME;
  static version = '__VERSION__';
  static propTypes = {
    /**
     * The extended className for component.
     */
    className: PropTypes.string,
    /**
     * The change handler.
     */
    onChange: PropTypes.func
  };

  static defaultProps = {
    onChange: noop
  };

  handleChange = (inAction, inEvent) => {
    const { onChange } = this.props;
    const { value } =
      inAction === 'search' ? { value: inEvent } : inEvent.target;
    const target = { action: inAction, value };
    onChange({ target });
  };

  render() {
    const { className, onChange, ...props } = this.props;
    return (
      <Input.Search
        data-component={CLASS_NAME}
        className={classNames(CLASS_NAME, className)}
        onPressEnter={this.handleChange.bind(this, 'enter')}
        onChange={this.handleChange.bind(this, 'change')}
        onSearch={this.handleChange.bind(this, 'search')}
        {...props}
      />
    );
  }
}
