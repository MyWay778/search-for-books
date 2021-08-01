import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {BookType} from '../../types/books';
import {fetchBooks} from '../actions/books';

interface BooksState {
  searchQuery: string;
  books: BookType[];
  foundTotalBooks: number | null;
  status: 'idle' | 'loading' | 'failed';
  currentPage: number;
  maxResults: number;
}

const initialState: BooksState = {
  searchQuery: '',
  books: [],
  status: 'idle',
  foundTotalBooks: null,
  currentPage: 0,
  maxResults: 30,
}

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    setSearchQuery: (state, action: PayloadAction<string>) => {
      state.currentPage = 0;
      state.books = [];
      state.foundTotalBooks = null;
      state.searchQuery = action.payload;
    },
    setBooks: (state, action: PayloadAction<BookType[]>) => {
      state.books = action.payload;
    },
    setNextPage: (state) => {
      state.currentPage += state.maxResults;
    },
    cleanup: (state) => {
      state.searchQuery = '';
      state.books = [];
      state.currentPage = 0;
    }
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchBooks.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(fetchBooks.fulfilled, (state, action) => {
        if (state.currentPage > 0) {
          state.books = state.books.concat(action.payload.books);
        } else {
          state.books = action.payload.books;
        }
        state.foundTotalBooks = action.payload.foundTotalBooks;
        state.status = 'idle';
      })
      .addCase(fetchBooks.rejected, (state, action) => {
        state.status = 'failed';
        console.log('reject', action);
      });
  }
})

export const {cleanup, setBooks, setSearchQuery, setNextPage} = booksSlice.actions;
export default booksSlice.reducer;
