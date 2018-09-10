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
        <div className="wrapper">
        {this.props.random.map((item, i) => {
          // console.log(this.props.random)
          // console.log(item);
          return (
            <Link to={`/products/${item.id}`}>
              <div key={item.id} className="card wineChoice clearfix">
              <div className="cardWrapper clearfix">
    
                <figure className="imageWrapper">
                  <img src={item.imgURL} alt={item.name}/>
                </figure>
                <div className="cardSide">
                      <div className="wineTitle">
                        <h3>{item.name}</h3>
                      </div> {/* closes wine title */}
                    <div className="winePriceWrapper">
                      <p className="winePrice">{`${item.price}`}<span>/bottle</span></p>
                    </div> {/* closes wine price wrapper */}
                </div> {/* closes card side */}
              </div> {/* closes card wrapper */}
            </div> {/* closes card */}
          </Link>
          )
        })
        }
      </div>
    )
  }
}

export default WineList;
