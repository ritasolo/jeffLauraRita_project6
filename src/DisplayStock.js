import React, { Component } from "react";

class DisplayStock extends Component {
  render() {
    console.log(this.props.arrayOfStock);
    return (
      <div>
        {this.props.arrayOfStock.map(store => {
          return (
            <div className="storeInfo" key={store.storeId}>
              <h3>Location: {store.storeName}</h3>
              <h4>In Stock: {store.stockAmount}</h4>
              <h4>
                Address:{" "}
                <a
                  href={`https://www.google.ca/maps/place/${
                    store.storeAddress
                  }`}
                  target="_blank"
                >
                  {store.storeAddress}
                </a>
              </h4>
              <h4>Phone Number: {store.storePhoneNumber}</h4>
            </div>
          );
        })}
      </div>
    );
  }
}

export default DisplayStock;
