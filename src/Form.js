import React, { Component } from "react";
// import Slider from "react-rangeslider";
// import 'react-rangeslider/lib/index.css';

class Form extends Component {
  constructor() {
    super();
    this.state = {
<<<<<<< HEAD
      colour: " ",
      priceRange: 0,
      value: ""
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
  };

  handleChangeStart = () => {
    console.log("Change event started");
  };

  handleChange = value => {
    this.setState({
      priceRange: value
    });
  };

  handleChangeComplete = () => {
    console.log("Change event completed");
  };

  render() {
=======
      colour: "",
      price: "",
    };
  }

  render() {
    // const { value } = this.state
>>>>>>> a70d5be2535d19596fe2d42b3a913c6009ac7b10
    return (
      <section className="form">
        <div className="formWrapper">
          <form>
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
<<<<<<< HEAD
            <input
              id="typeinp"
              type="range"
              min="0"
              max="5"
              value={this.state.value}
              onChange={this.handleChange}
              step="1"
            />
=======
  <input 
      id="typeinp" 
      type="range" 
      min="0" max="5" 
      value={this.state.value} 
      onChange={this.handleChangePrice}
      step="1"/> */}
>>>>>>> a70d5be2535d19596fe2d42b3a913c6009ac7b10

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
                      onClick={this.propsChangePrice}
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
        </div>
      </section>
    );
  }
}

export default Form;
