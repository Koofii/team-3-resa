import React, { Component } from 'react';
import './App.css';
import Footer from './components/footer';
import Header from './components/header';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Header/>
          
          <Footer />
        </header>
      </div>
    );
  }
}

export default App;
