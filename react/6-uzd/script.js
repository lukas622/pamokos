"use strict";

const books = [
  { title: "Knyga #1", price: 10.25 },
  { title: "Knyga #2", price: 5.15 },
  { title: "Knyga #3", price: 7.32 },
  { title: "Knyga #4", price: 54.01 },
  { title: "Knyga #5", price: 77.17 },
];

const printBookList = (list) => {
  return list.map((book, index) => console.log(`${index} ${book}`));
};

const sumBookList = (list) => {
  return list.reduce((accumulator, curval) => accumulator + curval, 0);
};
