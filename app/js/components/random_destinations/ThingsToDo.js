import React from 'react';
import request from 'superagent';

const Card = React.createClass({
  render: function(){
    return (
      <div>
        <img src={this.props.url} width="80" />
        <h3>{this.props.title}</h3>
      </div>
    )
  }
});

const ThingsToDo = React.createClass({

  getInitialState() {
    return {todos: []};
  },

  componentDidMount(){
    let component = this;
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
       return (<Card title={todo.title} url={todo.imageUrl} />);
    });
    return (
       <div>
        {cards}
       </div>
    );
  }
});

export default ThingsToDo;
