import React, {ReactElement} from 'react';
import InfoLine from '../../components/shared/info-line/InfoLine';
import './styles.scss';
import useAppSelector from '../../hooks/useAppSelector';
import {selectFoundBooks, selectFoundTotalBooks} from '../../store/selectors';
import BookCardList from '../../components/book-card-list/BookCardList';

export default function SearchResult (): ReactElement {
  const foundBooksCount = useAppSelector(selectFoundTotalBooks);
  const foundBooks = useAppSelector(selectFoundBooks);

  return (
    <main className="main">
      <div className="main-container">
        <InfoLine infoText={`Found ${foundBooksCount} results`}/>
        <BookCardList books={foundBooks}/>
      </div>
    </main>
  )
}