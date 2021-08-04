import React, { createContext } from "react";

export const BooksContext = createContext({});

export const BooksProvider = ({ children }) => {
  const favoriteBooks = [];

  const addFavorite = (book) => {
    favoriteBooks.push(book);
  };

  const getFavorites = () => {
    return favoriteBooks;
  };

  return (
    <BooksContext.Provider value={{ addFavorite, getFavorites }}>
      {children}
    </BooksContext.Provider>
  );
};
