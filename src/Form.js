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
      <section className="formContainer clearfix">
      <div className="form">
        <div className="formWrapper">
          <form onSubmit={this.props.displayWines}>
            <div className="filters">
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
              <h3>Set your budget:</h3>
                <ul>
                  <li>
                    <label className="radio inline" htmlFor="$">
                    <input
                      onClick={this.props.handleChangePrice}
                      name="price"
                      id="$"
                      type="radio"
                      value={this.state.price}
                    />
                     <span> $</span>
                     </label>
                  </li>
                  <li>
                    <label className="radio inline" htmlFor="$$"> 
                    <input
                      onClick={this.props.handleChangePrice}
                      name="price"
                      id="$$"
                      type="radio"
                      value={this.state.price}
                    />
                    <span> $$</span>
                    </label>
                  </li>
                  <li>
                    <label className="radio inline" htmlFor="$$$">
                    <input
                      onClick={this.props.handleChangePrice}
                      name="price"
                      id="$$$"
                      type="radio"
                      value={this.state.price}
                    />
                    <span> $$$</span>
                    </label>
                  </li>
                  <li>
                    <label className="radio inline" htmlFor="$$$$"> 
                    <input
                      onClick={this.props.handleChangePrice}
                      name="price"
                      id="$$$$"
                      type="radio"
                      value={this.state.price}
                    />
                    <span> $$$$</span>
                    </label>
                  </li>
                </ul>
              </fieldset>

              <fieldset className="colourSelect">
                <h3>Pick your plonk:</h3>
                <ul>
                  <li>
                    <label className="radio inline" htmlFor="red"> 
                    <input
                      onChange={this.props.handleChangeColour}
                      name="colour"
                      id="red"
                      type="radio"
                      value={this.state.colour}
                    />
                    <span> Red</span>
                    </label>
                  </li>
                  <li>
                    <label className="radio inline" htmlFor="white"> 
                    <input
                      onChange={this.props.handleChangeColour}
                      name="colour"
                      id="white"
                      type="radio"
                      value={this.state.colour}
                    />
                    <span> White</span>
                    </label>
                  </li>
                  <li>
                    <label className="radio inline" htmlFor="all">
                    <input
                      onChange={this.props.handleChangeColour}
                      name="colour"
                      id="all"
                      type="radio"
                      value={this.state.colour}
                    />
                    <span> All</span>
                    </label>
                  </li>
                </ul>
              </fieldset>
            </div>
          </form>
          <button onClick={this.props.displayWines}>Pick</button>
        </div>
      </div>
   <div className="formQuote">
          <div className="formQuoteScreen">
          <h2 className="quote">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. </h2>
          </div>
      </div>
      </section>
    );
  }
}

export default Form;
