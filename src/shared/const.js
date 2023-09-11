import noImg from '../assets/noImg.jpg';

export const categories = [
  { value: 'all', name: 'All' },
  { value: 'art', name: 'Art' },
  { value: 'biography', name: 'Biography' },
  { value: 'computers', name: 'Computers' },
  { value: 'history', name: 'History' },
  { value: 'medical', name: 'Medical' },
  { value: 'poetry', name: 'Poetry' },
];

export const sortingBy = [
  { value: 'relevance', name: 'Relevance' },
  { value: 'newest', name: 'Newest' },
];

export const dataBook = (dataBook) => {
  const imageLink = dataBook.book.hasOwnProperty('imageLinks')
    ? dataBook.book.imageLinks
    : noImg;

  const imageUrl = imageLink.hasOwnProperty('medium')
    ? imageLink.medium
    : imageLink.thumbnail;

  const categoryBook = dataBook.book.hasOwnProperty('categories')
    ? dataBook.book.categories.map((c) => c + ' ')
    : '';

  const authorBook = dataBook.book.hasOwnProperty('authors')
    ? dataBook.book.authors.map((auth) => `- ${auth} -`)
    : '';

  return {
    coverBook: !imageUrl ? imageLink : imageUrl,
    categoryBook,
    authorBook,
  };
};
