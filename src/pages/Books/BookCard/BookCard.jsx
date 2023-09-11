import React from 'react';
import cls from './BookCard.module.css';
import { useNavigate } from 'react-router-dom';

const BookCard = ({ bookID, img, title, category, author }) => {
  const navigate = useNavigate();

  return (
    <div className={cls.bookCard} onClick={() => navigate(`book/${bookID}`)}>
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
