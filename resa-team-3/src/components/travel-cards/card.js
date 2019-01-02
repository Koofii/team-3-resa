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
        return (
            <div key={this.props.data.i} className='card-body'>
            
                <h4 className="card-title">{this.props.data.destination.city}, {this.props.data.destination.country}</h4>
                <img className="card-img" src={this.props.data.destination.image} alt={this.props.data.destination.city}  />
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