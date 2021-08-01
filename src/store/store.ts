import {configureStore} from '@reduxjs/toolkit';
import booksReducer from './slices/booksSlice';
import searchOptionsReducer from './slices/searchOptionsSlice';

export const store = configureStore({
  reducer: {
    books: booksReducer,
    searchOptions: searchOptionsReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;