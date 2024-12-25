import { Library } from '../src/library';

describe('Library Management System', () => {
  let library: Library;

  beforeEach(() => {
    library = new Library();
  });

  test('should add a book to the library', () => {
    const book = {
      isbn: '12345',
      title: 'TypeScript Basics',
      author: 'John Doe',
      publicationYear: 2023,
    };
    library.addBook(book);

    const availableBooks = library.viewAvailableBooks();
    expect(availableBooks.length).toBe(1);
    expect(availableBooks[0].isbn).toBe(book.isbn);
  });

  test('should borrow a book from the library', () => {
    const book = {
      isbn: '12345',
      title: 'TypeScript Basics',
      author: 'John Doe',
      publicationYear: 2023,
    };
    library.addBook(book);

    library.borrowBook('12345');
    const availableBooks = library.viewAvailableBooks();
    expect(availableBooks.length).toBe(0);
  });

  test('should throw error when borrowing an already borrowed book', () => {
    const book = {
      isbn: '12345',
      title: 'TypeScript Basics',
      author: 'John Doe',
      publicationYear: 2023,
    };
    library.addBook(book);
    library.borrowBook('12345');

    expect(() => library.borrowBook('12345')).toThrowError('Book is already borrowed');
  });

  test('should return a borrowed book', () => {
    const book = {
      isbn: '12345',
      title: 'TypeScript Basics',
      author: 'John Doe',
      publicationYear: 2023,
    };
    library.addBook(book);
    library.borrowBook('12345');
    library.returnBook('12345');

    const availableBooks = library.viewAvailableBooks();
    expect(availableBooks.length).toBe(1);
    expect(availableBooks[0].isbn).toBe('12345');
  });

  test('should throw error when returning a book that was not borrowed', () => {
    const book = {
      isbn: '12345',
      title: 'TypeScript Basics',
      author: 'John Doe',
      publicationYear: 2023,
    };
    library.addBook(book);

    expect(() => library.returnBook('12345')).toThrowError('Book was not borrowed');
  });

  test('should throw error when borrowing a non-existent book', () => {
    expect(() => library.borrowBook('non-existent')).toThrowError('Book not found');
  });

  test('should throw error when returning a non-existent book', () => {
    expect(() => library.returnBook('non-existent')).toThrowError('Book not found');
  });
});
