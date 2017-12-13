import React, { Component } from 'react';
import {MainNav} from '../components/MainNav';
import Lunches from '../components/lunches';

class App extends Component {

  componentDidMount(){
    // axios
    //   .get("https://mattwojas.com/lunchappServer/Get/index.php?id=92")
    //   .then((res) => {
    //     console.log('response',res);
    //     lunches += res.data;
    //   })
    console.log('component mounted', this.props);
  }

  render() {

    // const lunches = [
    //   {
    //       name: 'lunch 1',
    //       rating: 5,            
    //   },
    //   {
    //       name: 'lunch 2',
    //       rating: 4,            
    //   }
    // ];


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
