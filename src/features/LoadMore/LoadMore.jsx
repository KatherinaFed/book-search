import React from 'react';
import cls from './LoadMore.module.css';
import Preloader from '../Preloader/Preloader';

const LoadMore = ({ isFetching, setStartIndex }) => {
  const handleLoadClick = (e) => {
    e.preventDefault();

    setStartIndex((startIndex) => startIndex + 30);
  };

  return (
    <div className={cls.loadContainer}>
      {isFetching ? (
        <Preloader />
      ) : (
        <button className={cls.loadButton} onClick={handleLoadClick}>
          Load more...
        </button>
      )}
    </div>
  );
};

export default LoadMore;
