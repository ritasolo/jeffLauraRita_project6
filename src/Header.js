import React,  { Component } from 'react'

class Header extends Component {

render(){
  return(
    <div className="headerSection clearfix">
      <div className="wrapper">
        <header>
          <h1>PLONK</h1>
        </header>
      </div>
    <section className="hero">
    <div className="heroScreen">
    <div className="wrapper">
    <div className="heroContent">
    < h2 className = "heroHeading" >Lorem ipsum dolor sit amet, lorem noluisse vel ex sed audire. </h2>
    <p className="heroCopy">Find your next bottle for under $22</p>
    <button className="btn">Find Plonk</button>
    </div>
    </div>
    </div>
    </section>
    </div>
  )
}

}

export default Header