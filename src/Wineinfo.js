import React, { Component } from "react";
import Qs from "qs";
import axios from "axios";
import { Link } from 'react-router-dom';

class Wineinfo extends Component {
    constructor() {
        super();
            this.state = {
                wine: {}
            }
        }
    componentDidMount() {
        axios({
            method: "GET",
            url: "http://proxy.hackeryou.com",
            dataResponse: "json",
            paramsSerializer: function (params) {
                return Qs.stringify(params, { arrayFormat: "brackets" });
            },
            params: {
                reqUrl: `http://www.lcboapi.com/products/${this.props.match.params.wine_id}`,
                params: {
                    q: "wine",
                    per_page: 40,
                    where_not: "is_dead, is_discontinued"
                },
                proxyHeaders: {
                    Authorization: `Token "MDoxM2NjMDdlNC1iMDgwLTExZTgtYTc1NS0wYjUyYWEyN2NiMzM6TGVSYzFIVmJaMVEySE5rem1RdURPTFdGYnFKYTdZeHpkTVRi"`
                },
            },
            xmlToJSON: false
        }).then(res => {
            console.log(res.data.result);
            this.setState({
                wine: res.data.result
            })
        })
    }
    render() {
        return(
            <div className=".movie-single__poster">
                <div className="movie-single__description">
                    <header>
                        <img src={this.state.wine.image_url} alt="Wine you chose"/>
                        <div className="info"></div>
                            <h1>{this.state.wine.name}</h1>
                            <p>Description:{this.state.wine.tasting_note}</p>
                            <p>Price Per Litre: ${this.state.wine.price_per_liter_in_cents / 100}</p>
                            <p>Alcohol/Volume: {(this.state.wine.alcohol_content / 100)}%</p>
                            <p>Size:{this.state.wine.package_unit_volume_in_milliliters}mL </p>
                            <Link to="/">Back to Main Page</Link>
                    </header>
                </div>
            </div>
        )
    }
}

export default Wineinfo