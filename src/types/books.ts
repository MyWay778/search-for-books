export interface BooksResponseData {
  items: BookType[];
  totalItems: number;
}

export interface BookType {
  id: string;
  volumeInfo: {
    title: string,
    authors: string[],
    imageLinks: {
      smallThumbnail: string,
      thumbnail: string,
    },
    description: string,
    categories: string[],
  };
}
