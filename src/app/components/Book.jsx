import React from "react";

import { Container, Row, Col } from "react-bootstrap";

export default function Book(props) {
  return (
    <Container fluid="md mb-3">
      <Row>
        <Col>{props.book.volumeInfo?.title}</Col>
        <Col>{props.book.volumeInfo?.description}</Col>
      </Row>
    </Container>
  );
}
