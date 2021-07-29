const apiConfig = {
  baseURL: 'https://www.googleapis.com/books/v1',
  apiKey: 'AIzaSyC26Es5eJDrBPR8Rkgi51B4O5WImfiHtSk',
}

const defaultQ = 'flowers+inauthor:keyes';

export default class BooksService {
  static async getBooks(query: string, startIndex: number, maxResults: number): Promise<Response> {
    return await fetch(`${apiConfig.baseURL}/volumes?q=${defaultQ}&startIndex=${startIndex}&maxResults=${maxResults}&key=${apiConfig.apiKey}`);
  }
}
