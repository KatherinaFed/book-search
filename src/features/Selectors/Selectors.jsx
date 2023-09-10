import React from 'react';
import cls from './Selectors.module.css';
import SelectItem from '../SelectorItem/SelectorItem';
import { categories, sortingBy } from '../../shared/const';

const Selectors = ({ orderBy, setOrderBy, filterBy, setFilterBy }) => {
  return (
    <div className={cls.selectors}>
      <SelectItem
        selectBy={filterBy}
        setSelectBy={setFilterBy}
        defaultValue={'all'}
        name={'Category'}
        options={categories}
      />
      <SelectItem
        selectBy={orderBy}
        setSelectBy={setOrderBy}
        defaultValue={'relevance'}
        name={'Sorting by'}
        options={sortingBy}
      />
    </div>
  );
};

export default Selectors;
