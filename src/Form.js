import React, { Component } from "react";
// import Slider from "react-rangeslider";
// import 'react-rangeslider/lib/index.css';


class Form extends Component {
  constructor() {
    super();
    this.state = {
      colour: " ",
      priceRange: 0,
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
      e.preventDefault();
  }

  handleChangeStart = () => {
    console.log('Change event started')
  };

  handleChange = value => {
    this.setState({
      priceRange: value
    })
  };

  handleChangeComplete = () => {
    console.log('Change event completed')
  };

  

  render() {
  
    const { value } = this.state
    return (
      <section className="form">
        <div className="formWrapper">
          <form>
            <div className="priceRangeSelect">
              <input
                type="range"
                min="1" max="4"
                value={this.state.value}
                className="slider"
                onClick={this.handleChange}
                id="priceRange"
                step="1"
              />
            </div>
  <input 
      id="typeinp" 
      type="range" 
      min="0" max="5" 
      value={this.state.value} 
      onChange={this.handleChange}
      step="1"/>

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

            <fieldset className="colourSelect">
              <ul>
                <li>
                  <input
                    onClick={this.handleChange}
                    name="colour"
                    id="red"
                    type="radio"
                    value="red"
                  />
                  <label htmlFor="red">Red</label>
                </li>
                <li>
                  <input
                    onClick={this.handleChange}
                    name="colour"
                    id="white"
                    type="radio"
                    value="white"
                  />
                  <label htmlFor="white">White</label>
                </li>
                <li>
                  <input
                    onClick={this.handleChange}
                    name="colour"
                    id="all"
                    type="radio"
                    value="all"
                  />
                  <label htmlFor="all">All</label>
                </li>
              </ul>
            </fieldset>
            <button type="submit">Submit</button>
          </form>
        </div>
      </section>
    );
  }
}

export default Form;
