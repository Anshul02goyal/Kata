import {Library} from "../src/library";

describe("Library Management System", () =>{
    let library: Library;

    beforeEach(() =>{
        library = new Library();
    });

    test("should add a new book to the library", () =>{
        library.addBook({
            ISBN: "123456",
            title: "The Hobbit",
            author: "Tolkien",
            publicationYear: 1937
        })
    })

})