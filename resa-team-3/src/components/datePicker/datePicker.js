import React from 'react';
import Calendar from 'react-calendar';
import './datePicker.css'

export class DatePicker extends React.Component{

   constructor(props){
    super(props);
    this.state = {
        date: new Date(),
      };
    }

      showTrips(){
       if(this.state.date[0] !==  undefined){
     
       let  selectedStartDate = this.state.date[0].getTime()/1000;
       let selectedEndDate = this.state.date[1].getTime()/1000;
       let destinations = this.props.currentDestinations;
       let availableDestinations = [];

        destinations.forEach(destination => {
        let destinationStartdate = new Date(destination.startDate).getTime()/1000;
        let destinationEndDate = new Date(destination.endDate).getTime()/1000;
        if(selectedStartDate+86400 >= destinationStartdate && selectedEndDate < destinationEndDate+86400){
            availableDestinations.push(destination); 
        };
        });
        this.props.changeDestinations(availableDestinations);
    }

    else {
      alert('You need to pick a start and end date for your holiday')
    }
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