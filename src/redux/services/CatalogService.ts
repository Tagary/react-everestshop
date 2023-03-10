import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';

export const catalogAPI = createApi({
  reducerPath: 'catalogAPI',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000' }),
  endpoints: (build) => ({
    fetchAllCatalog: build.query({
      query: () => ({
        url: '/catalog',
      }),
    }),
    fetchOneCatalog: build.query({
      query: (id) => ({
        url: `/catalog/${id}`,
      }),
    }),
  }),
});
