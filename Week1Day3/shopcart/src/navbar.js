import React from "react";
import { Navbar, Container, Nav, Badge } from "react-bootstrap";
import { Routes, Route, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingCart,
  faStore
} from "@fortawesome/free-solid-svg-icons";

import DisplayProducts from "./displayProducts";
import Cart from "./cart";
import SignIn from "./signin";
import Checkout from "./checkout";

function NavBarComponent({
  siteName,
  products,
  totalQty,
  handleAdd,
  handleSubtract,
  sortType,
  handleSortChange
}) {
  return (
    <>
      <Navbar bg="info" variant="dark" expand="lg" className="py-3 shadow-sm">
        <Container>
          <Navbar.Brand
            as={Link}
            to="/"
            className="fw-bold d-flex align-items-center gap-2"
          >
            <FontAwesomeIcon icon={faStore} />
            {siteName}
          </Navbar.Brand>

          <Nav className="ms-auto">
            <Nav.Link
              as={Link}
              to="/cart"
              className="d-flex align-items-center gap-2 text-white"
            >
              <FontAwesomeIcon icon={faShoppingCart} />
              Cart
              <Badge bg="light" text="dark">
                {totalQty}
              </Badge>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route
          path="/"
          element={
            <DisplayProducts
              products={products}
              handleAdd={handleAdd}
              handleSubtract={handleSubtract}
              sortType={sortType}
              handleSortChange={handleSortChange}
            />
          }
        />
        <Route
          path="/cart"
          element={<Cart products={products} totalQty={totalQty} />}
        />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/checkout" element={<Checkout products={products} />} />
      </Routes>
    </>
  );
}

export default NavBarComponent;