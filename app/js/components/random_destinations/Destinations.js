import React from 'react';
import {RouteHandler, Link} from 'react-router';
import destinationArray from './destinationArray.js'
import request from 'superagent';

const Destinations = React.createClass({

  getInitialState() {
    return {
      // point of origin
      poi: 'SEA',
      departureDate: '',
      returnDate: '',
      firstListed: ''
    }
  },

  newRandDest() {
    // Check to make sure that the destination not the origin
    this.setState({
      poi: destinationArray[Math.floor(Math.random() * destinationArray.length - 1)]
    });
  },

  getFlightInfo() {
    request.get('http://terminal2.expedia.com/x/mflights/search')
    .query({departureAirport: this.state.poi})
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
        <h1>This the Destinations Section</h1>
        <h2>Random destination: {this.state.poi}</h2>
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
