import React from 'react';
import cls from './BookPage.module.css';
import { useParams } from 'react-router-dom';
import { useGetBookByIdQuery } from '../../../services/bookServiceAPI';
import noImg from '../../../assets/noImg.jpg';
import { dataBook } from '../../../shared/const';

const BookPage = () => {
  const { id } = useParams();
  const { data, isLoading, isFetching, isError, error } =
    useGetBookByIdQuery(id);

  if (isLoading && isFetching) {
    return <h1>Loading...</h1>;
  }

  if (isError) {
    console.log(error.data);
    return <div>{error.status}</div>;
  }
  console.log(data.book);

  const { coverBook, categoryBook, authorBook } = dataBook(data);

  return (
    <div className={cls.bookPageContainer}>
      <div className={cls.bookPageLeft}>
        <img src={coverBook} alt={data.book.title} className={cls.bookImage} />
      </div>
      <div className={cls.bookPageRight}>
        {categoryBook && (
          <p className={cls.bookCategory}>Category: {categoryBook}</p>
        )}
        <h2 className={cls.bookTitle}>{data.book.title}</h2>
        <p className={cls.bookAuthor}>
          Author: {data.book.authors.map((auth) => `- ${auth} -`)}
        </p>
        <p className={cls.bookDescription}>{data.book.description}</p>
      </div>
    </div>
  );
};

export default BookPage;
