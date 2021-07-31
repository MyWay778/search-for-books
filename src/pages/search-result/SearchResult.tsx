import React, {ReactElement, useMemo} from 'react';
import {Redirect} from 'react-router-dom';
import InfoLine from '../../components/shared/info-line/InfoLine';
import {fetchBooks, setNextPage} from '../../store/slices/booksSlice';
import './styles.scss';
import useAppSelector from '../../hooks/useAppSelector';
import {selectFoundBooks, selectFoundTotalBooks, selectIsLoading} from '../../store/selectors';
import BookCardList from '../../components/book-card-list/BookCardList';
import ControlContainer from '../../components/control-container/ControlContainer';
import useAppDispatch from '../../hooks/useAppDispatch';

export default function SearchResult(): ReactElement {
  const foundBooksCount = useAppSelector(selectFoundTotalBooks);
  const foundBooks = useAppSelector(selectFoundBooks);
  const isLoading = useAppSelector(selectIsLoading);
  const {currentPage, maxResults} = useAppSelector(state => state.books);
  const dispatch = useAppDispatch();

  const showControlContainer = foundBooksCount !== null && !(currentPage + maxResults >=  foundBooksCount);

  if (foundBooksCount === null && !isLoading) {
    return <Redirect to='/'/>;
  }

  const clickOnLoadMoreHandler = () => {
    dispatch(setNextPage());
    dispatch(fetchBooks());
  }

  console.log(isLoading, foundBooks.length )
  return (
    <main className="main">
      <div className="main-container">
        {foundBooksCount !== null && (<InfoLine infoText={`Found ${foundBooksCount} results`}/>)}
        {(foundBooksCount || isLoading) &&
        <BookCardList books={foundBooks} isLoading={isLoading && foundBooks.length === 0} mt={1}/>}
        {showControlContainer && <ControlContainer onClick={clickOnLoadMoreHandler} isLoading={isLoading} mt={3}/>}
      </div>
    </main>
  )
}
