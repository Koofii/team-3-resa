import React from 'react';
import '../travel-cards/card.css';

class SimilarDestinations extends React.Component {
    constructor(props){
        super(props);

        this.showTravelInfo = this.showTravelInfo.bind(this);
    }

    renderSimilarDestinations(typeId){
        
        const destinations = this.props.getSimilarDestinations(typeId)
        return  destinations;

    }

    showTravelInfo(e, destination){
        e.preventDefault();
        this.props.showItem(destination)
    }
    
    render() {
        
       const destinations = this.renderSimilarDestinations(this.props.destination)
       return destinations.map(destination => {
        return (
            <div>
                <div key={destination.id} className='card-body'>
                    <a onClick={(e)=>this.showTravelInfo(e, destination)} href="#">
                        <h4 className="card-title">{destination.city}, {destination.country}</h4>
                        <img className="card-img" src={destination.image} alt={destination.city}  />
                        
                    </a>
                </div>
            </div>
        )
    })
    }
}

export default SimilarDestinations;