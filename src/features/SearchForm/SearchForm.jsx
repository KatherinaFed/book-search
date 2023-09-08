import React from 'react';
import cls from './SearchForm.module.css';
import { BsSearch } from 'react-icons/bs';

const SearchForm = () => {
  return (
    <form action="submit" className={cls.searchForm}>
      <input className={cls.searchInput} />
      <button className={cls.searchButton}>
        <BsSearch />
      </button>
    </form>
  );
};

export default SearchForm;
