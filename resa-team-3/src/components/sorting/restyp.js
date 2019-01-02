import React from 'react';
import './restyp.css';

class Restyp extends React.Component{
    handleTypes(){
        const {currentDestinations, restyp} = this.props;
        let newDestinations = [];
        newDestinations = restyp.places.map(place =>{
            let newArray = currentDestinations.filter(destination => destination.id === place)
            return newArray[0];
        });
        this.props.changeDestinations(newDestinations);
    }
    render(){
        const {restyp} = this.props 
        return(
            <div className ="restyper" onClick= {this.handleTypes.bind(this)}>{restyp.type}</div>
        )
    }
}

export default Restyp;