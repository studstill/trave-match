import React from 'react';
import {RouteHandler, Link} from 'react-router';
import destinationArray from './destinationArray.js'
import request from 'superagent';
import ThingsToDo from './ThingsToDo.js'

const Destinations = React.createClass({

  getInitialState() {
    return {
      origin: localStorage.getItem("city"),
      originAirport: "",
      destination: '',
      destinationAirport: "",
      destinationImgUrl: '',
      destinationImgAlt: '',
      destinationInfo: '',
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
      let destinationObj = destinationArray[Math.floor(Math.random() * destinationArray.length - 1)];
      console.log('random destination airport: ' + destinationObj["airportCode"]);
      this.setState({
        destinationAirport: destinationObj["airportCode"],
        destination: destinationObj["cityName"],
        destinationImgUrl: destinationObj["imgUrl"],
        destinationImgAlt: destinationObj["imgDescription"],
        destinationInfo: destinationObj["cityDescription"]
      });
  },

  clarifySearchQuery(callback) {
      request.get('/api/suggestions_and_resolutions/' + this.state.origin)
        .end(function(err, res){
          console.log('the origin airport is ' + JSON.parse(res.text).a);
          console.log('the origin is ' + JSON.parse(res.text).f.split(',').splice(0,2).join(", "));
          this.setState({
            originAirport: JSON.parse(res.text).a,
            origin: JSON.parse(res.text).f.split(',').splice(0,2).join(", ")
          });
        }.bind(this));
  },

  fetchFlightInfo() {
      request.get(`/api/flight_search/departureAirport=${this.state.originAirport}&arrivalAirport=${this.state.destinationAirport}&departureDate=${this.state.departureDate}&returnDate=${this.state.returnDate}`)
        .end(function(err, res) {
          console.log('got fetchFlightInfo');
          if (res) {
            console.log(res);
            let resObj = JSON.parse(res.text);
            console.log(resObj);
            // If there is no available flight given the input, the compenent
            // is re-rendered to search for new options
            if (!resObj.offers || !resObj.offers[0] || !resObj.offers[0].totalFare) {
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
  },

  resetFlightPrice() {
      this.setState({
        price: 'Loading price...'
      });
  },

  searchNewDestination() {
    window.setTimeout(this.resetFlightPrice(), 0);
    window.setTimeout(this.getRandomDestination(), 0);
    window.setTimeout(this.getRandomDestination(), 0);
    window.setTimeout(this.clarifySearchQuery(), 0);
    window.setTimeout(this.formatSearchQueriesForWeb(), 0);
    window.setTimeout(this.fetchFlightInfo, 100);
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
    window.setTimeout(this.resetFlightPrice(), 0);
    window.setTimeout(this.getRandomDestination(), 0);
    window.setTimeout(this.getRandomDestination(), 0);
    window.setTimeout(this.clarifySearchQuery(), 0);
    window.setTimeout(this.formatSearchQueriesForWeb(), 0);
    window.setTimeout(this.fetchFlightInfo, 100);
  },

  componentDidMount(){
    // this.searchNewDestination();
  },

  render() {
    let webLink = `https://www.expedia.com/Flights-Search?mode=search&leg1=from:${this.state.origin},to:${this.state.destinationAirport},departure:${this.state.webFormatedDepartureDate}TANYT&trip=roundtrip&leg2=from:${this.state.destinationAirport},to:${this.state.originAirport},departure:${this.state.webFormatedReturnDate}TANYT&passengers=children:0,adults:1,infantinlap:Y&options=cabinclass:economy&origref=www.expedia.com%2FFlight-Search-All`;

    return (
      <div>
        <h3>Destination: {this.state.destination}</h3>
        <img src={this.state.destinationImgUrl} alt={this.state.destinationImgAlt} className="cityImage"/>
        <section className="cityInfo">
          <p>{this.state.destinationInfo}</p>
        </section>
        <h4>Cheapest Flight: {this.state.price}</h4>
        <h5>Origin: {this.state.origin}</h5>
        <h5>Departure Date: {this.state.departureDate}</h5>
        <h5>Return Date: {this.state.returnDate}</h5>
        <button onClick={this.searchNewDestination} className="btn btn-default glyphicon glyphicon-remove"></button>
        <a href={this.state.detailsUrl} target="_blank" ><button className="btn btn-default">Book Now</button></a>
        <ThingsToDo location={this.state.destination}
                    departureDate={this.state.departureDate}
                    returnDate={this.state.returnDate}
                    />
      </div>
    )
  }
});

export default Destinations;
