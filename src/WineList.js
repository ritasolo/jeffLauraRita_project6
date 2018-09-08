import React, { Component } from "react";

class WineList extends Component {
  constructor() {
    super();
    this.state = {
      name: ""
    };
  }

  render() {
    if (this.props.random.length > 0) {
      this.props.random.map(function(item, i) {
        console.log(item.name);
      });
    }

    return <section className="winelist" />;
  }
}

export default WineList;
