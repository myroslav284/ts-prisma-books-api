# Authors, books  TypeScript Prisma Express MySQL API
## Technologies
- Node.js
- Express
- TypeScript
- Prisma
- MySQL
- Multer
## Setup
- Clone repository
```bash
git clone https://github.com/myroslav284/ts-prisma-books-api.git
cd ts-prisma-books-api
```
- Install dependencies
```sh
npm install
```
- setup env
```sh
DATABASE_URL="mysql://user:password@localhost:3306/database"
PORT=3001
```
- Push the Prisma Schema into Database

```sh
npm run migrate
```

- Run project

```sh
npm run dev
```

## API Endpoints
- GET: <http://localhost:3001/author/> Retrieve all authors.

- GET: <http://localhost:3001/author/:id> Retrieve a specific author by ID.

- POST: <http://localhost:3001/author/create> Create a new author.

- PUT: <http://localhost:3001/author/:id> Update an existing author.

- DELETE: <http://localhost:3001/author/delete/:id> Delete an author.

- GET: <http://localhost:3001/book/> Retrieve all books.

- GET: <http://localhost:3001/book/:id> Retrieve a specific book by ID.

- POST: <http://localhost:3001/book/create> Create a new book.

- PUT: <http://localhost:3001/book/:id> Update an existing book.

- DELETE: <http://localhost:3001/book/delete/:id> Delete a book.
