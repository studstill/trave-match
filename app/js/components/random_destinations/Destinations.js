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
      destination: '',
      originAirport: "",
      destinationAirport: "",
      price: "loading price..."
    }
  },

  componentDidMount(){
    let destinationAirport = destinationArray[Math.floor(Math.random() * destinationArray.length - 1)];
    let origin = this.state.origin;
    let departDate = this.state.departureDate;
    let retDate = this.state.returnDate;
    let price = this.state.price;
    let component = this;
    console.log(departDate);
    request.get("http://terminal2.expedia.com/x/suggestions/flights?")
      .query({query: origin})
      .query({apikey: 'SuINAWM3vE20Wu3VIA34vOo4vwaAbAob'})
      .end(function(err, res){
        let resOrigin = res.body.sr[0].f.split(',').splice(0,2).join(", ");
        request.get('http://terminal2.expedia.com/x/mflights/search')
        .query({departureAirport: res.body.sr[0].a})
        .query({arrivalAirport: destinationAirport})
        .query({departureDate: departDate})
        .query({returnDate: retDate})
        .query({apikey: 'ESpXK3DA92kgATR3C1XizKvruPJ2GYbu'})
        .end(function(err, res) {
          let resObj = JSON.parse(res.text);
          console.log(resObj);
          console.log(resObj.offers[0]);
          component.setState({
            destinationAirport: destinationAirport,
            price: resObj.offers[0].baseFare,
            origin: resOrigin
          });
        })
      });
  },


  render() {
    return (
      <div>
        <h3>Origin: {this.state.origin}</h3>
        <h3>Departure Date: {this.state.departureDate}</h3>
        <h3>Return Date: {this.state.returnDate}</h3>
        <h3>Destination: {this.state.destinationAirport}</h3>
        <h3>Price: {this.state.price}</h3>
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
