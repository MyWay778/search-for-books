import {ReactElement} from 'react';
import {SearchInput} from '../shared';
import './styles.scss';
import {fetchBooks} from '../../store/slices/booksSlice';
import useAppDispatch from '../../hooks/useAppDispatch';

export default function HeaderSearchBlock(): ReactElement {
  const dispatch = useAppDispatch();

  const searchBooks = (query: string): void => {
    console.log('query ', query);
    dispatch(fetchBooks('sss'));
  }

  return (
    <div className="header__header-search-block">
      <SearchInput submitValue={searchBooks} placeholderText="Search book" maxTextLength={10}/>
    </div>
  )
}