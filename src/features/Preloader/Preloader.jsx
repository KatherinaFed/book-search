import React from 'react';
import cls from './Preloader.module.css';
import loader from '../../assets/preloader.gif';
import paginateLoader from '../../assets/smallBookLoader.gif'

const Preloader = ({ isPaginate }) => {
  return (
    <div className={cls.loader}>
      <img src={isPaginate ? paginateLoader : loader} alt="preloader" />
    </div>
  );
};

export default Preloader;
