import React, { Component } from 'react';
import {TravelCards} from "./components/travel-cards";
import Footer from './components/footer';
import Header from './components/header';


class App extends Component {
  render() {
    return (
      <div className="App">
        
          <Header/>
          <TravelCards/>  
          <Footer />           
      </div>
    );
  }
}

export default App;
