import React, { useCallback, useState, useEffect } from "react";

import { useParams } from "react-router-dom";

import { Container, Row, Col } from "react-bootstrap";

import Notifications, { notify } from "react-notify-toast";

import { booksService } from "../../services/book.services";

export default function Book() {
  const [book, setBook] = useState();
  const { id } = useParams();

  const getBook = useCallback(async () => {
    const response = await booksService.getBook(id);
    if (response.volumeInfo) {
      setBook(response.volumeInfo);
    } else {
      notify.show(response, "error");
    }
  }, [id]);

  useEffect(() => {
    getBook();
  }, [getBook]);

  return (
    <Container fluid="xl" className="min-vh-100 mt-5">
      <Notifications />
      <Row className="mx-auto">
        <Col className="d-flex justify-content-center">
          <img src={book?.imageLinks?.thumbnail} alt="capa do livro" />
        </Col>
      </Row>
      <Row className="mt-4 d-flex align-items-center">
        <Col className="d-flex flex-column align-items-center">
          <h3>
            <strong>{book?.title}</strong>
          </h3>
          <small>
            <strong>Autor(es):</strong>
            {book?.authors?.join(", ")}
          </small>
          <small>
            <strong>Categoria(s):</strong>
            {book?.categories?.join(", ")}
          </small>
          <small>
            <strong>Páginas:</strong>
            {book?.pageCount}
          </small>
        </Col>
      </Row>
      <Row className="mt-5 mb-3 d-flex align-items-center">
        <h4 className="text-center">
          <strong>Descrição</strong>
        </h4>
      </Row>
      <Row>
        <span>{book?.description}</span>
      </Row>
    </Container>
  );
}
