import React from 'react';
import {RouteHandler, Link} from 'react-router';
import destinationArray from './destinationArray.js'
import request from 'superagent';

const Destinations = React.createClass({

  getInitialState() {
    return {
      origin: localStorage.getItem("city"),
      originAirport: "",
      destination: '',
      destinationAirport: "",
      departureDate: localStorage.getItem("departureDate"),
      webFormatedDepartureDate: '',
      returnDate: localStorage.getItem("arrivalDate"),
      webFormatedReturnDate: '',
      price: "loading price...",
      apiKey: 'ESpXK3DA92kgATR3C1XizKvruPJ2GYbu',
      webLink: '',
      detailsUrl: ''
    }
  },

  getRandomDestination() {
    return new Promise(() => {
      let destinationObj = destinationArray[Math.floor(Math.random() * destinationArray.length - 1)];
      this.setState({
        destinationAirport: destinationObj["airportCode"],
        destination: destinationObj["cityName"]
      });
    });
  },

  clarifySearchQuery(callback) {
    return new Promise(() => {
      request.get("http://terminal2.expedia.com/x/suggestions/flights?")
        .query({query: this.state.origin})
        .query({apikey: 'SuINAWM3vE20Wu3VIA34vOo4vwaAbAob'})
        .end(function(err, res){
          this.setState({
            originAirport: res.body.sr[0].a,
            origin: res.body.sr[0].f.split(',').splice(0,2).join(", ")
          });
        }.bind(this));
    });
  },

  fetchFlightInfo() {
    return new Promise(() => {
      console.log('this is the destination: ' + this.state.destination);
      console.log('destinationAirport: ' + this.state.destinationAirport);
      console.log('departDate: ' + this.state.departureDate);
      console.log('retDate: ' + this.state.returnDate);
      request.get('http://terminal2.expedia.com/x/mflights/search')
        .query({departureAirport: this.state.originAirport})
        .query({arrivalAirport: this.state.destinationAirport})
        .query({departureDate: this.state.departureDate})
        .query({returnDate: this.state.returnDate})
        .query({apikey: 'ESpXK3DA92kgATR3C1XizKvruPJ2GYbu'})
        .end(function(err, res) {
          if (res) {
            let resObj = JSON.parse(res.text);
            // If there is no available flight given the input, the compenent
            // is re-rendered to search for new options
            if (!resObj.offers[0] || !resObj.offers[0].totalFare) {
              this.forceUpdate();
            } else {
              // Sort and return lowest fare
              let lowestFareFirst = resObj.offers.sort((a, b) => {
                return a.totalFare - b.totalFare;
              });
              this.setState({
                price: lowestFareFirst[0].totalFare,
                detailsUrl: lowestFareFirst[0].detailsUrl
              });
            }
          } else {
            this.forceUpdate();
          }
      }.bind(this));
    });
  },

  resetFlightPrice() {
    return new Promise(() => {
      this.setState({
        price: 'Loading price...'
      });
    });
  },

  searchNewDestination() {
    this.resetFlightPrice()
      .then(this.getRandomDestination()
        .then(this.fetchFlightInfo()));
    ;
  },

  formatSearchQueriesForWeb() {
    let webFormatedDepartureDate = [];
    let tempDepartureDate = this.state.departureDate.split('-');
    webFormatedDepartureDate.push(tempDepartureDate[1]);
    webFormatedDepartureDate.push(tempDepartureDate[2]);
    webFormatedDepartureDate.push(tempDepartureDate[0]);
    webFormatedDepartureDate = webFormatedDepartureDate.join('/');

    let webFormatedReturnDate = [];
    let tempReturnDate = this.state.returnDate.split('-');
    webFormatedReturnDate.push(tempReturnDate[1]);
    webFormatedReturnDate.push(tempReturnDate[2]);
    webFormatedReturnDate.push(tempReturnDate[0]);
    webFormatedReturnDate = webFormatedReturnDate.join('/');

    let webLink = `https://www.expedia.com/Flights-Search?mode=search&leg1=from:${this.state.originAirport},to:${this.state.destinationAirport},departure:${webFormatedDepartureDate}TANYT&trip=roundtrip&leg2=from:${this.state.destinationAirport},to:${this.state.originAirport},departure:${webFormatedReturnDate}TANYT&passengers=children:0,adults:1,infantinlap:Y&options=cabinclass:economy&origref=www.expedia.com%2FFlight-Search-All`

    this.setState({
      webFormatedDepartureDate: webFormatedDepartureDate,
      webFormatedReturnDate: webFormatedReturnDate,
      webLink: webLink
    })

  },

  componentWillMount() {
    this.getRandomDestination()
      .then(this.clarifySearchQuery());
    this.formatSearchQueriesForWeb();
  },

  componentDidMount(){
    console.log('this is the destination: ' + this.state.destination);
    let origin = this.state.origin;
    let destination = this.state.destination;
    let destinationAirport = this.state.destinationAirport;
    let departDate = this.state.departureDate;
    let retDate = this.state.returnDate;
    let price = this.state.price;
    let component = this;
    console.log('destinationAirport: ' + destinationAirport);
    console.log('departDate: ' + departDate);
    console.log('retDate: ' + retDate);

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
          if (res) {
            let resObj = JSON.parse(res.text);
            console.log(resObj);
            // If there is no available flight given the input, the compenent
            // is re-rendered to search for new options
            if (!resObj.offers[0] || !resObj.offers[0].totalFare) {
              component.forceUpdate();
            } else {
              let lowestFareFirst = resObj.offers.sort((a, b) => {
                return a.totalFare - b.totalFare;
              });
              component.setState({
                destinationAirport: destinationAirport,
                destination: destination,
                price: lowestFareFirst[0].totalFare,
                origin: resOrigin,
                detailsUrl: lowestFareFirst[0].detailsUrl
              });
            }
          } else {
            component.forceUpdate();
          }
        })
      });
  },




  render() {
    let webLink = `https://www.expedia.com/Flights-Search?mode=search&leg1=from:${this.state.origin},to:${this.state.destinationAirport},departure:${this.state.webFormatedDepartureDate}TANYT&trip=roundtrip&leg2=from:${this.state.destinationAirport},to:${this.state.originAirport},departure:${this.state.webFormatedReturnDate}TANYT&passengers=children:0,adults:1,infantinlap:Y&options=cabinclass:economy&origref=www.expedia.com%2FFlight-Search-All`;

    return (
      <div>
        <h3>Origin: {this.state.origin}</h3>
        <h3>Departure Date: {this.state.departureDate}</h3>
        <h3>Return Date: {this.state.returnDate}</h3>
        <h3>Destination: {this.state.destination}</h3>
        <h3>Price: {this.state.price}</h3>
        <button onClick={this.searchNewDestination}>New Destination</button>
        <a href={this.state.detailsUrl} target="_blank">Book Now</a>

      </div>
    )
  }
});

export default Destinations;
