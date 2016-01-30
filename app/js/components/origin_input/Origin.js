import React from 'react';
import {RouteHandler, Link} from 'react-router';
import { DateRange } from 'react-date-range';


const Origin = React.createClass({
  getInitialState: function() {
    return {
      city: "Departure City",
      departureDate: '',
      arrivalDate: ''
    };
  },
  handlePointOfOrigin: function(value){
    this.setState({city: value});
  },
  handleDateRange: function(value) {
    this.setState({
      departureDate: value.startDate._d.toISOString().slice(0,10),
      arrivalDate: value.endDate._d.toISOString().slice(0,10)
    });
    console.log(value);
  },
  render: function(){
    return (
      <div>
        <Input
          city={this.state.city}
          handlePointOfOrigin={this.handlePointOfOrigin}
          handleDateRange={this.handleDateRange}
        />
        <Output
          city={this.state.city}
          departureDate={this.state.departureDate}
          arrivalDate={this.state.arrivalDate}
        />
      </div>
    );
  }
});

var Input = React.createClass({
  handlePointOfOrigin: function(event){
    this.props.handlePointOfOrigin(event.target.value);
  },
  handleDateRange: function(range){
    this.props.handleDateRange(range);
    // An object with two keys,
    // 'startDate' and 'endDate' which are Momentjs objects.
  },
  render: function(){
    return (
      <div>
        <input onChange={this.handlePointOfOrigin} placeholder='Point of Origin'></input>
        <DateRange
          calendars="1"
          onInit={this.handleDateRange}
          onChange={this.handleDateRange}
          className="container-fluid"
        />
      </div>
    )
  }
});

var Output = React.createClass({
  render: function(){
    return (
      <div className="row">
        <h1>{this.props.city}</h1>
        <div >departing</div><div >returning</div>
        <input type="text" value={(new Date(this.props.departureDate)).toString().slice(0,15)}></input>
        <input type="text" value={(new Date(this.props.arrivalDate)).toString().slice(0,15)}></input>
        <Link to={'/random_destinations'}>- Random Destinations-</Link>
      </div>
    )
  }
});

export default Origin;
