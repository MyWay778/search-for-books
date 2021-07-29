import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import BooksService from '../../services/booksAPI';
import {BooksResponseData, BookType} from '../../types/books';

interface BooksState {
  books: BookType[];
  status: 'idle' | 'loading' | 'failed';
}

export const fetchBooks = createAsyncThunk(
  'books/fetchBooks',
  async (query: string, {dispatch}) => {
    const response = await BooksService.getBooks('tretre', 0, 10);
    const data = await response.json() as BooksResponseData;
    return data;
  }
)

const initialState: BooksState = {
  books: [],
  status: 'idle',
}

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    setBooks: (state, action: PayloadAction<BookType[]>) => {
      state.books = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBooks.fulfilled, (state, action) => {
      state.books = action.payload.items.map(book => ({id: book.id, volumeInfo: {title: book.volumeInfo.title, authors: book.volumeInfo.authors}}));
    })
      .addCase(fetchBooks.rejected, (state, action) => {
      console.log('reject', action);
    });
  }
})

const {setBooks} = booksSlice.actions;

export default booksSlice.reducer;
