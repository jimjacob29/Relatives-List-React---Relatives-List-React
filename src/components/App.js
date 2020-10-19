import React, { Component, useState } from "react";
import "../styles/App.css";

class App extends Component {
  render() {
    let relative = ["ab", "bc", "cd", "de"];
    return (
      <>
        <ol key="relativeList">
          {relative.map((relative, index) => (
            <li key={`relativeListItem ${index}`}>{relative}</li>
          ))}
        </ol>
      </>
    );
  }
}

export default App;
