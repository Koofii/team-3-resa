import React from 'react';
import './card.css';

export default ({data}) => {
    
    return (
        <div key={data.i} className='card-body'>
        
            <h4 className="card-title">{data.destination.city}, {data.destination.country}</h4>
            <img className="card-img" src={data.destination.image} alt={data.destination.city}  />
            <div className="btn-container">
                <div className="book-btn-box" onClick={()=> alert("Bokat! Trevlig resa")}>
                    <a href="#" className="book-btn">Boka</a>
                </div>
                <div className="read-more-btn-box">
                    <a href="#" className="read-more-btn">Läs mer</a>
                </div>
            </div>
        </div>
    )
}