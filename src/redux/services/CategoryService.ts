import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';

export const categoryAPI = createApi({
  reducerPath: 'categoryAPI',
  baseQuery: fetchBaseQuery({ baseUrl: 'localhost:3000' }),
  endpoints: (build) => ({
    fetchAllCategory: build.query({
      query: () => ({
        url: '/category ',
      }),
    }),
    fetchOneCategory: build.query({
      query: (id) => ({
        url: `/category/${id}`,
      }),
    }),
  }),
});
