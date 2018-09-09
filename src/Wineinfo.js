import React, { Component } from "react";
import Qs from "qs";
import axios from "axios";
import { Link } from "react-router-dom";

class Wineinfo extends Component {
  constructor() {
    super();
    this.state = {
      wine: {},
      locations: {},
      latitude: "",
      longitude: ""
    };
  }

  geolocation = () => {
    navigator.geolocation.getCurrentPosition(position => {
      this.setState({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
        error: null
      });
    });
  };

  componentDidMount() {
    axios({
      method: "GET",
      url: "http://proxy.hackeryou.com",
      dataResponse: "json",
      paramsSerializer: function(params) {
        return Qs.stringify(params, { arrayFormat: "brackets" });
      },
      params: {
        reqUrl: `http://www.lcboapi.com/products/${
          this.props.match.params.wine_id
        }`,
        params: {
          q: "wine",
          per_page: 40,
          where_not: "is_dead, is_discontinued"
        },
        proxyHeaders: {
          Authorization: `Token "MDoxM2NjMDdlNC1iMDgwLTExZTgtYTc1NS0wYjUyYWEyN2NiMzM6TGVSYzFIVmJaMVEySE5rem1RdURPTFdGYnFKYTdZeHpkTVRi"`
        }
      },
      xmlToJSON: false
    }).then(res => {
      this.setState({
        wine: res.data.result
      });
    });

    axios({
      method: "GET",
      url: "http://proxy.hackeryou.com",
      dataResponse: "json",
      paramsSerializer: function(params) {
        return Qs.stringify(params, { arrayFormat: "brackets" });
      },
      params: {
        reqUrl: `http://www.lcboapi.com/inventories`,
        params: {
          product_id: this.props.match.params.wine_id,
          per_page: 40
        },
        proxyHeaders: {
          Authorization: `Token "MDoxM2NjMDdlNC1iMDgwLTExZTgtYTc1NS0wYjUyYWEyN2NiMzM6TGVSYzFIVmJaMVEySE5rem1RdURPTFdGYnFKYTdZeHpkTVRi"`
        }
      },
      xmlToJSON: false
    }).then(res => {
      this.setState({ locations: res.data.result });
    });
  }

  render() {
    return (
      <div className="wineInfo clearfix">
        <header>
          <h1>PLONK</h1>
        </header>
        <div className="wrapper">
          <figure className="imageWrapper">
            <img src={this.state.wine.image_url} alt={this.state.wine.name} />
          </figure>
          <div className="contentWrapper">
            <h1>{this.state.wine.name}</h1>
          </div>
          <header>
            <div className="info" />

            <p>
              Description:
              {this.state.wine.tasting_note}
            </p>
            <p>
              Price Per Litre: ${this.state.wine.price_per_liter_in_cents / 100}
            </p>
            <p>Alcohol/Volume: {this.state.wine.alcohol_content / 100}%</p>
            <p>
              Size:
              {this.state.wine.package_unit_volume_in_milliliters}
              mL{" "}
            </p>
            <Link to="/">Back to Main Page</Link>
            <button onClick={this.geolocation}>Find Nearest Location</button>
          </header>
        </div>
      </div>
    );
  }
}

export default Wineinfo;
