import { Library, Book } from "../src/library";

describe("Library Management System", () => {
  let library: Library;

  beforeEach(() => {
    library = new Library();
  });

  // tests the add book feature
  test("should add a new book to the library", () => {
    const book: Book = {
      ISBN: "123456",
      title: "The Hobbit",
      author: "Tolkien",
      publicationYear: 1937,
    };

    library.addBook(book);

    expect(library.viewAvailableBooks()).toEqual([
      { ...book, isAvailable: true },
    ]);
  });

  // tests the borrow book feature
  test("should borrow an available book", () => {
    const book: Book = {
      ISBN: "123456",
      title: "The Hobbit",
      author: "Tolkien",
      publicationYear: 1937,
    };

    library.addBook(book);
    library.borrowBook("123456");

    expect(library.viewAvailableBooks()).toEqual([]);
  });

  test("should throw an error if the book is unavailable", () => {
    expect(() => library.borrowBook("9999")).toThrow("Book not available");
  });

  // tests the return borrowed book feature
  test("should return a borrowed book", () => {
    const book: Book = {
      ISBN: "123456",
      title: "The Hobbit",
      author: "Tolkien",
      publicationYear: 1937,
    };

    library.addBook(book);
    library.borrowBook("123456");
    library.returnBook("123456");

    expect(library.viewAvailableBooks()).toEqual([
      { ...book, isAvailable: true },
    ]);
  });

  test("should throw an error if returning a book that is not borrowed", () => {
    expect(() => library.returnBook("1234")).toThrow(
      "Book not found or already available"
    );
  });
});
