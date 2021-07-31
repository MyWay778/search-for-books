import {BookType} from '../types/books';

const constructBooksData = (books: BookType[]): BookType[] => {
  return books.map(book => ({
    id: book.id,
    volumeInfo: {
      title: book.volumeInfo.title,
      authors: book.volumeInfo.authors,
      imageLinks: {
        smallThumbnail: book.volumeInfo.imageLinks?.smallThumbnail,
      },
      categories: book.volumeInfo.categories,
    },
  }));
}

export default constructBooksData;
