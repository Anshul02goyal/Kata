interface Book {
    isbn: string;
    title: string;
    author: string;
    publicationYear: number;
    isAvailable: boolean;
  }
  
  export class Library {
    private books: Book[] = [];
  
    // Add a new book to the library
    addBook(book: Omit<Book, 'isAvailable'>): void {
      const newBook: Book = { ...book, isAvailable: true };
      this.books.push(newBook);
    }
  
    // Borrow a book by its ISBN
    borrowBook(isbn: string): void {
      const book = this.books.find(b => b.isbn === isbn);
      if (!book) {
        throw new Error("Book not found");
      }
      if (!book.isAvailable) {
        throw new Error("Book is already borrowed");
      }
      book.isAvailable = false;
    }
  
    // Return a borrowed book by its ISBN
    returnBook(isbn: string): void {
      const book = this.books.find(b => b.isbn === isbn);
      if (!book) {
        throw new Error("Book not found");
      }
      if (book.isAvailable) {
        throw new Error("Book was not borrowed");
      }
      book.isAvailable = true;
    }
  
    // View all available books
    viewAvailableBooks(): Book[] {
      return this.books.filter(book => book.isAvailable);
    }
  }
  