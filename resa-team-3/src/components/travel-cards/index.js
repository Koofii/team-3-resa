import React, { Component } from 'react';
import Card from './card';
import Restyp from '../sorting/restyp';
import { DatePicker } from '../datePicker/datePicker';
import './sorting.css'
import TravelInfo from '../travelInfo';
import Filter from '../sorting/restyperContainer';
import _ from 'lodash';


export class TravelCards extends Component {

    constructor(props) {
        super(props);
        
        this.state = {
            destinations: [],
            currentDestinations: [], //on component-update, update sorted destinations here
            currentFilter: [],
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

    changeDestinations(newCurrentDestinations) {
        this.setState({ currentDestinations: newCurrentDestinations })
    }
    
    showItem(travelpoint){
        this.setState({ item: travelpoint, showItem: true })
    }
 
    changeView(){
        this.setState({item: {}, showItem: false})
    }


    // ----------- sorting and filtering:

    handleClearFilter(){
        this.setState({
            currentFilter: [],
            currentDestinations: this.state.destinations
        })
    }

    setFilter(updatedFilter) {
        const destinations = this.filterDestinations(updatedFilter)
        this.setState({
            currentFilter: updatedFilter,
            currentDestinations: destinations
        })
    }

    getCurrentTravelTypes(currentFilter){
        return this.state.travelTypes.filter(travelType => {
             let index = currentFilter.indexOf(travelType.id)
             return index !== -1
         })
     }

    getCurrentDestinationIds(travelTypes) {
       return travelTypes.map(type => type.places)
       .reduce((acc, curr) => {           
            return _.intersection(acc, curr)
       }, travelTypes[0].places)
    }

    getCurrentDestinations(destinationIds) {
        
        return this.state.destinations.filter(destination => {
            
            let index = destinationIds.indexOf(destination.id)
            return index !== -1
        })
    }

    filterDestinations(filter) {
        const travelTypes = this.getCurrentTravelTypes(filter)
        
        const destinationIds = this.getCurrentDestinationIds(travelTypes)
        const destinations = this.getCurrentDestinations(destinationIds)
        
        return destinations
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
                            <Filter 
                            types={this.state.travelTypes} 
                            currentFilter={this.state.currentFilter}
                            setFilter={this.setFilter.bind(this)}
                            clearFilter={this.handleClearFilter.bind(this)}
                            />
                        </div>
                    </div>
                    <div className="cards-container">
                        {this.state.currentDestinations.length < 1 ? <p>No hits, try different search criterias</p> : ""}
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