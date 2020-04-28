import React, { Component } from "react";
import Cards from "./Cards.js";
import SemanticCard from "./SemanticCard.js";

export default class Navbar extends Component {
  state = {
    loading: true,
    person: [],
  };
  async componentDidMount() {
    var data = await fetch("https://api.randomuser.me/?results=5");
    var onArray = await data.json();
    this.setState({
      person: onArray.results,
      loading: false,
    });
    console.log(onArray);
  }
  render() {
    if (this.state.loading) {
      return <div>loading....</div>;
    }
    if (!this.state.person.length) {
      return <div>contact not found</div>;
    }
    return (
      <div id="row">
        {/* <div>
                <h3>******</h3>
                <div><img src={this.state.person.picture.large}></img></div>
                <div><h2>{this.state.person.name.first}<span>_</span>{this.state.person.name.last}</h2></div>
                <div>{this.state.person.email}</div><div>{this.state.person.cell}</div>
                </div> */}

        {/* <SemanticCard apis={this.state.person}/> */}

        {/* <Cards /> */}
        {/* <h3>******</h3>
                    <div><img src={perInfo.picture.large}></img></div>
                    <div><h2>{perInfo.name.first}<span>_</span>{perInfo.name.last}</h2></div>
                    <div>{perInfo.email}</div><div>{perInfo.cell}</div> */}
        <span>
          <i class="fas fa-bars"></i>
        </span>
        {this.state.person.map((perInfo) => (
          <div className="column">
            <div className="cards">
              <h3>******</h3>
              <div className="imgDiv">
                <img src={perInfo.picture.large}></img>
              </div>
              <div>
                <h2>
                  {perInfo.name.first}
                  <span>_</span>
                  {perInfo.name.last}
                </h2>
              </div>
              <div>{perInfo.email}</div>
              <div>{perInfo.cell}</div>
            </div>
          </div>
        ))}
        {/* <SemanticCard apis={this.state.person} /> */}
      </div>
    );
  }
}
