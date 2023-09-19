import React from 'react';
import BookCard from '../BookCard/BookCard';
import { uniqueId } from 'lodash';

const BookList = ({ books }) => {
  return (
    <>
      {books.map((book) => (
        <BookCard
          key={uniqueId()}
          bookID={book.id}
          img={book.volumeInfo.imageLinks.thumbnail}
          title={book.volumeInfo.title}
          category={book.volumeInfo.categories}
          author={book.volumeInfo.authors}
        />
      ))}
    </>
  );
};

export default BookList;
