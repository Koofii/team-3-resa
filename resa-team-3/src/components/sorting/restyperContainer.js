import React from 'react';
import Restyp from './restyp';
import './restyp.css';

export default class Filter extends React.Component {
    
    
    isActive(id){
        if(this.props.currentFilter.indexOf(id) !== -1) {
            return true
        } else {
            return false
        }
    }

    toggleActive(id){
        const index = this.props.currentFilter.indexOf(id)
        
        if(index !== -1){
            if(this.props.currentFilter.length > 1){
                
                let removedItem = this.props.currentFilter.splice(index, 1)
                this.props.setFilter(this.props.currentFilter)
            } else {
                
                this.props.clearFilter()
            }
        } else {
            this.props.setFilter([...this.props.currentFilter, id])
        }
    }


    render() {
        return (
            <div className="restyp-container">           
                {this.props.types.map((type, i) => {
                    return <Restyp
                        key={i}
                        id={type.id}
                        type={type.type}
                        active={this.isActive(type.id)}
                        toggleActive={() => this.toggleActive(type.id)} />
                })}
                <div className="clearFilter" onClick={this.props.clearFilter}>Clear Filters</div>
            </div>
        )
    }

}