import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class SavedList extends Component {
  render() {
    return (
      <section className="savedList">
        <div className="wrapper clearfix">
          <Link to="/">Back to Main Page</Link>
          <h2>My Wines</h2>
          {this.props.wineInfo.map(wine => {
            return (
              <div className="card wineList clearfix" key={wine.wineKey}>
                <div className="cardWrapper clearfix">
                  <figure className="imageWrapper">
                    <img src={wine.wineImage} />
                  </figure>
                  <div className="cardSide">
                    <div className="wineTitle">
                      <p>{wine.wineName}</p>
                    </div>
                    <Link
                      className="btn__purple"
                      to={`/products/${wine.wineId}`}
                      target="_blank"
                    >
                      More Info
                    </Link>

                    <button
                      className="btn"
                      onClick={() => this.props.deleteWine(wine.wineKey)}
                      id={wine.wineKey}
                    >
                      Delete Wine
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    );
  }
}

export default SavedList;
