import React from 'react';
import {render} from 'react-dom';
import {Router, Route, RouteHandler, Link, DefaultRoute, NotFoundRoute} from 'react-router';

// Header component

const Header = React.createClass({
  render() {
    return (
      <nav className="navbar nav-tabs">
        <a className="navbar-brand" href="#">
        <img className="img-responsive" alt="Brand" src="/app/images/logo.svg"></img>
        </a>
        <Link to={'/origin_input'}  className="btn btn-default navbar-btn">Home</Link>
        <Link to={'/random_destinations'} className="btn btn-default navbar-btn">Destination</Link>
      </nav>
    );
  }
});

export default Header;
