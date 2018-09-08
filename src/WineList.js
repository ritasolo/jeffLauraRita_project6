import React, { Component } from "react";
import {Link} from 'react-router-dom';

class WineList extends Component {
  constructor() {
    super();
    this.state = {
      wine: ""
    };
  }

  render() {
    return(
        <div>
        {this.props.random.map((item, i) => {
          console.log(this.props.random)
          return (
            <Link to={`/products/${item.id}`}>
            <div key={item.id} className="wineChoice">
                <img src={item.thumb} alt="Different Kinds of Wine"/>
                <h2>{item.name}</h2>
                <div>
                  {(item.price === item.sale)
                  ? <p>{`${item.sale}`}</p> 
                  : <p>{`${item.price} ${item.sale}`}</p>
                  }
                </div>
              </div>
            </Link>
          )
        })
        }
      </div>
    )
  }
}

export default WineList;
