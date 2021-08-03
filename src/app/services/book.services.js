import axios from "axios";

export const booksService = {
  searchBooks,
  getBook,
};

const api = axios.create({
  baseURL: `https://www.googleapis.com/books/v1`,
});

async function searchBooks(term, startIndex) {
  try {
    const response = await api.get(
      `/volumes?q=${term}+inauthor:${term}+intitle:${term}+inpublisher:${term}&maxResults=20&startIndex=${startIndex}&key=${process.env.REACT_APP_API_KEY}`
    );
    return response.data;
  } catch (error) {
    console.error(error);

    return error.message;
  }
}

async function getBook(id) {
  try {
    const response = await api.get(
      `/volumes/${id}?key=${process.env.REACT_APP_API_KEY}`
    );
    return response.data;
  } catch (error) {
    console.error(error);

    return error.message;
  }
}
