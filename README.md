# react-ant-input-search
> Ant input search box optimize.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```shell
npm install -S @feizheng/react-ant-input-search
```

## update
```shell
npm update @feizheng/react-ant-input-search
```

## event action
| name   | description                 |
| ------ | --------------------------- |
| clear  | When value change to empty. |
| search | When trigger seach action.  |
| change | When value changed.         |
| enter  | When press enter.           |

## properties
| Name      | Type   | Required | Default | Description                           |
| --------- | ------ | -------- | ------- | ------------------------------------- |
| className | string | false    | -       | The extended className for component. |
| onChange  | func   | false    | noop    | The change handler.                   |


## usage
1. import css
  ```scss
  @import "~@feizheng/react-ant-input-search/dist/style.scss";

  // customize your styles:
  $react-ant-input-search-options: ()
  ```
2. import js
  ```js
  import ReactDemokit from '@feizheng/react-demokit';
  import React from 'react';
  import ReactDOM from 'react-dom';
  import ReactAntInputSearch from '@feizheng/react-ant-input-search';
  import './assets/style.scss';

  class App extends React.Component {

    handleChange = (inEvent) => {
      const { action, value } = inEvent.target;
      console.log('value:', action, value);
    };

    render() {
      return (
        <ReactDemokit
          className="p-3 app-container"
          url="https://github.com/afeiship/react-ant-input-search">
          <ReactAntInputSearch
            allowClear
            enterButton
            className="bg-gray-800 mb-5 text-white"
            onChange={this.handleChange}
          />
        </ReactDemokit>
      );
    }
  }

  ReactDOM.render(<App />, document.getElementById('app'));

  ```

## documentation
- https://afeiship.github.io/react-ant-input-search/


## license
Code released under [the MIT license](https://github.com/afeiship/react-ant-input-search/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@feizheng/react-ant-input-search
[version-url]: https://npmjs.org/package/@feizheng/react-ant-input-search

[license-image]: https://img.shields.io/npm/l/@feizheng/react-ant-input-search
[license-url]: https://github.com/afeiship/react-ant-input-search/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@feizheng/react-ant-input-search
[size-url]: https://github.com/afeiship/react-ant-input-search/blob/master/dist/react-ant-input-search.min.js

[download-image]: https://img.shields.io/npm/dm/@feizheng/react-ant-input-search
[download-url]: https://www.npmjs.com/package/@feizheng/react-ant-input-search
