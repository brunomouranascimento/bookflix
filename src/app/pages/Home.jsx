import React, { useState, useEffect, useCallback } from "react";

import SearchBar from "../components/SearchBar";
import { booksService } from "../services/book.services";

export default function Home() {
  const [books, setBooks] = useState([]);

  const search = useCallback(async (term) => {
    const response = await booksService.searchBooks(term);
    if (response) {
      setBooks(response);
    }
  }, []);

  return (
    <div>
      <SearchBar onSearch={(term) => search(term)} />
    </div>
  );
}
