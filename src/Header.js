import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import SavedList from "./SavedList";
import Nav from "./Nav";
import { animateScroll as scroll } from 'react-scroll'


class Header extends Component {
  constructor() {
    super();
    this.state = {
      user: null
    };
  }
  handleSetActive = (to) => {
  console.log(to);
  }
  scrollTo = () => {
  scroll.scrollTo(730);
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
<<<<<<< HEAD
                <p className="heroCopy">
                  Find your next bottle for under $22
                </p>
              {/* <Link activeClass="active" to=".formContainer" spy={true} smooth={true} offset={50} duration={500} onSetActive={this.handleSetActive}> */}
                <button onClick={this.scrollTo} className="btn">Find Plonk</button>
              {/* </Link> */}
=======
                <p className="heroCopy">Find your next bottle for under $22</p>
                <button className="btn">Find Plonk</button>
>>>>>>> 0d4c87429ca79a06688aacfa70c5ad90ec46311b
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Header;
