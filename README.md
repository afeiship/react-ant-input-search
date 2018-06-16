# react-ant-input-search
> Ant input search box optimize

## properties:
```javascript

  static propTypes = {
    className: PropTypes.string,
    onChange: PropTypes.func,
    onClear: PropTypes.func,
  };

  static defaultProps = {
    onChange: noop,
    onClear: noop
  };
  
```

## install && import:
```bash
npm install --save afeiship/react-ant-input-search --registry=https://registry.npm.taobao.org
```

```js
import ReactAntInputSearch from 'react-ant-input-search';
```

```scss
// customize your styles:
$react-ant-input-search-options:(
);

@import 'node_modules/react-ant-input-search/dist/style.scss';
```


## usage:
```jsx

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

```
