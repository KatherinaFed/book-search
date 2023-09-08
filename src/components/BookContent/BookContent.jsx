import React from 'react';
import cls from './BookContent.module.css';
import BookList from '../../pages/Books/BookList/BookList';

const BookContent = () => {
  return (
    <>
      <div className={cls.bookTotalItems}>Found {'34'} results</div>
      <div className={cls.bookContent}>
        <BookList />
      </div>
    </>
  );
};

export default BookContent;
