import React from "react";
import { Container, Row, Col, Card, Button, Form } from "react-bootstrap";

function DisplayProducts({
  products,
  handleAdd,
  handleSubtract,
  sortType,
  handleSortChange
}) {
  return (
    <Container className="mt-4">
      <Row className="mb-4">
        <Col md={4}>
          <Form.Group>
            <Form.Label className="fw-bold">Sort By Price</Form.Label>
            <Form.Select value={sortType} onChange={handleSortChange}>
              <option value="normal">Normal</option>
              <option value="lowest">Lowest</option>
              <option value="highest">Highest</option>
            </Form.Select>
          </Form.Group>
        </Col>
      </Row>

      <Row>
        {products.map((product) => (
          <Col md={3} sm={6} xs={12} className="mb-4" key={product.id}>
            <Card className="h-100 shadow-sm">
              <Card.Img
                variant="top"
                src={product.image}
                alt={product.desc}
                style={{ height: "220px", objectFit: "contain", padding: "15px" }}
              />

              <Card.Body className="d-flex flex-column">
                <Card.Title>{product.desc}</Card.Title>
                <Card.Text className="mb-2">
                  <strong>Price:</strong> ${product.price}
                </Card.Text>
                <Card.Text className="mb-3">
                  <strong>Ratings:</strong> {product.ratings}
                </Card.Text>

                <div className="mt-auto d-flex align-items-center justify-content-center gap-2">
                  <Button variant="success" onClick={() => handleAdd(product.id)}>
                    +
                  </Button>

                  <Form.Control
                    type="text"
                    value={product.value}
                    readOnly
                    style={{ width: "60px", textAlign: "center" }}
                  />

                  <Button
                    variant="danger"
                    onClick={() => handleSubtract(product.id)}
                  >
                    -
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default DisplayProducts;