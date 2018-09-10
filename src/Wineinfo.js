import React, { Component } from "react";
import Qs from "qs";
import axios from "axios";
import { Link } from "react-router-dom";
import firebase from "firebase";
import swal from "sweetalert";
import DisplayStock from "./DisplayStock";

const auth = firebase.auth();

class Wineinfo extends Component {
  constructor() {
    super();
    this.state = {
      wine: {},
      locations: {},
      latitude: "",
      longitude: "",
      nearbyStoreInfo: [],
      arrayOfStock: []
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

  addToFavs = wine => {
    swal(
      "Added To Your Favourites!",
      "Please check your favourites for your list.",
      "success"
    );
    this.props.favourites(this.state.wine);
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
      const locationsWithStock = () =>
        this.state.nearbyStoreInfo.map(obj => {
          console.log(obj.storeId);
          const store = obj.storeId;
          return axios({
            method: "GET",
            url: "http://proxy.hackeryou.com",
            dataResponse: "json",
            paramsSerializer: function(params) {
              return Qs.stringify(params, { arrayFormat: "brackets" });
            },
            params: {
              reqUrl: `http://www.lcboapi.com/inventories`,
              params: {
                store_id: `${store}`,
                product_id: `${this.props.match.params.wine_id}`
              },
              proxyHeaders: {
                Authorization: `Token "MDoxM2NjMDdlNC1iMDgwLTExZTgtYTc1NS0wYjUyYWEyN2NiMzM6TGVSYzFIVmJaMVEySE5rem1RdURPTFdGYnFKYTdZeHpkTVRi"`
              }
            },
            xmlToJSON: false
          });
        });
      Promise.all(locationsWithStock()).then(res => {
        console.log(res);
        const filteredData = res
          .filter(store => {
            return store.data.result.length > 0;
          })
          .map(store => store.data);
        const arrayOfStock = filteredData.map(storeInfo => {
          return {
            storeName: storeInfo.store.name,
            storeId: storeInfo.store.id,
            stockAmount: storeInfo.result[0].quantity
          };
        });
        console.log(arrayOfStock);
        this.setState({
          arrayOfStock
        });
        console.log(arrayOfStock);
      });
    });

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

    // var kvArray = [{ key: 1, value: 10 },
    // { key: 2, value: 20 },
    // { key: 3, value: 30 }];

    // var reformattedArray = kvArray.map(obj => {
    //   var rObj = {};
    //   rObj[obj.key] = obj.value;
    //   return rObj;
    // });
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
              <button onClick={this.addToFavs} className="btn btnAlt">
                <i class="fas fa-plus" /> Add to Cellar
              </button>
              <DisplayStock arrayOfStock={this.state.arrayOfStock} />
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
