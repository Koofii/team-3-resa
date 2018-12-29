import React from 'react';
import Calendar from 'react-calendar';
import Card from '../travel-cards/card';

export class DatePicker extends React.Component{

   constructor(props){
    super(props);
    this.state = {
        date: new Date(),
        destinations: [],
        availableDestinations: []
      };
    }
     
      componentDidMount() {
        fetch('http://localhost:3001/getalldestinations')
        .then(res => res.json())
        .then(data => this.setState({
            destinations: data.whereTo,
        }))
      };

      componentDidUpdate(){
        console.log(this.state)
      }

      showTrips(){

       let selectedStartDate = this.state.date[0].getTime()/1000;
       let selectedEndDate = this.state.date[1].getTime()/1000;
       let destinations = this.state.destinations;
       let availableDestinations = [];

        destinations.map((destination) => {
        let destinationStartdate = new Date(destination.startDate).getTime()/1000;
        let destinationEndDate = new Date(destination.endDate).getTime()/1000;
        if(selectedStartDate+86400 >= destinationStartdate && selectedEndDate < destinationEndDate+86400){
            availableDestinations.push(destination);
            this.setState({availableDestinations:availableDestinations})
        };
      });
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
          
           <div className="cards-container">
                {this.state.availableDestinations.map((destination, i) => {
                  return <Card key={i} data={{destination, i}}/>
                })}
            </div>
          </div>
        );
      }
}

export default DatePicker;