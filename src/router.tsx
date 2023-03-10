import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import Catalog from './pages/Catalog';
import ErrorPage from './pages/ErrorPage';
import Contacts from './pages/HeaderPages/Contacts';
import Delivery from './pages/HeaderPages/Delivery';
import Main from './pages/Main';
import Wholesalers from './pages/HeaderPages/Wholesalers/index';
import Payments from './pages/HeaderPages/Payments';
import PriceList from './pages/HeaderPages/PriceList';
import Vacancy from './pages/HeaderPages/Vacancy';
import NewsList from './pages/HeaderPages/NewsList';
import CartComponent from './components/CartComponent';
import OrderComponent from './components/OrderComponent';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        errorElement: <ErrorPage />,
      },
      { path: '/', element: <Main /> },
      { path: 'catalog/:id', element: <Catalog /> },
      { path: 'delivery', element: <Delivery /> },
      { path: 'contacts', element: <Contacts /> },
      { path: 'wholesalers', element: <Wholesalers /> },
      { path: 'payments', element: <Payments /> },
      { path: 'pricelist', element: <PriceList /> },
      { path: 'vacancy', element: <Vacancy /> },
      { path: 'news', element: <NewsList /> },
      { path: 'cart', element: <CartComponent /> },
      { path: 'cart/order', element: <OrderComponent /> },
    ],
  },
]);
