import React from 'react';
import BookCard from '../BookCard/BookCard';

const BookList = ({ books }) => {
  return (
    <>
      {books.map((book) => (
        <BookCard
          key={book.id}
          img={book.volumeInfo.imageLinks.smallThumbnail}
          title={book.volumeInfo.title}
          category={book.volumeInfo.categories}
          author={book.volumeInfo.authors}
        />
      ))}
    </>
  );
};

export default BookList;
