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
    })
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
render(){
  return(
    <Router>
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
                  <a href="#">Favourites</a>
                </Link>
              </div>
              : <button onClick={this.login}>Login</button>
            }
            </header>
    <section className="hero">
    <div className="heroScreen">
    <div className="wrapper">
    <div className="heroContent">
    < h2 className = "heroHeading" >Lorem ipsum dolor sit amet, lorem noluisse vel ex sed audire. </h2>
    <p className="heroCopy">Find your next bottle for under $22</p>
    <button className="btn">Find Plonk</button>
    </div>
    </div>
    </div>
    </section>
    </div>
    </Router>
  )
}

}

export default Header