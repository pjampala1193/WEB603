// src/App.js
import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import {
  Container,
  Row,
  Col,
  Navbar,
  NavbarBrand,
  Nav,
  NavItem
} from "reactstrap";

import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// ---------- Child Components (Functional) ----------

function HeaderBar({ siteName, totalQty }) {
  return (
    <Navbar color="info" dark expand="md" className="px-3">
      <NavbarBrand className="fw-bold">{siteName}</NavbarBrand>

      <Nav className="ms-auto" navbar>
        <NavItem className="text-white d-flex align-items-center gap-2">
          <FontAwesomeIcon icon={faShoppingCart} />
          <span>{totalQty} items</span>
        </NavItem>
      </Nav>
    </Navbar>
  );
}

function ProductList({ products, onQtyChange }) {
  return (
    <div className="border border-top-0">
      {products.map((p) => (
        <ProductItem key={p.id} product={p} onQtyChange={onQtyChange} />
      ))}
    </div>
  );
}

function ProductItem({ product, onQtyChange }) {
  return (
    <Container fluid className="py-3 border-top">
      <Row className="align-items-center">
        <Col xs="12" className="fw-semibold mb-2">
          {product.desc}
        </Col>

        <Col xs="3" sm="2">
          <img
            src={product.image}
            alt={product.desc}
            style={{ width: "60px", height: "60px", objectFit: "contain" }}
          />
        </Col>

        <Col xs="9" sm="10" className="d-flex align-items-center gap-2">
          <input
            type="number"
            min="0"
            value={product.value}
            onChange={(e) => onQtyChange(product.id, e.target.value)}
            style={{ width: "70px" }}
            className="form-control"
          />
          <span className="text-muted">quantity</span>
        </Col>
      </Row>
    </Container>
  );
}

// ---------- Parent Component (Class) ----------

class App extends Component {
  state = {
    siteName: "Shop to React",
    products: [
      { id: 1, image: "/products/cologne.jpg", desc: "Unisex Cologne", value: 0 },
      { id: 2, image: "/products/iwatch.jpg", desc: "Apple iWatch", value: 0 },
      { id: 3, image: "/products/mug.jpg", desc: "Unique Mug", value: 0 },
      { id: 4, image: "/products/wallet.jpg", desc: "Mens Wallet", value: 0 }
    ]
  };

  handleQtyChange = (id, newValue) => {
    // Keep it simple and safe: numbers only, no negatives
    let qty = parseInt(newValue, 10);
    if (Number.isNaN(qty)) qty = 0;
    if (qty < 0) qty = 0;

    this.setState((prev) => ({
      products: prev.products.map((p) =>
        p.id === id ? { ...p, value: qty } : p
      )
    }));
  };

  getTotalQty = () => {
    // map + reduce (as the PDF suggests)
    return this.state.products
      .map((p) => p.value)
      .reduce((sum, v) => sum + v, 0);
  };

  render() {
    const totalQty = this.getTotalQty();

    return (
      <div>
        <HeaderBar siteName={this.state.siteName} totalQty={totalQty} />

        <Container className="my-4" style={{ maxWidth: "900px" }}>
          <ProductList
            products={this.state.products}
            onQtyChange={this.handleQtyChange}
          />
        </Container>
      </div>
    );
  }
}

export default App;