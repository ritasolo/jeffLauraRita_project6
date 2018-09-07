import React,  { Component } from 'react'

class Header extends Component {

render(){
  return(
    <div className="headerSection clearfix">
    <header>
      <h1>PLONK</h1>
    </header>
    <section className="hero">
    <div className="heroContent">
    <h2 className="heroHeading">Lorem ipsum dolor sit amet, consectetur adipiscing.</h2>
    <button className="btn">Bottoms Up</button>
    </div>
    </section>
    </div>
  )
}

}

export default Header