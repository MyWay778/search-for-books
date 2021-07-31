import {ReactElement, ReactNode} from 'react';
import clsx from 'clsx';
import {BookType} from '../../types/books';
import BookCard from '../book-card/BookCard';
import './style.scss';
import BookCardSkeleton from '../book-card-skeleton/BookCardSkeleton';

interface BookCardListProps {
  books: BookType[];
  isLoading: boolean;
  mt?: 1
}

export default function BookCardList({books, isLoading, mt}: BookCardListProps): ReactElement {
  const bookCardListClass = clsx('book-card-list', mt && `book-card-list_margin-top-${mt}`);

  const booksSkeleton = [];
  if (isLoading) {
    for(let i = 0; i < 10; i++) {
      booksSkeleton.push(<BookCardSkeleton key={i}/>);
    }
  }

  return (
    <ul className={bookCardListClass}>
      {isLoading ? booksSkeleton : books.map((book, i) => (
        <li className="book-card-list__item" key={book.id + i}>
          <BookCard imageSrc={book.volumeInfo.imageLinks.smallThumbnail}
                    category={book.volumeInfo.categories && (book.volumeInfo.categories[0] || '')}
                    title={book.volumeInfo.title}
                    authors={book.volumeInfo.authors?.join(', ')}/>
        </li>
      ))}
    </ul>
  )
}
