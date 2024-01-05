import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_KEY, API_URL } from '../shared/api';
import noImg from '../assets/noImg.jpg';
import { getQueryParams } from '../shared/const';

export const bookServiceApi = createApi({
  reducerPath: 'books',
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  tagTypes: ['Books'],
  endpoints: (builder) => ({
    // GET ALL BOOKS
    getAllBooks: builder.query({
      query: ({ searchData, categoryData, sortData, startIndex = 0 }) => {
        const queryParams = getQueryParams(
          searchData,
          categoryData,
          sortData,
          startIndex
        );

        return `volumes?q=${queryParams}&key=${API_KEY}`;
      },
      transformResponse: (response) => {
        return {
          totalItems: response.totalItems,
          items: response.items.map((book) => {
            if (
              !Object.prototype.hasOwnProperty.call(
                book.volumeInfo,
                'categories'
              )
            ) {
              book.volumeInfo['categories'] = [''];
            }
            if (
              !Object.prototype.hasOwnProperty.call(book.volumeInfo, 'authors')
            ) {
              book.volumeInfo['authors'] = [''];
            }
            if (
              !Object.prototype.hasOwnProperty.call(
                book.volumeInfo,
                'imageLinks'
              )
            ) {
              book.volumeInfo['imageLinks'] = {
                thumbnail: noImg,
              };
            }
            if (
              !Object.prototype.hasOwnProperty.call(book.volumeInfo, 'title')
            ) {
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
        if (!Object.prototype.hasOwnProperty.call(response.volumeInfo, 'categories')) {
          response.volumeInfo['categories'] = [''];
        }
        if (!Object.prototype.hasOwnProperty.call(response.volumeInfo, 'authors')) {
          response.volumeInfo['authors'] = [''];
        }

        return { book: response.volumeInfo };
      },
      providesTags: ['Books'],
    }),
  }),
});

export const { useGetAllBooksQuery, useGetBookByIdQuery } = bookServiceApi;
