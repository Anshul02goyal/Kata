import {Library, Book} from "../src/library";

describe("Library Management System", () =>{
    let library: Library;

    beforeEach(() =>{
        library = new Library();
    });

    test("should add a new book to the library", () =>{
        const book: Book = {
            ISBN: "123456",
            title: "The Hobbit",
            author: "Tolkien",
            publicationYear: 1937
        }

        library.addBook(book);
    })

    test("should borrow an available book", () =>{
        const book: Book = {
            ISBN: "123456",
            title: "The Hobbit",
            author: "Tolkien",
            publicationYear: 1937
        };

        library.addBook(book);
        library.borrowBook("123456");
    });

    test("should throw an error if the book is unavailable", () =>{
        expect(() => library.borrowBook("9999")).toThrow("Book not available");
    });

    test("should return a borrowed book", () =>{
        const book: Book = {
            ISBN: "123456",
            title: "The Hobbit",
            author: "Tolkien",
            publicationYear: 1937
        };

        library.addBook(book);
        library.borrowBook("123456");
        library.returnBook("123456");
    });

    test("should throw an error if returning a book that is not borrowed", () =>{
        expect(() => library.returnBook("1234")).toThrow("Book not found or already available");
    })
})