import React from "react";
import Pagination from "react-bootstrap/Pagination";

import Book from "./Book";

export default function BooksList(props) {
  return (
    <div>
      {props.books &&
        props.books.map((book) => <Book key={book.id} book={book} />)}
      {props.books?.length > 0 && (
        <Pagination className="justify-content-md-center">
          <Pagination.First onClick={props.goFirst} />
          <Pagination.Prev onClick={props.goPrev} />
          {Array.apply(null, { length: Math.ceil(props.totalBooks / 20) }).map(
            (e, i) => (
              <Pagination.Item
                onClick={(event) => props.pageClick(event, i + 1)}
                key={i}
                active={props.activePage === i + 1}
              >
                {i + 1}
              </Pagination.Item>
            )
          )}
          <Pagination.Next />
          <Pagination.Last />
        </Pagination>
      )}
    </div>
  );
}
