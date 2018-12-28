import React from 'react';

class Restyp extends React.Component{
    handleTypes(){
        const {currentDestinations} = this.props;
        console.log(this.props.restyp);
    }
    render(){
        const {restyp} = this.props 
        console.log(restyp)
        return(
            <div onClick= {this.handleTypes.bind(this)}>{restyp.type}</div>
        )
    }
}

export default Restyp;