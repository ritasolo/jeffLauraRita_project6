import React, { Component } from "react";
import axios from "axios";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      wine: []
    };
  }
  componentDidMount() {
    axios({
      method: "GET",
      url: "http://proxy.hackeryou.com",
      //OR url: 'https://proxy.hackeryou.com',
      dataResponse: "json",
      params: {
        reqUrl: "http://www.lcboapi.com/products",
        proxyHeaders: {
          header_params: "value"
        },
        access_key:
          "MDoxZDg1NjI2Yy1iMDgwLTExZTgtYjJlNy1iZmRhMjM4ZmYyZGQ6THZzQ2lSa2FkYm50eVVCYWlTV2IzQ0dDdDQ3SFc3TVlBTjJE",
        xmlToJSON: false
      }
    }).then(res => {
      console.log(res.data.result);
      this.setState({
        wine: res.data.result
      });
    });
  }

  render() {
    return <div className="App" />;
  }
}

export default App;
