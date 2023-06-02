import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const NotFoundCom = () => {
  return (
    <div className=" d-flex justify-content-between align-items-center h-100  ">
      <Container>
        <Row>
          <Col md={8} className="mx-auto text-center">
            <h1>404</h1>
            <p>Page Not Found</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default NotFoundCom;
