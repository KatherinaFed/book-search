import React, { useState } from 'react';
import cls from './SearchForm.module.css';
import { BsSearch } from 'react-icons/bs';

const SearchForm = ({ setSearchData, setStartIndex }) => {
  const [searchBook, setSearchBook] = useState('');

  const handleSearchSubmit = (e) => {
    e.preventDefault();

    setSearchData(searchBook);
    setSearchBook(''); // clear input
    setStartIndex(0);
  };

  return (
    <form
      onSubmit={handleSearchSubmit}
      action="submit"
      className={cls.searchForm}
    >
      <input
        value={searchBook}
        onChange={(e) => setSearchBook(e.target.value)}
        className={cls.searchInput}
      />
      <button type="submit" className={cls.searchButton}>
        <BsSearch />
      </button>
    </form>
  );
};

export default SearchForm;
