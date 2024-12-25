export interface Book {
    ISBN: string;
    title: string;
    author: string;
    publicationYear: number;
    isAvailable?: boolean;
}

export class Library {
    private books: Book[] = [];

    addBook(book: Book): void{
        this.books.push({ ...book, isAvailable: true});
    }

    borrowBook(ISBN: string): void{
        const book = this.books.find(book => book.ISBN === ISBN && book.isAvailable);
        if(!book){
            throw new Error("Book not available");
        }
        book.isAvailable = false;
    }

    returnBook(ISBN: string): void{
        const book = this.books.find(book => book.ISBN === ISBN && !book.isAvailable);
        if(!book){
            throw new Error("Book not found or already available");
        }
        book.isAvailable = true;
    }
}