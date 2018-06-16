import './dev.scss';
import ReactAntInputSearch from './main';

/*===example start===*/

// install: npm install afeiship/react-ant-input-search --save
// import : import ReactAntInputSearch from 'react-ant-input-search'

class App extends React.Component{
  state = {

  };

  constructor(props){
    super(props);
    window.demo = this;
    window.refs = this.refs;
    window.rc = this.refs.rc;
  }

  _onClear = e =>{
    const { value } = e.target;
    console.log('clear->', value);
  };

  render(){
    return (
      <div className="hello-react-ant-input-search">
        <ReactAntInputSearch style={{ marginBottom: 10}} enterButton  ref='rc' />
        <ReactAntInputSearch onClear={this._onClear} enterButton={'搜索ZZZ'} ref='rc' />
      </div>
    );
  }
}
/*===example end===*/

ReactDOM.render(
    <App />,
    document.getElementById('app')
);
