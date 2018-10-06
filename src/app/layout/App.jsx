import React, { Component } from "react";
import { Button } from 'semantic-ui-react';
import EventDashboard from '../../features/event/EventDashboard/EventDashboard'
import HeaderTest from "../../features/event/EventDashboard/HeaderTest"

class App extends Component {
  render() {
    return <div className="App">
        <h1>Re-maker</h1>
        <p>A react app for makers.</p>
      <button class="ui primary button">
        Save
      </button>
      <button class="ui button">
        Discard
      </button>
        <HeaderTest />
        <button className="ui button">Semantic UI button test</button>
        <button className="ui icon button">
          <i className="smile icon" />
          CSS Button
        </button>
        <Button icon="smile" content="React Button" />        
        <EventDashboard />
      </div>;
  }
}
export default App;
