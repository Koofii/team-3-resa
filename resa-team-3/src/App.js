import React, { Component } from 'react';
import {TravelCards} from "./components/travel-cards";
import Footer from './components/footer';
import Header from './components/header';
import DatePicker from './components/datePicker/datePicker';


class App extends Component {
  render() {
    return (
      <div className="App">
        
          <Header/>
          <DatePicker/>
          <TravelCards/>  
          <Footer />
               
      </div>
    );
  }
}

export default App;
