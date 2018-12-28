import React, { Component } from 'react';
import Card from './card';
import Restyp from '../sorting/restyp';


export class TravelCards extends Component {
    constructor(props){
        super(props);
        this.state = {
            destinations: [],
            currentDestinations: [], //on component-update, update sorted destinations here
            travelTypes: []
        };
    }
    
componentDidMount(){
    fetch('http://localhost:3001/getalldestinations')
    .then(res => res.json())
    .then(data => this.setState({
        destinations: data.whereTo,       // keep the original list here, unchanged
        currentDestinations: data.whereTo, // when the component first loads, put all destinations here, for initial rendering
        travelTypes: data.types,
    }))
};

  render() {
      if(this.state.destinations.length > 0) {
        return (
            <div>
                {this.state.travelTypes.map((type, i) => {
                    return <Restyp key={i} currentDestinations ={this.state.currentDestinations} restyp = {type} />
                })}

            <div className="cards-container">
              
              {this.state.currentDestinations.map((destination, i) => {
                  return <Card key={i} data={{destination, i}}/>
                })}
            </div>
            </div>
          );
      } else {
          return (
              <div>Loading...</div>
          )
      }
  }
}