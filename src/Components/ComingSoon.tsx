import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const ComingSoon = () => {
  return (
    <div className=" d-flex justify-content-between align-items-center h-100 ">
      <Container>
        <Row>
          <Col md={8} className="mx-auto text-center">
            <h1>Coming Soon</h1>
            <p>We're working hard to bring you an amazing website.</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ComingSoon;
