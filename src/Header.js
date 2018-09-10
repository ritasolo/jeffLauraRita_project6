import React, { Component } from 'react';
import firebase from './firebase';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import SavedList from './SavedList';

const provider = new firebase.auth.GoogleAuthProvider();
const auth = firebase.auth();


class Header extends Component {
  constructor() {
    super();
    this.state = {
      user: null,
    }
  }
  componentDidMount() {
    auth.onAuthStateChanged((user) => {
      if (user) {
        this.setState({
          user
        }, () => {
          this.dbref = firebase.database().ref(this.state.user.uid)
        })
      }
    });
  }
  login = () => {
    auth.signInWithPopup(provider).then((res) => {
      console.log(res)
      this.setState({
        user: res.user
      })
      this.props.appstate(this.state.user)
    })
  }
  logout = () => {
    auth.signOut().then(() => {
      this.setState({
        user: null
      })
      this.props.appstate(this.state.user)
    })
  }
render(){
  return(
    <div className="headerSection clearfix">
            <header>
              <h1>PLONK</h1>
            {this.state.user
              ?
              <div>
                <Link to="/">
                  <button onClick={this.logout}>Logout</button>
                </Link>
                <Link to={`/user/${this.state.user.uid}`}>
                  <button>Favourites</button>
                </Link>
              </div>
              : 
              <div>
                <button onClick={this.login}>Login</button>
              </div>
            }
            </header>
    <section className="hero">
    <div className="heroScreen">
    <div className="heroContent">
    <h2 className="heroHeading">Lorem ipsum dolor sit amet, consectetur adipiscing.</h2>
    <p className="heroCopy">Fusce vitae interdum metus iaculis ligula. Quisque eu feugiat dolor.</p>
    <button className="btn">Find Plonk</button>
    </div>
    </div>
    </section>
    </div>
  )
}

}

export default Header