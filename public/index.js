import ReactDemokit from '@jswork/react-demokit';
import React from 'react';
import ReactDOM from 'react-dom';
import ReactAntInputSearch from '../src/main';
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
