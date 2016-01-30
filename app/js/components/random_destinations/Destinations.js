import React from 'react';
import {RouteHandler, Link} from 'react-router';
import destinationArray from './destinationArray.js'
import request from 'superagent';

const Destinations = React.createClass({

  getInitialState() {
    return {

      origin: localStorage.getItem("city"),
      departureDate: localStorage.getItem("departureDate"),
      returnDate: localStorage.getItem("arrivalDate"),
      destination: ''
    }
  },

  newRandDest() {
    // Check to make sure that the destination not the origin
    this.setState({
      destination: destinationArray[Math.floor(Math.random() * destinationArray.length - 1)]
    });
  },

  getFlightInfo() {
    request.get('http://terminal2.expedia.com/x/mflights/search')
    .query({departureAirport: "SEA"})
    .query({arrivalAirport: 'ATL'})
    .query({departureDate: '2016-2-1'})
    .query({apikey: 'ESpXK3DA92kgATR3C1XizKvruPJ2GYbu'})
    .end(function(err, res) {
      let resObj = JSON.parse(res.text);
      console.log(resObj.offers[0]);
      // console.log(resObj.offers[0].baseFare);
      // this.setState({
      //   firstListed: resObj.offers[0]
      // })
      // for (let index in resObj.offers) { console.log(res.text[index])};
    })
  },

  componentDidMount() {
    this.newRandDest();
    this.getFlightInfo();
    // this.getFlightInfo();
  },


  render() {
    return (
      <div>
        <h3>Origin: {this.state.origin}</h3>
        <h3>Departure Date: {this.state.departureDate}</h3>
        <h3>Return Date: {this.state.returnDate}</h3>
        <h2>Random destination: {this.state.origin}</h2>
        <button onClick={this.newRandDest,this.getFlightInfo,this.getGoogleImage}>New Destination</button>
        <p>
          First option: <br/>
          {this.state.firstListed}
        </p>
      </div>
    )
  }
});

export default Destinations;
