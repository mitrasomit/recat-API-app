import React, { Component, useState } from "react";
import { Card, Icon, Image } from "semantic-ui-react";
import { render } from "@testing-library/react";

export default class SemanticCard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="jumbotron">
        {this.props.hasProps.map((data) => (
          <div className="ui card row">
            <div className="">
              <img src={data.picture.large} />
            </div>
            <div className="content">
              <div className="header">
                <h2>
                  {data.name.first}
                  <span>_</span>
                  {data.name.last}
                </h2>
              </div>
              <div className="meta">
                <span className="date">
                  @{data.location.city},{data.location.country}
                </span>
              </div>
              <div className="description">{data.cell}</div>
            </div>
            <div className="extra content">
              <a>
                <i aria-hidden="true" className="user icon"></i>
                {data.login.salt}
              </a>
            </div>
          </div>
        ))}
      </div>
    );
  }
}
