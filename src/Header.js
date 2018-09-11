import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import SavedList from "./SavedList";
import Nav from "./Nav";

class Header extends Component {
  constructor() {
    super();
    this.state = {
      user: null
    };
  }
  render() {
    return (
      <div className="headerSection clearfix">
        <Nav user={this.state.user} />
        <section className="hero">
          <div className="heroScreen">
            <div className="wrapper">
              <div className="heroContent">
                <h2 className="heroHeading">
                  Lorem ipsum dolor sit amet, lorem noluisse.{" "}
                </h2>
                <p className="heroCopy">Find your next bottle for under $22</p>
                <button className="btn">Find Plonk</button>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Header;
