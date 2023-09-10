import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_KEY, API_URL } from '../shared/api';

export const bookServiceApi = createApi({
  reducerPath: 'books',
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  tagTypes: ['Books'],
  endpoints: (builder) => ({
    // GET ALL BOOKS
    getAllBooks: builder.query({
      query: (sortData) => {
        const orderBy = sortData === 'relevance' ? '' : `&orderBy=${sortData}`;

        return `volumes?q=books${orderBy}&key=${API_KEY}`;
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

            return book;
          }),
        };
      },
      providesTags: ['Books'],
    }),
  }),
});

export const { useGetAllBooksQuery, useGetSortedBooksQuery } = bookServiceApi;
