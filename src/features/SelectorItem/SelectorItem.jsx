import React from 'react';
import cls from './SelectorItem.module.css';
import { uniqueId } from 'lodash';

const SelectItem = ({
  defaultValue,
  name,
  options,
  selectBy,
  setSelectBy,
  setStartIndex,
}) => {
  const handleChangeSelector = (e) => {
    setSelectBy(e.target.value);
    setStartIndex(0);
  };
  
  return (
    <div className={cls.selectorItem}>
      {name}
      <select
        value={selectBy}
        onChange={handleChangeSelector}
        className={cls.selectOptions}
      >
        {options.map((opt) => (
          <option
            key={uniqueId()}
            value={opt.value}
            defaultValue={defaultValue}
          >
            {opt.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectItem;
