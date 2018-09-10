import React, { Component } from "react";

class DisplayStock extends Component {
  render() {
    console.log(this.props.arrayOfStock);
    return (
      <div>
        {this.props.arrayOfStock.map(store => {
          return (
            <div className="storeInfo" key={store.storeId}>
              <h3>{store.storeName}</h3>
              <h4>{store.stockAmount}</h4>
            </div>
          );
        })}
      </div>
    );
  }
}

export default DisplayStock;
