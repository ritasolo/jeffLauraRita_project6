import React, { Component } from "react";
import axios from "axios";
import "./App.css";

const wineArray = [];

class App extends Component {
  constructor() {
    super();
    this.state = {
      wine: [],
      wineArray: []
    };
  }
  componentDidMount() {
    axios({
      method: "GET",
      url: "http://proxy.hackeryou.com",
      dataResponse: "json",
      params: {
        reqUrl:
          "http://www.lcboapi.com/products?page=1&q=wine&?order=price_in_cents.desc&per_page=41",
        proxyHeaders: {
          header_params: "value"
        },
        access_key:
          "MDoxZDg1NjI2Yy1iMDgwLTExZTgtYjJlNy1iZmRhMjM4ZmYyZGQ6THZzQ2lSa2FkYm50eVVCYWlTV2IzQ0dDdDQ3SFc3TVlBTjJE",
        xmlToJSON: false
      }
    }).then(res => {
      wineArray.push(...res.data.result);
    });

    axios({
      method: "GET",
      url: "http://proxy.hackeryou.com",
      dataResponse: "json",
      params: {
        reqUrl:
          "http://www.lcboapi.com/products?page=2&q=wine&?order=price_in_cents.desc&per_page=41",
        proxyHeaders: {
          header_params: "value"
        },
        access_key:
          "MDoxZDg1NjI2Yy1iMDgwLTExZTgtYjJlNy1iZmRhMjM4ZmYyZGQ6THZzQ2lSa2FkYm50eVVCYWlTV2IzQ0dDdDQ3SFc3TVlBTjJE",
        xmlToJSON: false
      }
    }).then(res => {
      wineArray.push(...res.data.result);
    });

    axios({
      method: "GET",
      url: "http://proxy.hackeryou.com",
      dataResponse: "json",
      params: {
        reqUrl:
          "http://www.lcboapi.com/products?page=3&q=wine&?order=price_in_cents.desc&per_page=41",
        proxyHeaders: {
          header_params: "value"
        },
        access_key:
          "MDoxZDg1NjI2Yy1iMDgwLTExZTgtYjJlNy1iZmRhMjM4ZmYyZGQ6THZzQ2lSa2FkYm50eVVCYWlTV2IzQ0dDdDQ3SFc3TVlBTjJE",
        xmlToJSON: false
      }
    }).then(res => {
      wineArray.push(...res.data.result);
    });

    axios({
      method: "GET",
      url: "http://proxy.hackeryou.com",
      dataResponse: "json",
      params: {
        reqUrl:
          "http://www.lcboapi.com/products?page=4&q=wine&?order=price_in_cents.desc&per_page=41",
        proxyHeaders: {
          header_params: "value"
        },
        access_key:
          "MDoxZDg1NjI2Yy1iMDgwLTExZTgtYjJlNy1iZmRhMjM4ZmYyZGQ6THZzQ2lSa2FkYm50eVVCYWlTV2IzQ0dDdDQ3SFc3TVlBTjJE",
        xmlToJSON: false
      }
    }).then(res => {
      wineArray.push(...res.data.result);
    });

    axios({
      method: "GET",
      url: "http://proxy.hackeryou.com",
      dataResponse: "json",
      params: {
        reqUrl:
          "http://www.lcboapi.com/products?page=6&q=wine&?order=price_in_cents.desc&per_page=41",
        proxyHeaders: {
          header_params: "value"
        },
        access_key:
          "MDoxZDg1NjI2Yy1iMDgwLTExZTgtYjJlNy1iZmRhMjM4ZmYyZGQ6THZzQ2lSa2FkYm50eVVCYWlTV2IzQ0dDdDQ3SFc3TVlBTjJE",
        xmlToJSON: false
      }
    }).then(res => {
      wineArray.push(...res.data.result);
    });
    this.setState({
      wineArray: wineArray
    });
  }

  render() {
    console.log(this.state.wineArray);
    const filteredArray = this.state.wineArray.map(
      ({ name, price_in_cents }) => ({ name, price_in_cents })
    );
    console.log(filteredArray);
    return <div className="App" />;
  }
}

export default App;
