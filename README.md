# Library Management System

Overview
The Library Management System is a simple application built using TypeScript. It allows users to perform basic operations such as adding books, borrowing books, returning books, and viewing available books. The project follows the principles of Test-Driven Development (TDD) and includes comprehensive unit tests to ensure reliability.

Features
Add Books:
Add new books to the library with details like ISBN, title, author, and publication year.
Borrow Books:
Borrow a book by its ISBN. The system ensures that the book is available before allowing the operation.
Return Books:
Return a borrowed book by its ISBN, updating its availability status.
View Available Books:
View a list of all books currently available in the library.
Technologies Used
TypeScript
Jest (for testing)
Getting Started
Prerequisites
Ensure you have the following installed:

Node.js (version 16 or above)
npm (Node Package Manager)
Setup
Clone the repository:

bash
Copy code
git clone <repository-url>
cd library-management-system
Install dependencies:

bash
Copy code
npm install
Build the project:

bash
Copy code
npx tsc
Run the tests:

bash
Copy code
npx jest
Project Structure
plaintext
Copy code
library-management-system/
│
├── src/                # Source code
│   ├── library.ts      # Library class and interface definitions
│
├── tests/              # Unit tests
│   ├── library.test.ts # Test cases for the Library class
│
├── jest.config.js      # Jest configuration
├── tsconfig.json       # TypeScript configuration
├── package.json        # Project dependencies and scripts
└── README.md           # Project documentation
How to Use
Add a Book
Use the addBook() method to add a new book:

typescript
Copy code
library.addBook({
  isbn: "12345",
  title: "TypeScript Basics",
  author: "John Doe",
  publicationYear: 2023,
});
Borrow a Book
Borrow a book by its ISBN:

typescript
Copy code
library.borrowBook("12345");
Return a Book
Return a borrowed book by its ISBN:

typescript
Copy code
library.returnBook("12345");
View Available Books
View all available books in the library:

typescript
Copy code
console.log(library.viewAvailableBooks());
Testing
This project uses Jest for unit testing.

Run Tests
Execute the following command to run all test cases:

bash
Copy code
npx jest
Test Coverage
Generate a coverage report:

bash
Copy code
npx jest --coverage
Contributing
Fork the repository.
Create a new branch for your feature:
bash
Copy code
git checkout -b feature-name
Commit your changes:
bash
Copy code
git commit -m "Add feature: feature-name"
Push to the branch:
bash
Copy code
git push origin feature-name
Open a pull request.
