import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Modal
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faMinus,
  faStar
} from "@fortawesome/free-solid-svg-icons";

function DisplayProducts({ products, handleAdd, handleSubtract }) {
  const [show, setShow] = useState(false);
  const [activeProduct, setActiveProduct] = useState(null);

  const handleClose = () => setShow(false);

  const handleShow = (product) => {
    setActiveProduct(product);
    setShow(true);
  };

  return (
    <Container className="py-4">
      <Row className="g-4">
        {products.map((product) => (
          <Col md={6} lg={6} key={product.id}>
            <Card className="product-card h-100 shadow-sm">
              <Card.Body>
                <div className="text-center mb-3">
                  <img
                    src={product.image}
                    alt={product.desc}
                    className="product-img"
                    onClick={() => handleShow(product)}
                  />
                </div>

                <Card.Title className="fw-bold text-center">
                  {product.desc}
                </Card.Title>

                <Card.Text className="text-center text-muted mb-3">
                  <FontAwesomeIcon icon={faStar} className="me-2 text-warning" />
                  {product.ratings} / 5
                </Card.Text>

                <div className="d-flex justify-content-center align-items-center gap-3">
                  <Button
                    variant="danger"
                    onClick={() => handleSubtract(product.id)}
                  >
                    <FontAwesomeIcon icon={faMinus} />
                  </Button>

                  <span className="qty-box">{product.value}</span>

                  <Button
                    variant="success"
                    onClick={() => handleAdd(product.id)}
                  >
                    <FontAwesomeIcon icon={faPlus} />
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>{activeProduct ? activeProduct.desc : ""}</Modal.Title>
        </Modal.Header>

        <Modal.Body className="text-center">
          {activeProduct && (
            <>
              <img
                src={activeProduct.image}
                alt={activeProduct.desc}
                className="modal-product-img mb-3"
              />
              <p className="mb-2">
                <strong>Product:</strong> {activeProduct.desc}
              </p>
              <p className="mb-0">
                <strong>Ratings:</strong> {activeProduct.ratings} / 5
              </p>
            </>
          )}
        </Modal.Body>
      </Modal>
    </Container>
  );
}

export default DisplayProducts;