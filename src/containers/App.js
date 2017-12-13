import React, { Component } from 'react';
import {MainNav} from '../components/MainNav';
import Lunches from '../components/lunches';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header"><i className="fas fa-utensils App-logo"></i></div>
        <MainNav/>
        <div className="lunchCont">
          <Lunches/>
        </div>

      </div>
    );
  }
}

export default App;
