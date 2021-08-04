import React, { useState } from "react";

import { InputGroup, FormControl, Button } from "react-bootstrap";

import styles from "./SearchBar.module.scss";

export default function SearchBar(props) {
  const [term, setTerm] = useState("");

  return (
    <div className={styles.searchBar}>
      <h1 className="d-flex justify-content-center">BOOKFLIX</h1>
      <InputGroup className={`my-3 ${styles.inputWrapper}`}>
        <FormControl
          className={`mx-4 ${styles.input}`}
          placeholder="Buscar livros e autores"
          aria-label="Books"
          value={term}
          onChange={(e) => setTerm(e.target.value)}
          onKeyPress={(event) =>
            event.key === "Enter" && term !== "" && props.onSearch(term)
          }
        />
      </InputGroup>
      <div
        className={`d-flex justify-content-center mb-4 ${styles.buttonWrapper}`}
      >
        <Button
          variant="warning"
          className="px-4"
          onClick={() => props.getFavorites()}
        >
          Favoritos
        </Button>
        {!props.hasResult && (
          <Button variant="light" className="px-4" onClick={() => setTerm("")}>
            Limpar
          </Button>
        )}
        {props.hasResult && (
          <Button
            variant="light"
            className="px-4"
            onClick={() => {
              props.clearResults("");
              setTerm("");
            }}
          >
            Limpar resultados
          </Button>
        )}
        <Button
          onClick={() => term !== "" && props.onSearch(term)}
          variant="primary"
          className="px-4"
        >
          Buscar
        </Button>{" "}
      </div>
    </div>
  );
}
