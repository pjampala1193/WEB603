import React, { useMemo } from "react";
import { Card, ListGroup, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function Checkout({ products }) {
  const navigate = useNavigate();

  const isLoggedIn = localStorage.getItem("fbLoggedIn") === "true";
  const fbUser = localStorage.getItem("fbUser") || "Facebook User";

  const cartItems = products.filter((product) => product.value > 0);

  const totalItems = useMemo(() => {
    return cartItems.reduce((sum, item) => sum + item.value, 0);
  }, [cartItems]);

  if (!isLoggedIn) {
    return (
      <Card className="checkout-card shadow p-4">
        <Card.Body className="text-center">
          <h2 className="mb-3">Check Out</h2>
          <p className="mb-4">You must sign in before checking out.</p>
          <Button onClick={() => navigate("/signin")}>Go to Sign In</Button>
        </Card.Body>
      </Card>
    );
  }

  return (
    <Card className="checkout-card shadow p-4">
      <Card.Body>
        <h2 className="text-center mb-3">Check Out</h2>
        <p className="text-center text-muted mb-4">
          Signed in as {fbUser}
        </p>

        {cartItems.length === 0 ? (
          <div className="text-center">
            <p>Your cart is empty.</p>
            <Button onClick={() => navigate("/")}>Continue Shop</Button>
          </div>
        ) : (
          <>
            <ListGroup className="checkout-list mb-4">
              {cartItems.map((item) => (
                <ListGroup.Item
                  key={item.id}
                  className="d-flex align-items-center justify-content-between"
                >
                  <div className="d-flex align-items-center">
                    <img src={item.image} alt={item.desc} />
                    <div>
                      <div className="fw-bold">{item.desc}</div>
                      <div className="text-muted">Rating: {item.ratings} / 5</div>
                    </div>
                  </div>
                  <div>Qty: {item.value}</div>
                </ListGroup.Item>
              ))}
            </ListGroup>

            <div className="checkout-total text-center mb-3">
              Total Items: {totalItems}
            </div>

            <div className="text-center">
              <Button variant="success" className="me-2">
                Place Order
              </Button>
              <Button variant="secondary" onClick={() => navigate("/")}>
                Continue Shop
              </Button>
            </div>
          </>
        )}
      </Card.Body>
    </Card>
  );
}

export default Checkout;