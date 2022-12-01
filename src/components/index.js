import noop from '@jswork/noop';
import { Input } from 'antd';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

const CLASS_NAME = 'react-ant-input-search';

/**
 * @fix:
 * 当用户 clear 的时候onSearch 会先于 onChange 触发, 导致搜索框 onChange值显示为上一次的值
 *
 * @enhance:
 * onSeach/onChange 事件对象统一为 { target: { value: 'xxx'} }
 */

export default class ReactAntInputSearch extends Component {
  static displayName = CLASS_NAME;
  static version = '__VERSION__';
  static propTypes = {
    /**
     * The extended className for component.
     */
    className: PropTypes.string,
    /**
     * The search handler.
     */
    onSearch: PropTypes.func
  };

  static defaultProps = {
    onSearch: noop
  };

  handleSearch = (inEvent) => {
    const { onSearch } = this.props;
    const target = { value: inEvent };
    const timer = setTimeout(() => {
      onSearch({ target });
      clearTimeout(timer);
    }, 10);
  };

  render() {
    const { className, onSearch, ...props } = this.props;
    return (
      <Input.Search
        data-component={CLASS_NAME}
        className={classNames(CLASS_NAME, className)}
        onSearch={this.handleSearch}
        {...props}
      />
    );
  }
}
