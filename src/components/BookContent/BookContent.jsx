import React from 'react';
import cls from './BookContent.module.css';
import BookList from '../../pages/Books/BookList/BookList';
import { useGetAllBooksQuery } from '../../services/bookServiceAPI';

const BookContent = () => {
  const { data, isLoading, isFetching, isError, error } = useGetAllBooksQuery();
  
  if (isLoading && isFetching) {
    return <h1>Loading...</h1>;
  }
  
  if (isError) {
    console.log(error.data);
    return <div>{error.status}</div>;
  }
  
  return (
    <>
      <div className={cls.bookTotalItems}>Found {data.totalItems} results</div>
      <div className={cls.bookContent}>
        <BookList books={data.items} />
      </div>
    </>
  );
};

export default BookContent;
