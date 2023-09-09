import React from 'react';
import cls from './Selectors.module.css';
import SelectItem from '../SelectorItem/SelectorItem';
import { categories, sortingBy } from '../../shared/const';

const Selectors = () => {
  return (
    <div className={cls.selectors}>
      <SelectItem defaultValue={'all'} name={'Category'} options={categories} />
      <SelectItem
        defaultValue={'relevance'}
        name={'Sorting by'}
        options={sortingBy}
      />
    </div>
  );
};

export default Selectors;
