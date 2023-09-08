import React from 'react';
import cls from './SearchContent.module.css'
import Title from '../../shared/Title/Title';
import SearchForm from '../../features/SearchForm/SearchForm';

const SearchContent = () => {
  return (
    <div className={cls.searchContent}>
     <Title />
     <div>

     <SearchForm />
     </div>
    </div>
  );
};

export default SearchContent;