import React, { useState, useCallback } from "react";
import { Container, Row } from "react-bootstrap";
import Notifications, { notify } from "react-notify-toast";

import styles from "./Home.module.scss";

import SearchBar from "../../components/SearchBar";
import BooksList from "../../components/BooksList";

import { booksService } from "../../services/book.services";

export default function Home() {
  const [term, setTerm] = useState("");
  const [books, setBooks] = useState([]);
  const [totalBooks, setTotalBooks] = useState(0);
  const [actualPage, setActualPage] = useState(1);

  const getStartIndex = (page) => {
    return page === 1 ? 0 : page * 20 - 20;
  };

  const search = useCallback(async (searchTerm, page = 1) => {
    const response = await booksService.searchBooks(
      searchTerm,
      getStartIndex(page)
    );
    if (response?.items) {
      setTerm(searchTerm);
      setBooks([]);
      setBooks(response.items);
      setTotalBooks(response.totalItems);
      setActualPage(page);
      window.scrollTo(0, 0);
    } else {
      notify.show(response, "error");
    }
  }, []);

  const handlePage = (event, page) => {
    search(term, page);
  };

  return (
    <Container fluid="xl" className={`min-vh-100 ${styles.bookflixWrapper}`}>
      <Notifications />
      <Row
        className={`mx-auto ${
          books.length ? styles.withResults : styles.noResults
        }`}
      >
        <SearchBar onSearch={(searchTerm) => search(searchTerm)} />
        <BooksList
          totalBooks={totalBooks}
          books={books}
          activePage={actualPage}
          pageClick={(event, page) => handlePage(event, page)}
        />
      </Row>
    </Container>
  );
}
