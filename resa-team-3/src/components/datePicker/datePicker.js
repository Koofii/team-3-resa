import React from 'react';
import Calendar from 'react-calendar';
import Card from '../travel-cards/card';
import './datePicker.css'

export class DatePicker extends React.Component{

   constructor(props){
    super(props);
    this.state = {
        date: new Date(),
      };
    }

      componentDidUpdate(){
        console.log(this.state)
      }

      showTrips(){

       let selectedStartDate = this.state.date[0].getTime()/1000;
       let selectedEndDate = this.state.date[1].getTime()/1000;
       let destinations = this.props.currentDestinations;
       console.log(destinations);
       let availableDestinations = [];

        destinations.map((destination) => {
        let destinationStartdate = new Date(destination.startDate).getTime()/1000;
        let destinationEndDate = new Date(destination.endDate).getTime()/1000;
        if(selectedStartDate+86400 >= destinationStartdate && selectedEndDate < destinationEndDate+86400){
            availableDestinations.push(destination); 
        };
      });
      this.props.changeDestinations(availableDestinations);
    }

      onChange = date => this.setState({ date })
      render() {
        return (
          <div>
            <h2>Pick a date for your holiday</h2>

            <Calendar
              onChange={this.onChange}
              value={this.state.date}
              selectRange={true}
            />

           <button onClick={this.showTrips.bind(this)}>Search</button>
          </div>
        );
      }
}

export default DatePicker;