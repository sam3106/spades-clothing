import React from "react";
import "./app.css";
import HomePage from "./pages/HomePage/homepage";
import { Switch, Route } from "react-router-dom";

const HatsPage = () => (
  <div>
    <h1> Hi</h1>
  </div>
);
class App extends React.Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route  path="/hats" component={HatsPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
