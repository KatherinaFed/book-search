import React from 'react';
import cls from './Preloader.module.css';
import loader from '../../assets/preloader.gif';

const Preloader = () => {
  return (
    <div className={cls.loader}>
      <img src={loader} alt="preloader" />
    </div>
  );
};

export default Preloader;
