import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import './index.scss';
import './project.css';
import { setupStore } from './redux/store';

import { router } from './router';

const container = document.getElementById('root')!;
const root = createRoot(container);
const store = setupStore();

root.render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>,
);
