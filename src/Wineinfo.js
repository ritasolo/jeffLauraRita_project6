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
            console.log(res.data);
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
                        <h1>{this.state.wine.name}</h1>
                        <h2>hi</h2>
                        <Link to="/">Back to Main Page</Link>
                    </header>
                </div>
            </div>
        )
    }
}

export default Wineinfo