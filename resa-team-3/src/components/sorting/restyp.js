import React from 'react';
import './restyp.css';

class Restyp extends React.Component {


    render() {
        return (
            <div className={`restyp ${this.props.active ? "active" : ""}`} onClick={this.props.toggleActive}>{this.props.type}</div>
        )
    }
}

export default Restyp;