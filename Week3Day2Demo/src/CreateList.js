import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";

function CreateList(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => {
    const newId =
      props.alldata.length > 0
        ? Math.max(...props.alldata.map((item) => Number(item.id))) + 1
        : 1;

    props.singledata.id = newId;
    props.singledata.title = "";
    props.singledata.author = "";

    handleClose();
    setShow(true);
  };

  return (
    <React.Fragment>
      <Button variant="primary" onClick={handleShow}>
        Create New List
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>New List</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <input type="hidden" value={props.singledata.id} readOnly />

          <input
            type="text"
            placeholder="Title"
            name="title"
            value={props.singledata.title}
            onChange={props.handleChange}
            className="form-control my-3"
          />

          <input
            type="text"
            placeholder="Author"
            name="author"
            value={props.singledata.author}
            onChange={props.handleChange}
            className="form-control my-3"
          />
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>

          <Button
            variant="primary"
            onClick={() => {
              handleClose();
              props.createList();
            }}
          >
            Create
          </Button>
        </Modal.Footer>
      </Modal>
    </React.Fragment>
  );
}

export default CreateList;