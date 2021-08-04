import React, { useState, useCallback, useEffect } from "react";

import { useParams, useHistory } from "react-router-dom";

import { Container, Row } from "react-bootstrap";
import Notifications, { notify } from "react-notify-toast";

import styles from "./Home.module.scss";

import SearchBar from "../../components/SearchBar/SearchBar";
import BooksList from "../../components/BooksList/BooksList";

import { booksService } from "../../services/book.services";
import useBooks from "../../hooks/useBooks";

export default function Home() {
  const [term, setTerm] = useState("");
  const [books, setBooks] = useState([]);
  const [totalBooks, setTotalBooks] = useState(0);
  const [actualPage, setActualPage] = useState(1);
  const [loadingParams, setLoadingParams] = useState(false);
  const [showingFavorites, setShowingFavorites] = useState(false);

  const { addFavorite, getFavorites } = useBooks();
  const { searchTerms, page } = useParams();

  const history = useHistory();

  const getStartIndex = (page) => {
    return page === 1 ? 0 : page * 20 - 20;
  };

  const search = useCallback(
    async (searchTerm, page = 1) => {
      const response = await booksService.searchBooks(
        searchTerm,
        getStartIndex(page)
      );
      if (response?.totalItems > 0) {
        window.scrollTo(0, 0);
        setLoadingParams(false);
        setTerm(searchTerm);
        setBooks([]);
        setBooks(response.items);
        setTotalBooks(response.totalItems);
        setActualPage(Number(page));
        history.push(`/results/${searchTerm}/${page}`);
      } else if (response.totalItems === 0) {
        setTerm(searchTerm);
        setBooks([]);
        notify.show(
          "Nenhum livro encontrado com os parâmetros de sua pesquisa",
          "warning"
        );
      } else {
        notify.show(response, "error");
      }
    },
    [history]
  );

  const handlePage = (page) => {
    search(term, page);
  };

  const clearResults = () => {
    setTerm("");
    setBooks([]);
    history.push("/");
  };

  const getBook = (bookId) => {
    window.scrollTo(0, 0);
    history.push(`/${bookId}`);
  };

  const checkRouteParam = useCallback(() => {
    setLoadingParams(true);
    if (searchTerms && page) {
      search(searchTerms, Number(page));
    } else {
      setLoadingParams(false);
    }
  }, [page, search, searchTerms]);

  useEffect(() => {
    checkRouteParam();
  }, [checkRouteParam]);

  const getFavoriteBooks = () => {
    const favorites = getFavorites();
    setBooks(favorites);
    setTotalBooks(favorites.length);
    setActualPage(1);
    setShowingFavorites(true);
    history.push("/favorites/books");
  };

  return (
    <Container fluid="xl" className={`min-vh-100 ${styles.bookflixWrapper}`}>
      <Notifications />
      {!loadingParams && (
        <Row
          className={`mx-auto ${
            books.length ? styles.withResults : styles.noResults
          }`}
        >
          <SearchBar
            onSearch={(searchTerm) => search(searchTerm)}
            hasResult={books.length > 0}
            clearResults={() => clearResults()}
            term={term}
            getFavorites={() => getFavoriteBooks()}
          />
          <BooksList
            totalBooks={totalBooks}
            books={books}
            activePage={actualPage}
            pageClick={(event, page) => handlePage(event, page)}
            getBook={(bookId) => getBook(bookId)}
            addFavorite={(book) => addFavorite(book)}
            hidePagination={showingFavorites}
            showingFavorites={showingFavorites}
          />
        </Row>
      )}
    </Container>
  );
}
