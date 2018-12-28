import React, { Component } from 'react';
import Card from './card';


export class TravelCards extends Component {
    state = {
        destinations: [],
        currentDestinations: [] //on component-update, update sorted destinations here
    };
    
componentDidMount(){
    fetch('http://localhost:3001/getalldestinations')
    .then(res => res.json())
    .then(data => this.setState({
        destinations: data.whereTo,       // keep the original list here, unchanged
        currentDestinations: data.whereTo // when the component first loads, put all destinations here, for initial rendering
    }))
};

  render() {
      if(this.state.destinations.length > 0) {
        return (
            <div className="cards-container">
              
              {this.state.currentDestinations.map((destination, i) => {
                return <Card key={i} data={{destination, i}}/>
              })}
            </div>
          );
      } else {
          return (
              <div>Loading...</div>
          )
      }
  }
}