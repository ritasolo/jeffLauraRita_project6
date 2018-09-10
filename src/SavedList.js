import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class SavedList extends Component {
    render() {
        return(
            <div>
                <h2>Hello</h2>
            <Link to="/">
                Back to Main Page
            </Link>
            </div>
        )
    }
}

export default SavedList