import React from "react";

import Pagination from "react-bootstrap/Pagination";

import Book from "../Book/Book";

export default function BooksList(props) {
  return (
    <div>
      {props.books &&
        props.books.map((book) => (
          <Book
            key={book.id}
            book={book}
            onClick={() => props.getBook(book.id)}
            addFavorite={() => props.addFavorite(book)}
            hideFavButton={props.showingFavorites}
          />
        ))}
      {props.books?.length > 0 && !props.hidePagination && (
        <Pagination className="justify-content-md-center mt-5">
          <Pagination.First onClick={props.goFirst} />
          <Pagination.Prev onClick={props.goPrev} />
          {Array.apply(null, {
            length: Math.ceil(props.totalBooks / 20),
          }).map((e, i) => (
            <Pagination.Item
              onClick={() => props.pageClick(i + 1)}
              key={i}
              active={props.activePage === i + 1}
            >
              {i + 1}
            </Pagination.Item>
          ))}
          <Pagination.Next />
          <Pagination.Last />
        </Pagination>
      )}
    </div>
  );
}
