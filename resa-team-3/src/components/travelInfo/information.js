import React from 'react';


class Information extends React.Component {


    render (){
        return(
            <div className="information-text">
                <h1>Information om resmålet</h1>
                {this.props.text}
            </div>
        )
    }
}

export default Information;