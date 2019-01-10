import React from 'react';
import './index.css';

class Image extends React.Component{

    render(){
        return(
            <div className="image-container">
                <div>
                    <img className ="mainImage" src={this.props.image}></img>
                </div>
                <div>
                    <img className ="subImage" src={this.props.image}></img>
                    <img className ="subImage" src={this.props.image}></img>
                    <img className ="subImage" src={this.props.image}></img>
                </div>
            </div>
            
        )
    }
}

export default Image;