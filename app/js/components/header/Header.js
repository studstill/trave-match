import React from 'react';
import {render} from 'react-dom';
import {Router, Route, RouteHandler, Link, DefaultRoute, NotFoundRoute} from 'react-router';

// Header component

const Header = React.createClass({
  render() {
    return (
      <header className="nav">
        This is the Header ---
        <Link to={'/origin_input'}>- Point of Origin -</Link>
        <Link to={'/random_destinations'}>- Random Destinations-</Link>
      </header>
    );
  }
});

export default Header;
