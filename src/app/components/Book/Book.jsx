import React from "react";

import { Container, Row, Col, Button } from "react-bootstrap";

import styles from "./Books.module.scss";

export default function Book(props) {
  return (
    <Container fluid="md" className={`${styles.book}`}>
      <Row className={`${styles.bookWrapper}`}>
        <Col>
          <Row>
            <Col className={styles.bookImage}>
              <img
                src={
                  props.book.volumeInfo.imageLinks?.smallThumbnail
                    ? props.book.volumeInfo.imageLinks?.smallThumbnail
                    : "https://w4.ezcdn.com.br/oficinadosbits/files/_fotos/semfoto.gif"
                }
                alt="capa do livro"
              />
            </Col>
            <Col
              className={`d-flex flex-column justify-content-center align-content-start ${styles.bookInfo}`}
            >
              <small>
                <strong>Título:</strong>
                {props.book.volumeInfo?.title}
              </small>
              <small>
                <strong>Autor(es):</strong>
                {props.book.volumeInfo?.authors?.join(", ")}
              </small>
              <small>
                <strong>Categoria(s):</strong>
                {props.book.volumeInfo?.categories?.join(", ")}
              </small>
              <small>
                <strong>Páginas:</strong>
                {props.book.volumeInfo?.pageCount}
              </small>
            </Col>
          </Row>
        </Col>
        <Col className={`${styles.favButton} mt-3`}>
          {!props.hideFavButton && (
            <Button
              variant="warning"
              className="ml-3 px-4"
              onClick={() => props.addFavorite(props.book)}
            >
              Favoritar
            </Button>
          )}
          <Button
            variant="primary"
            className="ml-3 px-4"
            onClick={() => props.onClick()}
          >
            Detalhes
          </Button>{" "}
        </Col>
      </Row>
    </Container>
  );
}
