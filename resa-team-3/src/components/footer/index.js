import React from 'react';
import './index.css'
class Footer extends React.Component {
    constructor(props){
        super(props);
        this.state = {};

    }

   

    render(){
        return(
            <footer className="footer">
                <div className="flex-items">
                    <h3>Contanct us</h3>
                    <p>Telephone: 0123123-12312321</p>
                    <p>Fax: 0123123-12312321</p>
                    <p>Email: helpyourself@wewontdoanything.fu</p>
                </div>
                <div className="flex-items">
                    <h3>Need help?</h3>
                    <p>Check out our <span className="underline-faq">FAQ</span></p>
                </div>
                <div className="flex-items">
                    <h3>About us</h3>
                    <p>Staff</p>
                    <p>History</p>
                </div>
            </footer>
        )
    }
}

export default Footer;