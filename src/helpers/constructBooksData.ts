import {BookType} from '../types/books';

const constructBooksData = (books: BookType[]): BookType[] => {
  return books.map(book => ({
    id: book.id,
    volumeInfo: {
      title: book.volumeInfo.title,
      authors: book.volumeInfo.authors,
      imageLinks: {
        smallThumbnail: book.volumeInfo.imageLinks?.smallThumbnail,
        thumbnail: book.volumeInfo.imageLinks?.smallThumbnail.replace(/(?<=zoom=)\d/, '2'),
      },
      description: book.volumeInfo.description,
      categories: book.volumeInfo.categories,
    },
  }));
}

export default constructBooksData;
