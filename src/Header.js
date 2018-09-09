import React,  { Component } from 'react'

class Header extends Component {

render(){
  return(
    <div className="headerSection clearfix">
            <header>
              <h1>PLONK</h1>
            </header>
    <section className="hero">
    <div className="heroScreen">
    <div className="heroContent">
    <h2 className="heroHeading">Lorem ipsum dolor sit amet, consectetur adipiscing.</h2>
    <p className="heroCopy">Fusce vitae interdum metus iaculis ligula. Quisque eu feugiat dolor.</p>
    <button className="btn">Find Plonk</button>
    </div>
    </div>
    </section>
    </div>
  )
}

}

export default Header