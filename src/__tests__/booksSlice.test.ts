import {render} from '@testing-library/react';
import {store} from '../store/store';
import {setSearchQuery, setBooks, setNextPage, cleanup} from '../store/slices/booksSlice';
import {BookType} from '../types/books';

export const testBooks: BookType[] = [
  {
    id: '1',
    volumeInfo: {
      title: 'test title 1',
      description: 'test description 1',
      imageLinks: {thumbnail: '', smallThumbnail: ''},
      categories: ['test category 1'],
      authors: ['test author 1'],
    }
  },
  {
    id: '2',
    volumeInfo: {
      title: 'test title 2',
      description: 'test description 2',
      imageLinks: {thumbnail: '', smallThumbnail: ''},
      categories: ['test category 2'],
      authors: ['test author 2'],
    }
  }
];

describe('booksSlice reducer', () => {
  it('set search query', () => {
    let state = store.getState();
    expect(state.books.searchQuery).toBe('');
    store.dispatch(setSearchQuery('test query'));

    state = store.getState();
    expect(state.books.searchQuery).toBe('test query');
  });

  it('set books', () => {
    let state = store.getState();
    expect(state.books.books.length).toBe(0);

    store.dispatch(setBooks(testBooks));
    state = store.getState();
    expect(state.books.books.length).toBeGreaterThan(0);
  });

  it('set next page', () => {
    let {currentPage, maxResults} = store.getState().books;
    expect(currentPage).toBe(0);

    store.dispatch(setNextPage());
    ({currentPage} = store.getState().books);
    expect(currentPage).toBe(maxResults);
  });

  it('cleanup', () => {
    let {searchQuery, books, currentPage} = store.getState().books;
    expect(searchQuery).toBe('test query');
    expect(books.length).toBeGreaterThan(0);
    expect(currentPage).not.toBe(0);

    store.dispatch(cleanup());
    ({searchQuery, books, currentPage} = store.getState().books);
    expect(searchQuery).toBe('');
    expect(books.length).toBe(0);
    expect(currentPage).toBe(0);
  })
});
