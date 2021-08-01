import React from "react";
import Book from "./Book";

export default function BooksList(props) {
  return (
    <div>
      {props.books &&
        props.books.map((book) => <Book key={book.id} book={book} />)}
    </div>
  );
}
