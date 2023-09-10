import React from 'react';
import cls from './SearchContent.module.css';
import Title from '../../shared/Title/Title';
import SearchForm from '../../features/SearchForm/SearchForm';
import Selectors from '../../features/Selectors/Selectors';

const SearchContent = ({ orderBy, setOrderBy }) => {
  return (
    <div className={cls.searchContent}>
      <Title />
      <SearchForm />
      <Selectors setOrderBy={setOrderBy} orderBy={orderBy} />
    </div>
  );
};

export default SearchContent;
