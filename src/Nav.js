import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Nav extends Component {
  render() {
    return (
        <div className="wrapper">
            <header>
                <h1>PLONK</h1>
                {/* authentication starts */}
                <nav>
                    <ul>
                        {this.props.user ?
                            <div className="loggedIn">
                                <li>
                                    {" "}
                                    <Link to="/">
                                        <i onClick={this.props.logout} class="fas fa-sign-out-alt"></i>
                                        <p onClick={this.props.logout}>Logout</p>
                                    </Link>{" "}
                                </li>
                                <li>
                                    <Link to={`/user/${this.props.user.uid}`}>
                                        <i class="fas fa-heart"></i>
                                        <p>My Cellar</p>
                                    </Link>{" "}
                                </li>
                            </div> : <div className="loggedOut">
                                <li>
                                    {" "}
                                    <i onClick={this.props.login} class="fas fa-sign-in-alt"></i>
                                    <p onClick={this.props.login}>Login</p>{" "}
                                </li>
                                {/* authentication ends */}
                            </div>
                        }
                    </ul>
                </nav>
            </header>
        </div>
    )
  }
}

export default Nav
