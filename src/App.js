import React, {Component} from 'react';
import './App.css';

import Customer from './Customer';

class App extends Component {
  render () {
    return (
      <div className="App">
      <header className="App-header">
        <Customer/>
      </header>
    </div>
    );
  }
}

export default App;
