import React from 'react';
import cls from './SearchContent.module.css';
import Title from '../../shared/Title/Title';
import SearchForm from '../../features/SearchForm/SearchForm';
import Selectors from '../../features/Selectors/Selectors';

const SearchContent = ({
  setSearchData,
  orderBy,
  setOrderBy,
  filterBy,
  setFilterBy,
  setStartIndex,
}) => {
  return (
    <div className={cls.searchContent}>
      <Title />
      <SearchForm setSearchData={setSearchData} setStartIndex={setStartIndex} />
      <Selectors
        orderBy={orderBy}
        setOrderBy={setOrderBy}
        filterBy={filterBy}
        setFilterBy={setFilterBy}
        setStartIndex={setStartIndex}
      />
    </div>
  );
};

export default SearchContent;
