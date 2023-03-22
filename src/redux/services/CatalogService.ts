import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import IProduct from '../../models/IProduct';
import IProducts from '../../models/IProducts';

export const catalogAPI = createApi({
  reducerPath: 'catalogAPI',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://dummyjson.com/' }),
  endpoints: (build) => ({
    fetchAllCatalog: build.query<string[], string>({
      query: () => ({
        url: 'products/categories',
      }),
    }),
    fetchCatalog: build.query<IProducts, string>({
      query: (name: string) => ({
        url: `products/category/${name}`,
      }),
    }),
    fetchOneProduct: build.query<IProduct, string>({
      query: (id: string) => ({
        url: `https://dummyjson.com/products/${id}`,
      }),
    }),
  }),
});
