import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { HeartIcon } from '@heroicons/react/24/outline';
import { useFavorites } from '../context/FavoritesContext';
import ThemeToggle from './ThemeToggle';
import { useAuth } from '../context/AuthContext';
import LoginModal from './LoginModal';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const { state } = useCart();
  const { state: favoritesState } = useFavorites();
  const { isAuthenticated, user, logout } = useAuth();

  const cartItemsCount = state.items.reduce((sum, item) => sum + item.quantity, 0);
  const favoritesCount = favoritesState.items.length;

  // Style modifié pour une animation fluide de la barre
  const navLinkClass = ({ isActive }) => `
    inline-flex items-center px-4 py-2 text-sm font-medium 
    relative
    ${isActive 
      ? 'text-indigo-600 dark:text-indigo-400' 
      : 'text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400'
    }
  `;

  return (
    <nav className="bg-white dark:bg-gray-800 shadow-lg h-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex justify-between items-center h-full">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0">
              <span className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">ShopnGo</span>
            </Link>
            <div className="hidden md:ml-6 md:flex md:space-x-4 relative">
              <NavLink to="/" className={navLinkClass} end>
                {({ isActive }) => (
                  <div className="relative">
                    Accueil
                    {isActive && (
                      <motion.div
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-indigo-600 dark:bg-indigo-400"
                        layoutId="navbar-underline"
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                  </div>
                )}
              </NavLink>
              <NavLink to="/products" className={navLinkClass}>
                {({ isActive }) => (
                  <div className="relative">
                    Produits
                    {isActive && (
                      <motion.div
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-indigo-600 dark:bg-indigo-400"
                        layoutId="navbar-underline"
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                  </div>
                )}
              </NavLink>
              {isAuthenticated && (
                <NavLink to="/orders" className={navLinkClass}>
                  {({ isActive }) => (
                    <div className="relative">
                      Mes Commandes
                      {isActive && (
                        <motion.div
                          className="absolute bottom-0 left-0 right-0 h-0.5 bg-indigo-600 dark:bg-indigo-400"
                          layoutId="navbar-underline"
                          transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                        />
                      )}
                    </div>
                  )}
                </NavLink>
              )}
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <ThemeToggle />
            
            <NavLink
              to="/cart"
              className={({ isActive }) => `
                relative p-2 rounded-full 
                ${isActive 
                  ? 'text-indigo-600 dark:text-indigo-400' 
                  : 'text-gray-400 hover:text-gray-500 dark:hover:text-gray-300'
                }
              `}
            >
              <span className="sr-only">Voir le panier</span>
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              {cartItemsCount > 0 && (
                <span className="absolute -top-2 -right-2 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white bg-indigo-600 dark:bg-indigo-500 rounded-full">
                  {cartItemsCount}
                </span>
              )}
            </NavLink>

            <NavLink
              to="/favorites"
              className={({ isActive }) => `
                relative p-2 rounded-full 
                ${isActive 
                  ? 'text-red-500' 
                  : 'text-gray-400 hover:text-gray-500 dark:hover:text-gray-300'
                }
              `}
            >
              <span className="sr-only">Voir les favoris</span>
              <HeartIcon className="h-6 w-6" />
              {favoritesCount > 0 && (
                <span className="absolute -top-2 -right-2 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white bg-red-500 rounded-full">
                  {favoritesCount}
                </span>
              )}
            </NavLink>

            <div className="ml-4 relative">
              {isAuthenticated && user ? (
                <div className="flex items-center space-x-4">
                  <span className="text-gray-700 dark:text-gray-300">
                    {user.username}
                  </span>
                  <button
                    onClick={logout}
                    className="bg-red-600 dark:bg-red-500 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-red-700 dark:hover:bg-red-600"
                  >
                    Déconnexion
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => setIsLoginModalOpen(true)}
                  className="bg-indigo-600 dark:bg-indigo-500 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-indigo-700 dark:hover:bg-indigo-600"
                >
                  Connexion
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      <LoginModal 
        isOpen={isLoginModalOpen} 
        onClose={() => setIsLoginModalOpen(false)} 
      />
    </nav>
  );
};

export default Navbar; 