import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./app/layout/App";
import registerServiceWorker from "./registerServiceWorker";

import Image from "/uDemy/Build an app with React, Redux/remake/src/app/layout/Backgrounds/mavica.jpg"; // Import using relative path

const styles = {
  paperContainer: {
    backgroundImage: `url(${Image})`
  }
};

const rootEl = document.getElementById("root");

let render = () => {
  ReactDOM.render(<App />, rootEl);
};

if (module.hot) {
  module.hot.accept("./app/layout/App", () => {
    setTimeout(render);
  });
}

render();

export default class Home extends React.Component {
  render() {
    return <div style={styles.paperContainer} />;
  }
}

registerServiceWorker();
