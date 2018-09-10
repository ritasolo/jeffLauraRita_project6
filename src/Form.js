import React, { Component } from "react";
// import Slider from "react-rangeslider";
// import 'react-rangeslider/lib/index.css';
import drinkingForest from "./assets/drinkingForest.jpg";

class Form extends Component {
  constructor() {
    super();
    this.state = {
      colour: "",
      price: ""
    };
  }

  render() {
    // const { value } = this.state
    return (
      <div className="formContainer clearfix">
      <section className="form">
        <div className="formWrapper">
          <form onSubmit={this.props.displayWines}>
            <div className="priceRangeSelect">
              {/* <input
                type="range"
                min="1"
                max="4"
                value={this.state.value}
                className="slider"
                onChange={this.handleChangePrice}
                id="priceRange"
                step="1"
              />
            </div>
  <input 
      id="typeinp" 
      type="range" 
      min="0" max="5" 
      value={this.state.value} 
      onChange={this.handleChangePrice}
      step="1"/> */}

              {/* <div className='slider'>
        <Slider
          min={1}
          max={4}
          value={value}
          onChangeStart={this.handleChangeStart}
          onChange={this.handleChange}
          onChangeComplete={this.handleChangeComplete}
        />
        <div className='value'>{value}</div>
      </div> */}

              <fieldset className="priceSelect">
                <ul>
                  <li>
                    <input
                      onClick={this.props.handleChangePrice}
                      name="price"
                      id="$"
                      type="radio"
                      value={this.state.price}
                    />
                    <label htmlFor="$">$</label>
                  </li>
                  <li>
                    <input
                      onClick={this.props.handleChangePrice}
                      name="price"
                      id="$$"
                      type="radio"
                      value={this.state.price}
                    />
                    <label htmlFor="$$">$$</label>
                  </li>
                  <li>
                    <input
                      onClick={this.props.handleChangePrice}
                      name="price"
                      id="$$$"
                      type="radio"
                      value={this.state.price}
                    />
                    <label htmlFor="$$$">$$$</label>
                  </li>
                  <li>
                    <input
                      onClick={this.props.handleChangePrice}
                      name="price"
                      id="$$$$"
                      type="radio"
                      value={this.state.price}
                    />
                    <label htmlFor="$$$$">$$$$</label>
                  </li>
                </ul>
              </fieldset>

              <fieldset className="colourSelect">
                <ul>
                  <li>
                    <input
                      onChange={this.props.handleChangeColour}
                      name="colour"
                      id="red"
                      type="radio"
                      value={this.state.colour}
                    />
                    <label htmlFor="red">Red</label>
                  </li>
                  <li>
                    <input
                      onChange={this.props.handleChangeColour}
                      name="colour"
                      id="white"
                      type="radio"
                      value={this.state.colour}
                    />
                    <label htmlFor="white">White</label>
                  </li>
                  <li>
                    <input
                      onChange={this.props.handleChangeColour}
                      name="colour"
                      id="all"
                      type="radio"
                      value={this.state.colour}
                    />
                    <label htmlFor="all">All</label>
                  </li>
                </ul>
              </fieldset>
            </div>
          </form>
          <button onClick={this.props.displayWines}>Pick</button>
        </div>
      </section>
      <figure className="imageWrapper">
          <img src={drinkingForest} alt=""/>
      </figure>
      </div>
    );
  }
}

export default Form;
