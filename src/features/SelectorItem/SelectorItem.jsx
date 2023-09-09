import React, { useState } from 'react';
import cls from './SelectorItem.module.css';

const SelectItem = ({ defaultValue, name, options }) => {

  return (
    <div className={cls.selectorItem}>
      {name}
      <select
        className={cls.selectOptions}
      >
        {options.map((opt) => (
          <option value={opt.value} defaultValue={defaultValue}>
            {opt.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectItem;
