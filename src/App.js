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
      price: "$",
      cheapestWines: []
    };
  }

  getWine = pageNumber => {
    return axios({
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
          page: pageNumber,
          per_page: 40,
          where_not: "is_dead, is_discontinued"
        },
        proxyHeaders: {
          Authorization: `Token ${apiKey}`
        },
        xmlToJSON: false
      }
    });
  };

  componentDidMount() {
    const wineRequests = [1, 2, 3, 4, 5, 6, 7].map(this.getWine);
    console.log(wineRequests);
    Promise.all(wineRequests).then(responses => {
      responses = responses
        .map(response => {
          return response.data.result;
        })
        .reduce((acc, curr) => {
          return [...acc, ...curr];
        })
        .filter(item => {
          return (
            item.price_in_cents < 2200 &&
            item.package_unit_volume_in_milliliters === 750 &&
            item.package_unit_type === "bottle"
          );
        });
      console.log(responses);
      this.setState({
        wineArray: responses
      });
    });
  }

  // filterArray = array => {
  //   array.filter(item => {
  //     return (
  //       item.price_in_cents < 2200 &&
  //       item.package_unit_volume_in_milliliters === 750 &&
  //       item.package_unit_type === "bottle"
  //     );
  //   });
  // };

  // filterByPrice = userPriceChoice => {
  //   {
  //     this.state.price === "$" ? this.state.wineArray.filter(item => {
  //       return (
  //         item.price_in_cents < 1000 )} : null;
  //   }
  // };

  render() {
    // this.filterArray(this.wineArray);
    // console.log(this.wineArray);
    return <div className="App" />;
  }
}

export default App;
