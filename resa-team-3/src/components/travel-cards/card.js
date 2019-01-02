import React from 'react';
import './card.css';

export default class Card extends React.Component {
    constructor(props){
        super(props)
    }

    handleBooking() {
        alert(`Resa till ${this.props.data.destination.city} bokat! Trevlig resa`)
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
                        <a href="#" className="read-more-btn">Läs mer</a>
                    </div>
                </div>
            </div>
        )
    }
}