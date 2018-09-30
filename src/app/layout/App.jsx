import React, { Component } from "react";
import { Button } from 'semantic-ui-react';
import EventDashboard from '../../features/event/EventDashboard/EventDashboard'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Re-maker</h1>
        <p>A react app for makers.</p>
        <button className="ui icon button">
        <i className="smile icon"></i>
        CSS Button
        </button>
        <Button icon="smile" content="React Button"/>
        <EventDashboard/>
      </div>
    );
  }
}
export default App;
