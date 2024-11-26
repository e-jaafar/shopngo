import './App.css';
import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import Root from './components/Root';
import Error from './components/ErrorPage';
import Home from './components/Home';
import Products from './components/Products';
import ProductDetail from './components/ProductDetail';
import Cart from './components/Cart';
import Favorites from './components/Favorites';
import OrderHistory from './components/OrderHistory';
import { CartProvider } from './context/CartContext';
import { FavoritesProvider } from './context/FavoritesContext';
import { ToastProvider } from './context/ToastContext';
import { ThemeProvider } from './context/ThemeContext';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        path: '',
        element: <Home />
      },
      {
        path: 'products',
        element: <Products />
      },
      {
        path: 'products/:id',
        element: <ProductDetail />
      },
      {
        path: 'cart',
        element: <Cart />
      },
      {
        path: 'favorites',
        element: <Favorites />
      },
      {
        path: 'orders',
        element: <OrderHistory />
      }
    ]
  },
]);

function App() {
  return (
    <ThemeProvider>
      <CartProvider>
        <FavoritesProvider>
          <ToastProvider>
            <div className='App dark:bg-gray-900'>
              <RouterProvider router={router} />
            </div>
          </ToastProvider>
        </FavoritesProvider>
      </CartProvider>
    </ThemeProvider>
  );
}

export default App;

