const books = [
  { id: 1, title: "Book One", genre: "Fiction", publish: 1981, edition: 2004 },
  {
    id: 2,
    title: "Book Two",
    genre: "Non-Fiction",
    publish: 1981,
    edition: 2008,
  },
  {
    id: 3,
    title: "Book Three",
    genre: "History",
    publish: 1992,
    edition: 2007,
  },
  {
    id: 4,
    title: "Book Four",
    genre: "Non-Fiction",
    publish: 1999,
    edition: 2010,
  },
  { id: 5, title: "Book Five", genre: "Science", publish: 1989, edition: 2014 },
  { id: 6, title: "Book Six", genre: "Fiction", publish: 1987, edition: 2010 },
  {
    id: 7,
    title: "Book Seven",
    genre: "History",
    publish: 1986,
    edition: 1996,
  },
  {
    id: 8,
    title: "Book Seven",
    genre: "History",
    publish: 1986,
    edition: 1996,
  },
  {
    id: 9,
    title: "Book Eight",
    genre: "Science",
    publish: 2011,
    edition: 2000,
  },
];

// function getBooks() {
//   return data;
// }

// function getBooks(id) {
//   return data.find((d) => d.id === id);
// }

// const books = getBooks();

// console.log(books);

///// MAP

// const x = data.map((each) => each.title);
// console.log(x);

// const y = data.filter((book) => book.edition > 2000);
// console.log(y);

/////// Filter /////////f

// const z = data
//   .filter((book) => book.genre.includes("History"))
//   .map((book) => book.title);

// console.log(z);

//// Reduce  /////

// const zz = data.reduce((acc, book) => acc + book.edition, 0);
// console.log(zz);

/// Sorting //

// const xxx = data.slice().sort((a, b) => b.edition - a.edition);

// console.log(xxx);

const newBook = {
  id: 10,
  title: "Book 10",
  genre: "biography",
  publish: 1999,
  edition: 2020,
};
// ------ Adding new book object to old array method

const booksAfterAdd = [...books, newBook];

// const booksBeforeAdd = [newBook, ...books]

// console.log(booksAfterAdd);

//------- Delete book object from array

const booksAfterDelete = booksAfterAdd.filter((cut) => cut.id !== 3);
// console.log(booksAfterDelete);

//--------- Update book boject in the array

// const booksAfterUpdate = booksAfterDelete.map((book) =>
//   book.id === 1 ? { ...book, publish: 1999 } : book
// );

// console.log(booksAfterUpdate);
