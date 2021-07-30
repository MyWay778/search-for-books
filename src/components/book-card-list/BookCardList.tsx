import {ReactElement, ReactNode} from 'react';
import clsx from 'clsx';
import {BookType} from '../../types/books';
import BookCard from '../book-card/BookCard';
import './style.scss';
import BookCardSkeleton from '../book-card-skeleton/BookCardSkeleton';

interface BookCardListProps {
  books: BookType[];
  mt?: 1
}

export default function BookCardList({books, mt}: BookCardListProps): ReactElement {
  const bookCardListClass = clsx('book-card-list', mt && `book-card-list_margin-top-${mt}`);
  const booksSkeleton = Array(10).fill(<BookCardSkeleton/>);

  return (
    <ul className={bookCardListClass}>
      {true ? booksSkeleton : books.map(book => (
        <li className="book-card-list__item" key={book.id}>
          <BookCard imageSrc={book.volumeInfo.imageLinks.smallThumbnail} category={book.volumeInfo.categories[0]} title={book.volumeInfo.title}
                    authors={book.volumeInfo.authors?.join(', ')}/>
        </li>
      ))}
    </ul>
  )
}
