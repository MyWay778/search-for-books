import {ReactElement} from 'react';
import clsx from 'clsx';
import {BookType} from '../../types/books';
import './style.scss';
import {BookCard, BookCardSkeleton} from '../index';

interface BookCardListProps {
  books: BookType[];
  isLoading: boolean;
  mt?: 1
  bookCardClickHandler?: (bookId: string) => void;
}

export default function BookCardList({books, isLoading, mt, bookCardClickHandler}: BookCardListProps): ReactElement {
  const bookCardListClass = clsx('book-card-list', mt && `book-card-list_margin-top-${mt}`);

  const booksSkeleton = [];
  if (isLoading) {
    for (let i = 0; i < 10; i++) {
      booksSkeleton.push(<BookCardSkeleton key={i}/>);
    }
  }

  return (
    <ul className={bookCardListClass}>
      {isLoading ? booksSkeleton : books.map((book, i) => {

        let bookCardHandler;
        if (bookCardClickHandler) {
          bookCardHandler = (): void => {
            bookCardClickHandler(book.id)
          }
        }

        return (
          <li className="book-card-list__item" key={book.id + i}>
            <BookCard imageSrc={book.volumeInfo.imageLinks.smallThumbnail}
                      category={book.volumeInfo.categories && (book.volumeInfo.categories[0] || '')}
                      title={book.volumeInfo.title}
                      authors={book.volumeInfo.authors?.join(', ')}
                      onClick={bookCardHandler}
            />
          </li>
        )
      })}
    </ul>
  )
}
