import React, { useState } from "react";

import { Container, Row, InputGroup, FormControl } from "react-bootstrap";

export default function SearchBar(props) {
  const [term, setTerm] = useState("");

  return (
    <Container>
      <Row>
        <h1 className="flex">Bookflix</h1>
        <InputGroup className="mb-3">
          <FormControl
            placeholder="Buscar livros, autores e editoras"
            aria-label="Books"
            value={term}
            onChange={(e) => setTerm(e.target.value)}
            onKeyPress={(event) =>
              event.key === "Enter" && term !== "" && props.onSearch(term)
            }
          />
        </InputGroup>
      </Row>
    </Container>
  );
}
