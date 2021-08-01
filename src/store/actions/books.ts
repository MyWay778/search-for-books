import {createAsyncThunk} from '@reduxjs/toolkit';
import {RootState} from '../store';
import BooksService from '../../services/booksAPI';
import {BooksResponseData, BookType} from '../../types/books';
import constructBooksData from '../../helpers/constructBooksData';

export const fetchBooks = createAsyncThunk(
  'books/fetchBooks',
  async (_, {getState}) => {
    const {searchQuery, currentPage, maxResults} = (getState() as RootState).books;
    const {categories, sortingBy} = (getState() as RootState).searchOptions;
    const response = await BooksService.getBooks(searchQuery, currentPage, maxResults, categories, sortingBy);
    const data = await response.json() as BooksResponseData;
    let booksData: BookType[] = [];
    if (data.items && data.items.length > 0) {
      booksData = constructBooksData(data.items);
    }
    return {books: booksData, foundTotalBooks: data.totalItems};
  }
)
