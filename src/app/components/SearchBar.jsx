import React from "react";

import { Container, Row, InputGroup, FormControl } from "react-bootstrap";

export default function SearchBar() {
  return (
    <Container>
      <Row>
        <h1 className="flex">Bookflix</h1>
        <InputGroup className="mb-3">
          <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
          <FormControl
            placeholder="Username"
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
        </InputGroup>
      </Row>
    </Container>
  );
}
