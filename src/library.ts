export interface Book {
    ISBN: string;
    title: string;
    author: string;
    publicationYear: number;
    isAvailable?: boolean;
}

export class Library {
    private books: Book[] = [];

    // Add a new book to the library
    addBook(book: Book): void{
        this.books.push({ ...book, isAvailable: true});
    }

    // Borrow a book based on ISBN
    borrowBook(ISBN: string): void{
        const book = this.books.find(book => book.ISBN === ISBN && book.isAvailable);
        if(!book){
            throw new Error("Book not available");
        }
        if(!book.isAvailable){
            throw new Error('Book is already borrowed');
        }
        book.isAvailable = false;
    }

    // Return a borrowed book by ISBN
    returnBook(ISBN: string): void{
        const book = this.books.find(book => book.ISBN === ISBN);
        if(!book){
            throw new Error("Book not found");
        }
        if(book.isAvailable){
            throw new Error("Book was not borrowed")
        }
        book.isAvailable = true;
    }

    // View all available books
    viewAvailableBooks(): Book[]{
        return this.books.filter(book => book.isAvailable);
    }
}