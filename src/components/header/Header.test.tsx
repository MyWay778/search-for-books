import {render} from '@testing-library/react';
import Header from './Header';

describe('Header component', () => {
  it('render children', () => {
    const title = <h1>test</h1>;

    const {getByText} = render(<Header>{title}</Header>)
    expect(getByText(/test/)).toBeInTheDocument();
  });
});