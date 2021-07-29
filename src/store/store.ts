import {configureStore} from '@reduxjs/toolkit';
import booksReducer from './slices/booksSlice';

export const store = configureStore({
  reducer: {
    books: booksReducer,
  },
});

export type AppDispatch = typeof store.dispatch;