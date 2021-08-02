import axios from "axios";

export const booksService = {
  searchBooks,
};

const api = axios.create({
  baseURL: `https://www.googleapis.com/books/v1`,
});

async function searchBooks(term, startIndex) {
  try {
    const response = await api.get(
      `/volumes?q=${term}+inauthor:${term}+inpublisher:${term}&maxResults=20&startIndex=${startIndex}&key=${process.env.REACT_APP_API_KEY}`
    );
    return response.data;
  } catch (error) {
    console.error(error);

    return error.message;
  }
}
