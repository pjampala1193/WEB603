import React from "react";
import { Container, Table, Alert, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function Cart({ products, totalQty }) {
  const cartItems = products.filter((product) => product.value > 0);
  const navigate = useNavigate();

  return (
    <Container className="py-4">
      <h2 className="mb-4 text-center">Shopping Cart</h2>

      {cartItems.length === 0 ? (
        <div className="empty-cart-box text-center">
          <Alert variant="warning" className="mb-3">
            Your cart has {totalQty} item(s).
          </Alert>

          <Button variant="primary" onClick={() => navigate("/")}>
            Continue Shop
          </Button>
        </div>
      ) : (
        <>
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
                      style={{
                        width: "70px",
                        height: "70px",
                        objectFit: "contain"
                      }}
                    />
                  </td>
                  <td>{product.desc}</td>
                  <td>{product.ratings} / 5</td>
                  <td>{product.value}</td>
                </tr>
              ))}
            </tbody>
          </Table>

          <div className="text-center mt-4">
            <Button variant="success" size="lg" onClick={() => navigate("/signin")}>
              Check Out
            </Button>
          </div>
        </>
      )}
    </Container>
  );
}

export default Cart;