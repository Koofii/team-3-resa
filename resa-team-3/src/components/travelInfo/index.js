import React from 'react';
import './index.css'
import Information from './information';
import Image from './image';
import Ratings from './rating';
import SimilarDestinations from './similar-destinations';

class TravelInfo extends React.Component {

    constructor(props){
        super(props);
    }

    render(){
        const { item } = this.props;

        // i return nedan använder ni item för att skicka ned till era komponenter. Så ingen mer logik i denna komponent om ni verkligen inte behöver
        
        return(
            <div>
                <div>
                    <div className="btn-container-dos">
                    <button className="btn-gb" onClick={() => this.props.changeView()}>Go Back!</button>
                    <button className="btn-gb" onClick={() => alert('Bokat och klart, treflig resa!')}>Boka nu</button>

                    </div>
                    <div className="information-container">
                        <Image image = {item.image} /> 
                        <Information text = {item.information} />
                    </div>
                    <h3 className="similarDestinationsTitle">Liknande resmål:</h3>
                    <div className="similarDestinations">
                        <SimilarDestinations destination={item} showItem={this.props.showItem} getSimilarDestinations={this.props.getSimilarDestinations} />
                    </div>
                    <Ratings id={item.id}/>
                </div>
            </div>
        )
    }
}


export default TravelInfo;