import ReactAntInputSearch from '../src/main';
import ReactDOM from 'react-dom';
import React from 'react';
import './assets/style.scss';

class App extends React.Component {
  constructor(inProps) {
    super(inProps);
    this.state = {
      value: 'abc'
    };
  }

  onChange1 = (inEvent) => {
    console.log('change::', inEvent.target.value);
  };

  onClear1 = (inEvent) => {
    console.log('clear::', inEvent.target.value);
  };

  render() {
    return (
      <div className="app-container">
        <ReactAntInputSearch
          defaultValue={'abc'}
          onChange={this.onChange1}
          onClear={this.onClear1}
        />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
