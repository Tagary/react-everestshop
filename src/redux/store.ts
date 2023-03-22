import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { catalogAPI } from './services/CatalogService';
import { categoryAPI } from './services/CategoryService';
import { commentsApi } from './services/CommentsService';
import { productsAPI } from './services/ProductsService';
import SubDirectorySlice from './slices/subDirectorySlice';

const rootReducer = combineReducers({
  SubDirectorySlice,
  [catalogAPI.reducerPath]: catalogAPI.reducer,
  [categoryAPI.reducerPath]: catalogAPI.reducer,
  [productsAPI.reducerPath]: productsAPI.reducer,
  [commentsApi.reducerPath]: commentsApi.reducer,
});

export const setupStore = () =>
  configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(catalogAPI.middleware, commentsApi.middleware),
  });

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
