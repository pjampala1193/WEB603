import React from "react";
import { Container, Table, Alert } from "react-bootstrap";

function Cart({ products }) {
  const cartItems = products.filter((product) => product.value > 0);

  return (
    <Container className="py-4">
      <h2 className="mb-4 text-center">Shopping Cart</h2>

      {cartItems.length === 0 ? (
        <Alert variant="warning" className="text-center">
          Your cart is empty.
        </Alert>
      ) : (
        <Table striped bordered hover responsive className="shadow-sm">
          <thead>
            <tr>
              <th>Image</th>
              <th>Product</th>
              <th>Ratings</th>
              <th>Quantity</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((product) => (
              <tr key={product.id}>
                <td>
                  <img
                    src={product.image}
                    alt={product.desc}
                    style={{ width: "70px", height: "70px", objectFit: "contain" }}
                  />
                </td>
                <td>{product.desc}</td>
                <td>{product.ratings} / 5</td>
                <td>{product.value}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </Container>
  );
}

export default Cart;