import React, { Component } from 'react';
import './app.scss';
import 'antd/dist/antd.min.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        {this.props.children}
      </div>
    );
  }
}

export default App;
