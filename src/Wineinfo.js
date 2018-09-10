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
      longitude: "",
      nearbyStoreInfo: []
    };
  }

  geolocation = () => {
    navigator.geolocation.getCurrentPosition(position => {
      this.setState({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
        error: null
      });
      this.stores();
    });
  };

  stores = () =>
    axios({
      method: "GET",
      url: "http://proxy.hackeryou.com",
      dataResponse: "json",
      paramsSerializer: function(params) {
        return Qs.stringify(params, { arrayFormat: "brackets" });
      },
      params: {
        reqUrl: `http://www.lcboapi.com/stores`,
        params: {
          per_page: 10,
          lat: `${this.state.latitude}`,
          lon: `${this.state.longitude}`
        },
        proxyHeaders: {
          Authorization: `Token "MDoxM2NjMDdlNC1iMDgwLTExZTgtYTc1NS0wYjUyYWEyN2NiMzM6TGVSYzFIVmJaMVEySE5rem1RdURPTFdGYnFKYTdZeHpkTVRi"`
        }
      },
      xmlToJSON: false
    }).then(res => {
      const nearbyLocations = res.data.result;
      const nearbyStoreInfo = nearbyLocations.map(response => {
        return {
          storeId: response.id
        };
      });
      this.setState({ nearbyStoreInfo });
      const nearbyStoreArray = this.state.nearbyStoreInfo.map(
        response => response.storeId
      );
    });

  componentDidMount() {
    console.log(this.arrayOfLocations);
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
          store_id: 511,
          product_id: `${this.props.match.params.wine_id}`
        },
        proxyHeaders: {
          Authorization: `Token "MDoxM2NjMDdlNC1iMDgwLTExZTgtYTc1NS0wYjUyYWEyN2NiMzM6TGVSYzFIVmJaMVEySE5rem1RdURPTFdGYnFKYTdZeHpkTVRi"`
        }
      },
      xmlToJSON: false
    }).then(res => {
      console.log(res);
    });
  }

  render() {
    return (
      <div className="wineInfo clearfix">
        <header>
          <div className="wrapper">
            <h1>PLONK</h1>
          </div>
        </header>
        <div className="wrapper">
          <figure className="imageWrapper">
            <Link to="/">Back to Main Page</Link>
            <img src={this.state.wine.image_url} alt={this.state.wine.name} />
          </figure>
          <div className="content">
            <div className="contentWrapper">
              <h1>{this.state.wine.name}</h1>
              <div className="priceWrapper">
                <p>
                  {`$${this.state.wine.price_in_cents / 100}`}
                  <span>/bottle</span>
                </p>
              </div>
              <p className="wineDescription">{`${
                this.state.wine.tasting_note
              }`}</p>
              <div className="wineServingSuggestBox">
                <p className="wineServingSuggestTitle">Serving Suggestion</p>
                <p className="wineServingSuggest">{`${
                  this.state.wine.serving_suggestion
                }`}</p>
              </div>
              <ul>
                <li>
                  <span>Size: </span>
                  {`${this.state.wine.package_unit_volume_in_milliliters}mL`}
                </li>
                <li>
                  <span>Price Per Litre: </span>
                  {`${this.state.wine.price_per_liter_in_cents / 100}`}
                </li>
                <li>
                  <span>Alcohol/Vol: </span>
                  {`${this.state.wine.alcohol_content / 100}%`}
                </li>
              </ul>
              <button onClick={this.geolocation} className="btn">
                <i class="fas fa-map-marker-alt" /> Find near me
              </button>
              <button className="btn btnAlt">
                <i class="fas fa-plus" /> Add to Cellar
              </button>
            </div>{" "}
            {/* closes content wrapper */}
          </div>{" "}
          {/* closes content */}
          {/* <header>
        
                        <div className="info"></div>
    
                            <p>Description:{this.state.wine.tasting_note}</p>
                            <p>Price Per Litre: ${this.state.wine.price_per_liter_in_cents / 100}</p>
                            <p>Alcohol/Volume: {(this.state.wine.alcohol_content / 100)}%</p>
                            <p>Size:{this.state.wine.package_unit_volume_in_milliliters}mL </p>
                            <Link to="/">Back to Main Page</Link>
                    </header> */}
        </div>
      </div>
    );
  }
}

export default Wineinfo;
