import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import styles from "./Books.module.scss";

export default function Book(props) {
  return (
    <Container fluid="md" className={`${styles.book}`}>
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
                alt=""
              />
            </Col>
            <Col className="d-flex flex-column justify-content-center align-content-start">
              <small>Título: {props.book.volumeInfo?.title}</small>
              <small>
                Autor(es): {props.book.volumeInfo?.authors?.join(", ")}
              </small>
              <small>
                Categoria(s): {props.book.volumeInfo?.categories?.join(", ")}
              </small>
              <small>Páginas: {props.book.volumeInfo?.pageCount}</small>
            </Col>
          </Row>
        </Col>
        <Col className={`${styles.description}`}>
          Descrição:{" "}
          {props.book.volumeInfo?.description
            ? props.book.volumeInfo?.description
            : "Descrição não fornecida"}
        </Col>
      </Row>
    </Container>
  );
}
