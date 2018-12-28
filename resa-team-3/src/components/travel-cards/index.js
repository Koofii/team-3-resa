import React, { Component } from 'react';
import Card from './card';


export class TravelCards extends Component {
    state = {
        destinations: [],
        currentDestinations: [], //on component-update, update sorted destinations here
        error: null
    };

    componentDidMount() {
        fetch('http://localhost:3001/getalldestinations')
            .then(res => {
                if (res.status === 200) {
                    return res.json();
                }
                throw new Error(`Something went wrong, received status: ${res.status}, message: ${res.statusText}`);
            })
            .then(data => {
                this.setState({
                    destinations: data.whereTo,       // keep the original list here, unchanged
                    currentDestinations: data.whereTo // when the component first loads, put all destinations here, for initial rendering
                })
            })
            .catch(error => {

                this.setState({
                    error: error.message
                })
            })
    };

    render() {
        if (this.state.destinations.length > 0) {
            return (
                <div className="cards-container">

                    {this.state.currentDestinations.map((destination, i) => {
                        return <Card key={i} data={{ destination, i }} />
                    })}
                </div>
            );
        } else {
            return (
                <div className="information"> {this.state.error ? this.state.error : "Loading..."}</div>
            )
        }
    }
}