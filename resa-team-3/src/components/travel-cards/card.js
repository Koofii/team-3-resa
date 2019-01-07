import React from 'react';
import './card.css';

export default class Card extends React.Component {
    constructor(props){
        super(props);

        this.showTravelInfo = this.showTravelInfo.bind(this);
    }

    handleBooking() {
        alert(`Resa till ${this.props.data.destination.city} bokat! Trevlig resa`)
    }

    showTravelInfo(e){
        e.preventDefault();
        this.props.showItem(this.props.data.destination)
    }
    
    render() {
        let destination = this.props.data.destination;

        return (
            <div key={this.props.data.i} className='card-body'>
            
                <h4 className="card-title">{destination.city}, {destination.country}</h4>
                <img className="card-img" src={destination.image} alt={destination.city}  />
                <div className="btn-container">
                    <div className="book-btn-box" onClick={this.handleBooking.bind(this)}>
                        <a href="#" className="book-btn">Boka</a>
                    </div>
                    <div className="read-more-btn-box">
                        <a onClick={this.showTravelInfo} href="#" className="read-more-btn">Läs mer</a>
                    </div>
                </div>
            </div>
        )
    }
}