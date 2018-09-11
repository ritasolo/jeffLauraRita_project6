import React, { Component } from "react";
import firebase from "./firebase";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import SavedList from "./SavedList";
import Nav from "./Nav";

const provider = new firebase.auth.GoogleAuthProvider();
const auth = firebase.auth();

class Header extends Component {
  constructor() {
    super();
    this.state = {
      user: null
    };
  }
  componentDidMount() {
    auth.onAuthStateChanged(user => {
      if (user) {
        this.setState(
          {
            user
          },
          () => {
            this.dbref = firebase.database().ref(this.state.user.uid);
          }
        );
      }
    });
  }
  login = () => {
    auth.signInWithPopup(provider).then(res => {
      console.log(res);
      this.setState({
        user: res.user
      });
      this.props.appstate(this.state.user);
    });
  };
  logout = () => {
    auth.signOut().then(() => {
      this.setState({
        user: null
      });
      this.props.appstate(this.state.user);
    });
  };
  render() {
    return <div className="headerSection clearfix">
        <Nav user={this.state.user} login={this.login} logout={this.logout} />
        <section className="hero">
          <div className="heroScreen">
            <div className="wrapper">
              <div className="heroContent">
                <h2 className="heroHeading">
                  Lorem ipsum dolor sit amet, lorem noluisse.{" "}
                </h2>
                <p className="heroCopy">
                  Find your next bottle for under $22
                </p>
                <button className="btn">Find Plonk</button>
              </div>
            </div>
          </div>
        </section>
      </div>;
  }
}

export default Header;
