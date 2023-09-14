import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_KEY, API_URL } from '../shared/api';
import noImg from '../assets/noImg.jpg';

export const bookServiceApi = createApi({
  reducerPath: 'books',
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  tagTypes: ['Books'],
  endpoints: (builder) => ({
    // GET ALL BOOKS
    getAllBooks: builder.query({
      query: ({ searchData, categoryData, sortData, startIndex = 0 }) => {
        const searchTerms = searchData === '' ? 'books' : searchData;
        const filterBy =
          categoryData === 'all' ? '' : `+subject=${categoryData}`;
        const orderBy = sortData === 'relevance' ? '' : `&orderBy=${sortData}`;

        return `volumes?q=${searchTerms}${filterBy}${orderBy}&startIndex=${startIndex}&maxResults=30&key=${API_KEY}`;
      },
      transformResponse: (response) => {
        return {
          totalItems: response.totalItems,
          items: response.items.map((book) => {
            if (!book.volumeInfo.hasOwnProperty('categories')) {
              book.volumeInfo['categories'] = [''];
            }
            if (!book.volumeInfo.hasOwnProperty('authors')) {
              book.volumeInfo['authors'] = [''];
            }
            if (!book.volumeInfo.hasOwnProperty('imageLinks')) {
              book.volumeInfo['imageLinks'] = {
                smallThumbnail: noImg,
                thumbnail: noImg,
              };
            }
            if (!book.volumeInfo.hasOwnProperty('title')) {
              book.volumeInfo['title'] = [''];
            }

            return book;
          }),
        };
      },
      serializeQueryArgs: ({ endpointName }) => {
        return endpointName;
      },
      merge: (currentCache, newItems, { arg }) => {
        if (arg.startIndex) {
          const updatedCache = {
            totalItems: currentCache.totalItems,
            items: [...currentCache.items, ...newItems.items],
          };

          return updatedCache;
        }

        if (arg.categoryData || arg.searchData || arg.sortData) {
          return newItems;
        }
      },
      forceRefetch({ currentArg, previousArg = 0 }) {
        return currentArg['startIndex'] !== previousArg;
      },
      providesTags: ['Books'],
    }),
    // GET A BOOK BY ID
    getBookById: builder.query({
      query: (bookID) => {
        return `volumes/${bookID}?key=${API_KEY}`;
      },
      transformResponse: (response) => {
        if (!response.volumeInfo.hasOwnProperty('categories')) {
          response.volumeInfo['categories'] = [''];
        }
        if (!response.volumeInfo.hasOwnProperty('authors')) {
          response.volumeInfo['authors'] = [''];
        }

        return { book: response.volumeInfo };
      },
      providesTags: ['Books'],
    }),
  }),
});

export const { useGetAllBooksQuery, useGetBookByIdQuery } =
  bookServiceApi;
