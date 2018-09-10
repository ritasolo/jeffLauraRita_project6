import React,  { Component } from 'react'

class Footer extends Component {

render(){
  return <footer className="footerSection">
      <div className="socialIcons">
        <i className="fab fa-facebook-square" />
        <i className="fab fa-instagram" />
        <i className="fab fa-twitter-square" />
      </div>
      <div className="createdBy">
        <p>Created by Jeff Lee, Laura Kirkham and Rita Solo</p>
      </div>
    </footer>;
}

}

export default Footer