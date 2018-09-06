import React, { Component } from "react";

class Form extends Component {
  constructor() {
    super();
    this.state = {
      colour: "all",
      priceRange: 1
    };
  }

  render() {
    return (
      <section className="form">
        <div className="formWrapper">
          <form>
            <div className="priceRangeSelect">
              <input
                type="range"
                min="1"
                max="4"
                value="this.state.something"
                className="slider"
                id="priceRange"
              />
            </div>
            <fieldset className="colourSelect" />
            <button type="submit">Submit</button>
          </form>
        </div>
      </section>
    );
  }
}

export default Form;
