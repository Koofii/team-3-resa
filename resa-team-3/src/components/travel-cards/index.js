import React, { Component } from 'react';
import Card from './card';
import Restyp from '../sorting/restyp';
import { DatePicker } from '../datePicker/datePicker';


export class TravelCards extends Component {

    constructor(props) {
        super(props);
        this.state = {
            destinations: [],
            currentDestinations: [], //on component-update, update sorted destinations here
            travelTypes: [],
            error: null
        };
    }

    componentDidMount() {
        fetch('http://localhost:3001/getalldestinations')
            .then(res => {
                if (res.status === 200) {
                    return res.json();
                }
                throw new Error(`Something went wrong, received status: ${res.status} and message: ${res.statusText}`);
            })
            .then(data => this.setState({
                destinations: data.whereTo,       // keep the original list here, unchanged
                currentDestinations: data.whereTo, // when the component first loads, put all destinations here, for initial rendering
                travelTypes: data.types,
            }))
            .catch(error => {

                this.setState({
                    error: error.message
                })
            })
    };

    changeDestinations(newCurrentDestinations) {
        this.setState({ currentDestinations: newCurrentDestinations })
    }

    render() {
        if (this.state.destinations.length > 0) {
            return (
                <div>
                    <DatePicker currentDestinations={this.state.currentDestinations} changeDestinations={this.changeDestinations.bind(this)}/>
                    <div className="restyp-container">
                        {this.state.travelTypes.map((type, i) => {
                            return <Restyp key={i} changeDestinations={this.changeDestinations.bind(this)} currentDestinations={this.state.destinations} restyp={type} />
                        })}
                    </div>
                    <div className="cards-container">

                        {this.state.currentDestinations.map((destination, i) => {
                            return <Card key={i} data={{ destination, i }} />
                        })}
                    </div>
                </div>
            );
        } else {
            return (
                <div className="information"> {this.state.error ? this.state.error : "Loading..."}</div>
            )
        }
    }

}