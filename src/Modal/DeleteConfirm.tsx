import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

type DeleteConfirmProps = {
  show: any;
  onHide: any;
  deleteCustomer: any;
  item: any;
};

const DeleteConfirm: React.FC<DeleteConfirmProps> = ({ ...props }) => {
  return (
    <Modal
      {...props}
      size="sm"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Delete Customer
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Need to conformation</h4>
        <p>{`You realy need to delete ${props.item.firstName} ${props.item.lastName}`}</p>
      </Modal.Body>

      <Modal.Footer>
        <Button onClick={props.onHide} variant="secondary">
          Close
        </Button>
        <Button onClick={props.deleteCustomer} variant="danger">
          Delete
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default DeleteConfirm;
