import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';

export const productsAPI = createApi({
  reducerPath: 'productsAPI',
  baseQuery: fetchBaseQuery({ baseUrl: 'localhost:3000' }),
  endpoints: (build) => ({
    fetchAllProducts: build.query({
      query: () => ({
        url: '/products ',
      }),
    }),
    fetchOneProducts: build.query({
      query: (id) => ({
        url: `/products/${id}`,
      }),
    }),
  }),
});
