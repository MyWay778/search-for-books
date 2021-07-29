import {ReactElement, ReactNode} from 'react';
import {BookType} from '../../types/books';
import BookCard from '../book-card/BookCard';
import './style.scss';

interface BookCardListProps {
  books: BookType[];
}

export default function BookCardList({books}: BookCardListProps): ReactElement {
  return (
    <ul className="book-card-list">
      {books.map(book => (
        <li className="book-card-list__item" key={book.id}>
          <BookCard imageSrc={book.volumeInfo.imageLinks.smallThumbnail} category='any' title={book.volumeInfo.title}
                    authors={book.volumeInfo.authors?.join(', ')}/>
        </li>
      ))}
    </ul>
  )
}
