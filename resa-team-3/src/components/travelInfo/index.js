import React from 'react';
import './index.css'

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
                    <button className="btn-gb" onClick={() => this.props.changeView()}>Go Back!</button>
                </div>
            </div>
        )
    }
}


export default TravelInfo;