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
import { AuthProvider } from './context/AuthContext';
import Account from './components/Account';
import About from './components/pages/About';
import Careers from './components/pages/Careers';
import Press from './components/pages/Press';
import Shipping from './components/pages/Shipping';
import Privacy from './components/pages/Privacy';
import Terms from './components/pages/Terms';
import Cookies from './components/pages/Cookies';
import FAQ from './components/pages/FAQ';
import Contact from './components/pages/Contact';
import Stores from './components/pages/Stores';
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
      },
      {
        path: 'account',
        element: <Account />
      },
      {
        path: 'about',
        element: <About />
      },
      {
        path: 'careers',
        element: <Careers />
      },{
        path: 'press',
        element: <Press />
      },
      {
        path: 'shipping',
        element: <Shipping />
      },
      {
        path: 'privacy',
        element: <Privacy />
      },
      {
        path: 'terms',
        element: <Terms />
      },{
        path: 'cookies',
        element: <Cookies />
      },
      {
        path: 'faq',
        element: <FAQ />
      },
      {
        path: 'contact',
        element: <Contact />
      },
      {
        path: 'stores',
        element: <Stores />
      }
    ]
  },
]);

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <CartProvider>
          <FavoritesProvider>
            <ToastProvider>
              <div className='App dark:bg-gray-900'>
                <RouterProvider router={router} />
              </div>
            </ToastProvider>
          </FavoritesProvider>
        </CartProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;

