import React from "react";

export default function BooksList(props) {
  return (
    <div>
      {props.books &&
        props.books.map((book) => (
          <div key={book.id}>{book.volumeInfo.title}</div>
        ))}
    </div>
  );
}
