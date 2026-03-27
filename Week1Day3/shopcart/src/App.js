import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import productsData from "./products";
import NavBarComponent from "./navbar";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      siteName: "Shop to React",
      products: productsData,
      sortType: "normal"
    };
  }

  handleAdd = (id) => {
    this.setState((prevState) => ({
      products: prevState.products.map((product) =>
        product.id === id
          ? { ...product, value: product.value + 1 }
          : product
      )
    }));
  };

  handleSubtract = (id) => {
    this.setState((prevState) => ({
      products: prevState.products.map((product) =>
        product.id === id
          ? { ...product, value: product.value > 0 ? product.value - 1 : 0 }
          : product
      )
    }));
  };

  handleSortChange = (event) => {
    const sortType = event.target.value;

    this.setState((prevState) => {
      let sortedProducts = [...prevState.products];

      if (sortType === "normal") {
        sortedProducts.sort((a, b) => a.id - b.id);
      } else if (sortType === "lowest") {
        sortedProducts.sort((a, b) => a.price - b.price);
      } else if (sortType === "highest") {
        sortedProducts.sort((a, b) => b.price - a.price);
      }

      return {
        sortType: sortType,
        products: sortedProducts
      };
    });
  };

  getTotalQty = () => {
    return this.state.products.reduce(
      (total, product) => total + product.value,
      0
    );
  };

  render() {
    return (
      <div className="App">
        <NavBarComponent
          siteName={this.state.siteName}
          products={this.state.products}
          totalQty={this.getTotalQty()}
          handleAdd={this.handleAdd}
          handleSubtract={this.handleSubtract}
          sortType={this.state.sortType}
          handleSortChange={this.handleSortChange}
        />
      </div>
    );
  }
}

export default App;