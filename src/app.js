import React from "react";
import "./app.css";
import HomePage from "./pages/HomePage/homepage";
import { Switch, Route } from "react-router-dom";
import ShopPage from "./pages/shop/shop";
import Header from "./component/header/header";

const HatsPage = () => (
  <div>
    <h1> Hi</h1>
  </div>
);
class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
