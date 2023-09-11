import React from 'react';
import cls from './Title.module.css';
import { NavLink } from 'react-router-dom';

const Title = () => {
  return (
    <NavLink to='/' style={{ textDecoration: 'none' }}>
      <h1 className={cls.title}>Search for books</h1>
    </NavLink>
  );
};

export default Title;
