import React  from 'react';
import cls from './BookContent.module.css';
import BookList from '../../pages/Books/BookList/BookList';
import Preloader from '../../features/Preloader/Preloader';
import {
  useGetAllBooksQuery,
} from '../../services/bookServiceAPI';
import LoadMore from '../../features/LoadMore/LoadMore';

const BookContent = ({
  searchData,
  filterBy,
  orderBy,
  startIndex,
  setStartIndex,
}) => {
  const { data, isLoading, isFetching, isError, error } = useGetAllBooksQuery({
    searchData,
    categoryData: filterBy,
    sortData: orderBy,
    startIndex,
  });

  if (isLoading && isFetching) {
    return <Preloader />;
  }
  if (isError) {
    console.log(error.data);
    return <div>{error.status}</div>;
  }

  // console.log('First data: ', data.items);
  return (
    <>
      <div className={cls.bookTotalItems}>Found {data.totalItems} results</div>
      <div className={cls.bookContent}>
        <BookList books={data.items} />
      </div>
      <LoadMore isFetching={isFetching} setStartIndex={setStartIndex} />
    </>
  );
};

export default BookContent;
