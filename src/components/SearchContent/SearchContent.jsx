import React from 'react';
import cls from './SearchContent.module.css'
import Title from '../../shared/Title/Title';
import SearchForm from '../../features/SearchForm/SearchForm';
import Selectors from '../../features/Selectors/Selectors';

const SearchContent = () => {
  return (
    <div className={cls.searchContent}>
     <Title />
     <SearchForm />
     <Selectors />
    </div>
  );
};

export default SearchContent;