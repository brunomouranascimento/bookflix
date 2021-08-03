import React from "react";

import { Container, Row, Col } from "react-bootstrap";

import styles from "./Books.module.scss";

export default function Book(props) {
  return (
    <Container
      fluid="md"
      className={`${styles.book}`}
      onClick={() => props.onClick()}
    >
      <Row>
        <Col>
          <Row>
            <Col>
              <img
                src={
                  props.book.volumeInfo.imageLinks?.smallThumbnail
                    ? props.book.volumeInfo.imageLinks?.smallThumbnail
                    : "https://w4.ezcdn.com.br/oficinadosbits/files/_fotos/semfoto.gif"
                }
                alt="capa do livro"
              />
            </Col>
            <Col className="d-flex flex-column justify-content-center align-content-start">
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
        <Col className={`${styles.description}`}>
          <strong>Descrição: </strong>
          {props.book.volumeInfo?.description
            ? props.book.volumeInfo?.description
            : "Descrição não fornecida"}
        </Col>
      </Row>
    </Container>
  );
}
