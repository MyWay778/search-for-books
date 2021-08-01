const apiConfig = {
  baseURL: 'https://www.googleapis.com/books/v1',
  apiKey: 'AIzaSyC26Es5eJDrBPR8Rkgi51B4O5WImfiHtSk',
}

export default class BooksService {
  static async getBooks(query: string, startIndex: number, maxResults: number, categories?: string, sortingBy?: string): Promise<Response> {
    return await fetch(`${apiConfig.baseURL}/volumes?q=${query}${categories && `+subject:${categories}`}${sortingBy && `&orderBy=${sortingBy}`}&startIndex=${startIndex}&maxResults=${maxResults}&key=${apiConfig.apiKey}`);
  }
}
