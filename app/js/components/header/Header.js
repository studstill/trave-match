import React from 'react';
import {render} from 'react-dom';
import {Router, Route, RouteHandler, Link, DefaultRoute, NotFoundRoute} from 'react-router';

// Header component

const Header = React.createClass({
  render() {
    return (
      <nav className="navbar nav-tabs">
        <a className="navbar-brand" href="#">
        Travel>Match> powered by
        <img className="img-responsive expediaLogo" alt="Brand" src="/app/images/logo.svg"></img>
        </a>
        <Link to={'/origin_input'}  className="btn btn-default navbar-btn">Home</Link>
      </nav>
    );
  }
});

export default Header;
