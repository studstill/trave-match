import React from 'react';
import request from 'superagent';

const Card = React.createClass({
  render: function(){
    return (
      <div className="row">
        <img className="col-md-3" src={this.props.url} width="100" />
        <h6 className="col-md-6">{this.props.title}</h6>
        <h6 className="col-md-3">from: {this.props.fromPrice}</h6>
      </div>
    )
  }
});

const ThingsToDo = React.createClass({

  getInitialState() {
    return ({todos: []})
  },

  componentDidMount(){
    let component = this;
    console.log(this.props.location);
    request.get("http://terminal2.expedia.com:80/x/activities/search?")
      .query({location: this.props.location})
      .query({startDate: this.props.departureDate})
      .query({endDate: this.props.returnDate})
      .query({apikey: 'SuINAWM3vE20Wu3VIA34vOo4vwaAbAob'})
      .end(function(err, res){
        console.log("hello");
        console.log(res);
        component.setState({
           todos: res.body.activities
        });
    });
  },

  render() {
    var cards = this.state.todos.map(function(todo){
       return (<Card title={todo.title} url={todo.imageUrl} fromPrice={todo.fromPrice} />);
    });
    return (
       <div>
        {cards}
       </div>
    );
  }
});

export default ThingsToDo;
