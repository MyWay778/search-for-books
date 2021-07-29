const apiConfig = {
  baseURL: 'https://www.googleapis.com/books/v1',
  apiKey: 'AIzaSyC26Es5eJDrBPR8Rkgi51B4O5WImfiHtSk',
}

export default class BooksService {
  static async getBooks(query: string, startIndex: number, maxResults: number): Promise<Response> {
    return await fetch(`${apiConfig.baseURL}/volumes?q=${query}&startIndex=${startIndex}&maxResults=${maxResults}&projection=lite&key=${apiConfig.apiKey}`);
  }
}
