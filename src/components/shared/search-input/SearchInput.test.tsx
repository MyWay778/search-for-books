import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SearchInput from './SearchInput';

describe('SearchInput component', () => {

  it('render input', () => {
    render(<SearchInput/>);
    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });

  it('render button', () => {
    render(<SearchInput/>);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('show placeholder', () => {
    render(<SearchInput placeholderText="test"/>);
    expect(screen.getByPlaceholderText(/test/)).toBeInTheDocument();
  });

  it('limit maxLength', () => {
    render(<SearchInput maxTextLength={5}/>);
    const input = screen.getByRole('textbox') as HTMLInputElement;

    expect(input.maxLength).toBe(5);
  });
});