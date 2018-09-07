import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import Qs from "qs";
import Form from "./Form";
import _ from "lodash";
import sampleSize from "lodash/sampleSize";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const apiUrl = "http://www.lcboapi.com/products";
const apiKey =
  "MDoxM2NjMDdlNC1iMDgwLTExZTgtYTc1NS0wYjUyYWEyN2NiMzM6TGVSYzFIVmJaMVEySE5rem1RdURPTFdGYnFKYTdZeHpkTVRi";

class App extends Component {
  constructor() {
    super();
    this.state = {
      wineArray: [],
      colour: "red",
      price: "$",
      $: [],
      $$: [],
      $$$: [],
      $$$$: [],
      $white: [],
      $red: [],
      $$white: [],
      $$red: [],
      $$$white: [],
      $$$red: [],
      $$$$white: [],
      $$$$red: []
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
    const wineRequests = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(
      this.getWine
    );
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
      this.setState(
        {
          wineArray: responses
        },
        () => {
          const fullArray = this.state.wineArray;
          const $ = fullArray.filter(item => {
            return item.price_in_cents > 600 && item.price_in_cents < 1000;
          });
          const $$ = fullArray.filter(item => {
            return item.price_in_cents > 1000 && item.price_in_cents < 1400;
          });
          const $$$ = fullArray.filter(item => {
            return item.price_in_cents > 1400 && item.price_in_cents < 1800;
          });
          const $$$$ = fullArray.filter(item => {
            return item.price_in_cents > 1800 && item.price_in_cents < 2200;
          });

          const $white = $.filter(item => {
            return item.secondary_category === "White Wine";
          }).map(response => {
            return {
              id: response.id,
              name: response.name,
              price: `$${response.price_in_cents / 100}`,
              imgURL: response.image_url,
              onSale: response.has_clearance_sale
            };
          });

          const $red = $.filter(item => {
            return item.secondary_category === "Red Wine";
          }).map(response => {
            return {
              id: response.id,
              name: response.name,
              price: `$${response.price_in_cents / 100}`,
              imgURL: response.image_url,
              onSale: response.has_clearance_sale
            };
          });

          const $$red = $$.filter(item => {
            return item.secondary_category === "Red Wine";
          }).map(response => {
            return {
              id: response.id,
              name: response.name,
              price: `$${response.price_in_cents / 100}`,
              imgURL: response.image_url,
              onSale: response.has_clearance_sale
            };
          });

          const $$white = $$.filter(item => {
            return item.secondary_category === "Red Wine";
          }).map(response => {
            return {
              id: response.id,
              name: response.name,
              price: `$${response.price_in_cents / 100}`,
              imgURL: response.image_url,
              onSale: response.has_clearance_sale
            };
          });

          const $$$white = $$$.filter(item => {
            return item.secondary_category === "White Wine";
          }).map(response => {
            return {
              id: response.id,
              name: response.name,
              price: `$${response.price_in_cents / 100}`,
              imgURL: response.image_url,
              onSale: response.has_clearance_sale
            };
          });

          const $$$red = $$$.filter(item => {
            return item.secondary_category === "Red Wine";
          }).map(response => {
            return {
              id: response.id,
              name: response.name,
              price: `$${response.price_in_cents / 100}`,
              imgURL: response.image_url,
              onSale: response.has_clearance_sale
            };
          });

          const $$$$white = $$$$.filter(item => {
            return item.secondary_category === "White Wine";
          }).map(response => {
            return {
              id: response.id,
              name: response.name,
              price: `$${response.price_in_cents / 100}`,
              imgURL: response.image_url,
              onSale: response.has_clearance_sale
            };
          });

          const $$$$red = $$$$.filter(item => {
            return item.secondary_category === "Red Wine";
          }).map(response => {
            return {
              id: response.id,
              name: response.name,
              price: `$${response.price_in_cents / 100}`,
              imgURL: response.image_url,
              onSale: response.has_clearance_sale
            };
          });

          this.setState({
            $,
            $$,
            $$$,
            $$$$,
            $white,
            $red,
            $$white,
            $$red,
            $$$white,
            $$$red,
            $$$$white,
            $$$$red
          });
        }
      );
    });
  }

  render() {
    // const random = _.sampleSize(this.state.wineArray, 6);
    // console.log(random);
    return (
      <Router>
        <div className="App">
          <header>
            <h1>Plonk</h1>
          </header>
          <section>
            <Form />
            <div className="choices" />
          </section>
        </div>
      </Router>
    );
  }
}

export default App;
