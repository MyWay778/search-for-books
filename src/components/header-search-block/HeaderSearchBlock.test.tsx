import {render, screen} from '@testing-library/react';
import HeaderSearchBlock from './HeaderSearchBlock';
import {MemoryRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import {store} from '../../store/store';

describe('HeaderSearchBlock', () => {
  it('render', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <Provider store={store}>
          <HeaderSearchBlock/>
        </Provider>
      </MemoryRouter>
    );
    expect(screen.getByTestId('header-search-block')).toBeInTheDocument();
  });
});
