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
        <form className="form-inline">
          <div className="form-group">
          <label for="origin_input">Flying from: </label>
          <input id="origin_input" className="form-control" onChange={this.handlePointOfOrigin} placeholder='Enter Origin City'></input>
          </div>
        </form>
        <DateRange
          calendars="1"
          onInit={this.handleDateRange}
          onChange={this.handleDateRange}
          className="container-fluid"
          width="100%"
        />
      </div>
    )
  }
});

var Output = React.createClass({
  handleClick: function(){
    localStorage.setItem("city", this.props.city);
    localStorage.setItem("departureDate", this.props.departureDate);
    localStorage.setItem("arrivalDate", this.props.arrivalDate);
  },
  render: function(){
    return (
      <form className="form-horizontal">
        <div className="form-group">
          <label for="departure-date" class="col-sm-2 control-label">Departing on:</label>
          <input id="departure-date" className="form-control col-sm-2" type="text" value={(new Date(this.props.departureDate)).toString().slice(0,15)} readOnly></input>
        </div>
        <div className="form-group">
          <label for="return-date" class="col-sm-2 control-label">Returning on:</label>
          <input id="return-date" className="form-control col-sm-2" type="text" value={(new Date(this.props.arrivalDate)).toString().slice(0,15)} readOnly></input>
        </div>
        <div className="form-group">
        <button className="btn btn-default" onClick={this.handleClick}><Link to={'/random_destinations'}>Search</Link></button>
        </div>
      </form>
    )
  }
});

export default Origin;
