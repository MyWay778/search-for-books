import {RootState} from './store';

export const selectFoundTotalBooks = (state: RootState) => state.books.foundTotalBooks;
export const selectFoundBooks = (state: RootState) => state.books.books;
export const selectIsLoading = (state: RootState): boolean => state.books.status === 'loading';
