import React from "react";

import { BooksProvider } from "./BooksContext";

const ProviderContexts = ({ children }) => (
  <BooksProvider>{children}</BooksProvider>
);

export default ProviderContexts;
