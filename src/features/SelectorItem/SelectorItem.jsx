import React from 'react';
import cls from './SelectorItem.module.css';

const SelectItem = ({ name, options }) => {
  return (
    <div className={cls.selectorItem}>
      {name}
      <select className={cls.selectOptions}>
        {options.map((opt) => (
          <option value={opt.value}>{opt.name}</option>
        ))}
      </select>
    </div>
  );
};

export default SelectItem;
