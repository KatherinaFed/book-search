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
  const imageLink = Object.prototype.hasOwnProperty.call(
    dataBook.book,
    'imageLinks'
  )
    ? dataBook.book.imageLinks
    : noImg;

  const imageUrl =
    Object.prototype.hasOwnProperty.call(imageLink, 'smallThumbnail') &&
    imageLink.smallThumbnail;

  const categoryBook = Object.prototype.hasOwnProperty.call(
    dataBook.book,
    'categories'
  )
    ? dataBook.book.categories.map((c) => c + ' ')
    : '';

  const authorBook = Object.prototype.hasOwnProperty.call(
    dataBook.book,
    'authors'
  )
    ? dataBook.book.authors.map((auth) => ` ${auth} `)
    : '';

  return {
    coverBook: !imageUrl ? imageLink : imageUrl,
    categoryBook,
    authorBook,
  };
};

export const getQueryParams = (
  searchData,
  categoryData,
  sortData,
  startIndex
) => {
  const searchTerms = searchData === '' ? 'books' : searchData;
  const filterBy = categoryData === 'all' ? '' : `+subject=${categoryData}`;
  const orderBy = sortData === 'relevance' ? '' : `&orderBy=${sortData}`;

  return `${searchTerms}${filterBy}${orderBy}&startIndex=${startIndex}&maxResults=30`;
};
