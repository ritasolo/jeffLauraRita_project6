import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class SavedList extends Component {
    render() {
        return (
            <section className="bookList">
                <Link to="/">
                    Back to Main Page
                </Link>
                <h2>My Wines</h2>
                {this.props.wineInfo.map((wine) => {
                    return (
                        <div className="wines" key={wine.wineKey}>
                            <img src={wine.wineImage} />
                            <p>{wine.wineName}</p>
                            <button onClick={() => this.props.deleteWine(wine.wineKey)} id={wine.wineKey}>Delete Wine</button>
                        </div>
                        )
                    })}       
                </section>
            )
        }
    }

export default SavedList