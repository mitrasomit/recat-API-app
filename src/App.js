import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar.js";
import Cards from "./Components/Cards.js";
import Header from "./Components/Header.js";
import S_manticCards from "./Components/SemanticCard.js";

class App extends Component {
  state = {
    appPerson: [],
  };
  async componentDidMount() {
    var data = await fetch("https://api.randomuser.me/?results=5");
    var onArray = await data.json();
    this.setState({
      appPerson: onArray.results,
    });
  }
  render() {
    return (
      <div className="app-Div">
        <Header />
        <Switch>
          <Route exact path="/" component={Navbar} />
          <Route
            path="/about"
            component={() => <S_manticCards hasProps={this.state.appPerson} />}
          />
          <Route path="/others" component={Cards} />
        </Switch>
      </div>
    );
  }
}

export default App;
