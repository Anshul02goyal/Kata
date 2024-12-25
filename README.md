# Library Management System

## Overview
The **Library Management System** is a simple application built using TypeScript. It allows users to perform basic operations such as adding books, borrowing books, returning books, and viewing available books. The project follows the principles of **Test-Driven Development (TDD)** and includes comprehensive unit tests to ensure reliability.

---

## Features
1. **Add Books**:  
   Add new books to the library with details like ISBN, title, author, and publication year.
2. **Borrow Books**:  
   Borrow a book by its ISBN. The system ensures that the book is available before allowing the operation.
3. **Return Books**:  
   Return a borrowed book by its ISBN, updating its availability status.
4. **View Available Books**:  
   View a list of all books currently available in the library.

---

## Technologies Used
- **TypeScript**
- **Jest** (for testing)

---

## Getting Started

### Prerequisites
Ensure you have the following installed:
- **Node.js** (version 16 or above)
- **npm** (Node Package Manager)

### Setup
1. Clone the repository:
   ```bash
   git clone https://github.com/Anshul02goyal/Kata.git
   cd library-management-system

2. Install dependencies:
   ```bash
   npm install

3. Build the project:
   ```bash
   npx tsc

4. Run the tests:
   ```bash
   npx jest


### Testing
This project uses Jest for unit testing.

### Run Tests
- Clone the repository:
   ```bash
   git clone https://github.com/Anshul02goyal/Kata.git
   cd library-management-system

### Test Coverage
- Generate a coverage report:
  ```bash
  npx jest --coverage

### Contributing
1. Fork the repository.
2. Create a new branch for your feature:
    ```bash
    git checkout -b feature-name
3. Commit your changes:
   ```bash
   git commit -m "Add feature: feature-name"
4. Push to the branch:
   ```bash
   git push origin feature-name
5. Open a pull request.
