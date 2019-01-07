import React, { Component } from 'react';
import Card from './card';
import Restyp from '../sorting/restyp';
import { DatePicker } from '../datePicker/datePicker';
import './sorting.css'
import TravelInfo from '../travelInfo';


export class TravelCards extends Component {

    constructor(props) {
        super(props);
        this.state = {
            destinations: [],
            currentDestinations: [], //on component-update, update sorted destinations here
            travelTypes: [],
            error: null,
            item: {},
            showItem: false
        };
        this.showItem = this.showItem.bind(this);
        this.changeView = this.changeView.bind(this);
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
    
    showItem(travelpoint){
        this.setState({ item: travelpoint, showItem: true })
    }

    changeDestinations(newCurrentDestinations) {
        this.setState({ currentDestinations: newCurrentDestinations })
    }

    changeView(){
        this.setState({item: {}, showItem: false})
    }

    render() {
        if(this.state.showItem){
            return ( <TravelInfo changeView={this.changeView} item={this.state.item}/> )
        }
        if (this.state.destinations.length > 0) {
            return (
                <div>
                    <div className="sorting-container">
                        <DatePicker currentDestinations={this.state.currentDestinations} changeDestinations={this.changeDestinations.bind(this)}/>
                        <div className="whatever">
                            <div className="restyp-container">
                                {this.state.travelTypes.map((type, i) => {
                                    return <Restyp key={i} changeDestinations={this.changeDestinations.bind(this)} currentDestinations={this.state.destinations} restyp={type} />
                                })}
                            </div>
                        </div>
                    </div>
                    <div className="cards-container">

                        {this.state.currentDestinations.map((destination, i) => {
                            return <Card key={i} data={{ destination, i }} showItem={this.showItem} />
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