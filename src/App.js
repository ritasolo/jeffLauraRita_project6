import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import Qs from "qs";

const apiUrl = "http://www.lcboapi.com/products";
const apiKey =
  "MDoxM2NjMDdlNC1iMDgwLTExZTgtYTc1NS0wYjUyYWEyN2NiMzM6TGVSYzFIVmJaMVEySE5rem1RdURPTFdGYnFKYTdZeHpkTVRi";

class App extends Component {
  constructor() {
    super();
    this.state = {
      wineArray: [],
      colour: "all",
      price: "$"
    };
  }

  componentDidMount() {
    axios({
      method: "GET",
      url: "http://proxy.hackeryou.com",
      dataResponse: "json",
      paramsSerializer: function(params) {
        return Qs.stringify(params, { arrayFormat: "brackets" });
      },
      params: {
        reqUrl: apiUrl,
        params: {
          q: "wine",
          page: 1,
          per_page: 40,
          where_not: "is_dead, is_discontinued"
        },
        proxyHeaders: {
          Authorization: `Token ${apiKey}`
        },
        xmlToJSON: false
      }
    }).then(res => {
      this.state.wineArray.push(...res.data.result);
    });

    axios({
      method: "GET",
      url: "http://proxy.hackeryou.com",
      dataResponse: "json",
      paramsSerializer: function(params) {
        return Qs.stringify(params, { arrayFormat: "brackets" });
      },
      params: {
        reqUrl: apiUrl,
        params: {
          q: "wine",
          page: 2,
          per_page: 40,
          where_not: "is_dead, is_discontinued"
        },
        proxyHeaders: {
          Authorization: `Token ${apiKey}`
        },
        xmlToJSON: false
      }
    }).then(res => {
      this.state.wineArray.push(...res.data.result);
    });
    axios({
      method: "GET",
      url: "http://proxy.hackeryou.com",
      dataResponse: "json",
      paramsSerializer: function(params) {
        return Qs.stringify(params, { arrayFormat: "brackets" });
      },
      params: {
        reqUrl: apiUrl,
        params: {
          q: "wine",
          page: 3,
          per_page: 40,
          where_not: "is_dead, is_discontinued"
        },
        proxyHeaders: {
          Authorization: `Token ${apiKey}`
        },
        xmlToJSON: false
      }
    }).then(res => {
      this.state.wineArray.push(...res.data.result);
    });

    axios({
      method: "GET",
      url: "http://proxy.hackeryou.com",
      dataResponse: "json",
      paramsSerializer: function(params) {
        return Qs.stringify(params, { arrayFormat: "brackets" });
      },
      params: {
        reqUrl: apiUrl,
        params: {
          q: "wine",
          page: 4,
          per_page: 40,
          where_not: "is_dead, is_discontinued"
        },
        proxyHeaders: {
          Authorization: `Token ${apiKey}`
        },
        xmlToJSON: false
      }
    }).then(res => {
      this.state.wineArray.push(...res.data.result);
    });

    axios({
      method: "GET",
      url: "http://proxy.hackeryou.com",
      dataResponse: "json",
      paramsSerializer: function(params) {
        return Qs.stringify(params, { arrayFormat: "brackets" });
      },
      params: {
        reqUrl: apiUrl,
        params: {
          q: "wine",
          page: 5,
          per_page: 40,
          where_not: "is_dead, is_discontinued"
        },
        proxyHeaders: {
          Authorization: `Token ${apiKey}`
        },
        xmlToJSON: false
      }
    }).then(res => {
      this.state.wineArray.push(...res.data.result);
      const cheapWines = this.state.wineArray.filter(item => {
        return (
          item.price_in_cents < 2200 &&
          item.package_unit_volume_in_milliliters === 750 &&
          item.package_unit_type === "bottle"
        );
      });
      this.setState({
        wineArray: cheapWines
      });
    });
  }

  filterByPrice = userPriceChoice => {
    {
      this.state.price === "$"
        ? this.state.wineArray.filter(item => {
            return item.price_in_cents <= 1000;
          })
        : null;
    }
  };

  render() {
    // console.log(this.state.wineArray);
    this.filterByPrice(this.state.price);
    console.log(this.state.wineArray);

    return <div className="App" />;
  }
}

export default App;