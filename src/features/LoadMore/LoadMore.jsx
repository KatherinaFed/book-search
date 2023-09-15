import React, { useState } from 'react';
import cls from './LoadMore.module.css';
import Preloader from '../Preloader/Preloader';

const LoadMore = ({ isFetching, setStartIndex }) => {
  const [isPaginate, setIsPaginate] = useState(false);
  const handleLoadClick = (e) => {
    e.preventDefault();

    setStartIndex((startIndex) => startIndex + 30);
    setIsPaginate(true);
  };

  return (
    <div className={cls.loadContainer}>
      {isFetching ? (
        <Preloader isPaginate={isPaginate} />
      ) : (
        <button className={cls.loadButton} onClick={handleLoadClick}>
          Load more...
        </button>
      )}
    </div>
  );
};

export default LoadMore;
