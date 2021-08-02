import App from '../App';
import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {Provider} from 'react-redux';
import {MemoryRouter as Router} from 'react-router-dom';
import {store} from '../store/store';
import {testBooks} from './booksSlice.test';

const mockJsonPromise = Promise.resolve({items: testBooks, totalItems: testBooks.length});
const mockFetchPromise = Promise.resolve({json: () => mockJsonPromise});

describe('App', () => {
  beforeEach(() => {
    render(
      <Router>
        <Provider store={store}>
          <App/>
        </Provider>
      </Router>
    );
  });

  it('app has basic components', () => {
    const infoMessage = screen.getByText(/hello/i);
    const searchButton = screen.getByRole('button');
    const searchInput = screen.getByPlaceholderText(/search/i);

    expect(infoMessage).toBeInTheDocument();
    expect(searchButton).toBeInTheDocument();
    expect(searchInput).toBeInTheDocument();
  });

  it('fetch books', async () => {
    global.fetch = jest.fn().mockImplementation(() => mockFetchPromise);

    const searchInput = screen.getByPlaceholderText(/search/i);
    const searchButton = screen.getByRole('button');

    await userEvent.type(searchInput, 'test');
    userEvent.click(searchButton);

    const booksList = await screen.findByRole('list');
    expect(booksList).toBeInTheDocument();

    const title = screen.getByText('test title 1');
    const author = screen.getByText('test author 1');
    expect(title).toBeInTheDocument();
    expect(author).toBeInTheDocument();
  });

  it('reject fetch books', async () => {
    global.fetch = jest.fn().mockImplementation(() => Promise.reject());

    const searchInput = screen.getByPlaceholderText(/search/i);
    const searchButton = screen.getByRole('button');

    await userEvent.type(searchInput, 'test');
    userEvent.click(searchButton);

    const errorMessage = await screen.findByText(/error/i);
    expect(errorMessage).toBeInTheDocument();
  });
})
