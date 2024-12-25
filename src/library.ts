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
}