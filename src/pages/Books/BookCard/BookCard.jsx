import React from 'react';
import cls from './BookCard.module.css';

const BookCard = ({ img, title, category, author }) => {

  // const authors = author.length > 2 ? author[2] = '...' : author;

  return (
    <div className={cls.bookCard}>
      <img src={img} alt={'BOOK IMG'} className={cls.bookImage} />
      <div className={cls.bookTextWrapper}>
        <p className={cls.bookCategory}>{category.map((cat) => cat)}</p>
        <h2 className={cls.bookTitle}>{title}</h2>
        <p className={cls.bookAuthor}>{author.map((auth) => auth)}</p>
      </div>
    </div>
  );
};

export default BookCard;
