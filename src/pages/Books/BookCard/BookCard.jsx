import React from 'react';
import cls from './BookCard.module.css'

const BookCard = () => {
  return (
    <div className={cls.bookCard}>
      <img src={'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/yellow-business-leadership-book-cover-design-template-dce2f5568638ad4643ccb9e725e5d6ff_screen.jpg?ts=1637017516'} alt={'BOOK IMG'} className={cls.bookImage} />
      <p className={cls.bookCategory}>Category</p>
      <h2 className={cls.bookTitle}>{'Harry Potter'}</h2>
      <p className={cls.bookAuthor}>{'Joane Rowling'}</p>
    </div>
  );
};

export default BookCard;