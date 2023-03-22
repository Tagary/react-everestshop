import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import IComments from '../../models/IComments';

export const commentsApi = createApi({
  reducerPath: 'commentsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://dummyjson.com/' }),
  endpoints: (build) => ({
    fetchAllComments: build.query<IComments, string>({
      query: () => ({
        url: 'comments?limit=4',
      }),
    }),
  }),
});
