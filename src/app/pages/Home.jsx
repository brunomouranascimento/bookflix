import React, { useState, useCallback } from "react";
import { Container, Row } from "react-bootstrap";

import SearchBar from "../components/SearchBar";
import BooksList from "../components/BooksList";

import { booksService } from "../services/book.services";

export default function Home() {
  const [books, setBooks] = useState([]);

  const search = useCallback(async (term) => {
    const response = await booksService.searchBooks(term);
    if (response) {
      setBooks(response.items);
    }
  }, []);

  return (
    <Container>
      <Row>
        <SearchBar onSearch={(term) => search(term)} />
        <BooksList books={books} />
      </Row>
    </Container>
  );
}
