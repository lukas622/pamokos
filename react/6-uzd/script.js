"use strict";

const books = [
  { title: "Knyga #1", price: 10.25 },
  { title: "Knyga #2", price: 5.15 },
  { title: "Knyga #3", price: 7.32 },
  { title: "Knyga #4", price: 54.01 },
  { title: "Knyga #5", price: 77.17 },
];

const printBookList = (list) => {
  return list.map((book, index) => console.log(`${index} ${book.title}`));
};

const sumBookList = (list) => {
  return list.reduce((accumulator, curval) => accumulator + 1, 0);
};

const addToBookList = (name, price) => {
  const newBook = { title: name, price: price };
  books.push(newBook);
};

const getLastBookInfo = (list) => {
  return `${list[list.length - 1].title} ${list[list.length - 1].price}`;
};

const getBookListTotalPrice = (list) => {
  return list
    .reduce((accumulator, curval) => accumulator + curval.price, 0)
    .toFixed(2);
};

const applySaleToBookList = (list) => {
  list.forEach((book) => {
    if (book.price > 10) {
      const oldBookPrice = book.price;

      book.price *= 0.85;

      console.log(
        `Knyga: ${
          book.title
        } Sena kaina: ${oldBookPrice} Pardavimo kaina: ${book.price.toFixed(
          2
        )} Pritakyta nuolaida -25%`
      );
    }
  });
};

const sortBookListByCheapest = (list) => {
  return list.sort((a, b) => {
    return a.price - b.price;
  });
};

const sortBookListAZ = (list) => {
  return list.sort((a, b) => {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
    return 0;
  });
};

const sortBookListZA = (list) => {
  return list.sort((a, b) => {
    if (a.name > b.name) {
      return -1;
    }
    if (a.name < b.name) {
      return 1;
    }
    return 0;
  });
};

const expensiveBookList = (list) => {
  return list.filter((book) => book.price > 7.5);
};

//console.log(printBookList(books));
//console.log(sumBookList(books));
//addToBookList("Book #6", 20.5);
//console.log(getLastBookInfo(books));
//console.log(getBookListTotalPrice(books));
//applySaleToBookList(books);
//console.log(sortBookListByCheapest(books));
//console.log(sortBookListAZ(books));
//console.log(sortBookListZA(books));
console.log(expensiveBookList(books));
