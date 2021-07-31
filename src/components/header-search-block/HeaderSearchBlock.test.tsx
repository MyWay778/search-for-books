import {render, screen} from '@testing-library/react';
import HeaderSearchBlock from './HeaderSearchBlock';
import {Provider} from 'react-redux';
import {store} from '../../store/store';

describe('HeaderSearchBlock', () => {
  it('render', () => {
    render(<Provider store={store}><HeaderSearchBlock/></Provider>);
    expect(screen.getByTestId('header-search-block')).toBeInTheDocument();
  });
});
