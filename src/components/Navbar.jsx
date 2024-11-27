import React, { useState, useEffect } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { HeartIcon, ShoppingBagIcon, UserIcon, MagnifyingGlassIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { useFavorites } from '../context/FavoritesContext';
import ThemeToggle from './ThemeToggle';
import { useAuth } from '../context/AuthContext';
import LoginModal from './LoginModal';
import { motion, AnimatePresence } from 'framer-motion';
import { useToast } from '../context/ToastContext';

const Navbar = () => {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);
  const { state } = useCart();
  const { state: favoritesState } = useFavorites();
  const { isAuthenticated, user, logout } = useAuth();
  const { showToast } = useToast();
  const navigate = useNavigate();

  const cartItemsCount = state.items.reduce((sum, item) => sum + item.quantity, 0);
  const favoritesCount = favoritesState.items.length;

  // Détection du scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const megaMenuCategories = {
    "Nouveautés": {
      featured: [
        { name: "Collection Été", href: "/products?collection=summer" },
        { name: "Dernières Tendances", href: "/products?sort=newest" },
      ],
      categories: [
        { name: "Vêtements", items: ["Robes", "T-shirts", "Pantalons", "Vestes"] },
        { name: "Accessoires", items: ["Sacs", "Bijoux", "Montres", "Lunettes"] },
        { name: "Chaussures", items: ["Sneakers", "Sandales", "Bottes", "Escarpins"] }
      ]
    },
    "Homme": {
      featured: [
        { name: "Nouvelle Collection", href: "/products?gender=men&new=true" },
        { name: "Best-Sellers", href: "/products?gender=men&bestsellers=true" },
      ],
      categories: [
        { name: "Vêtements", items: ["Costumes", "Chemises", "Jeans", "Pulls"] },
        { name: "Sport", items: ["Running", "Training", "Football", "Tennis"] },
        { name: "Accessoires", items: ["Ceintures", "Portefeuilles", "Cravates", "Montres"] }
      ]
    },
    "Femme": {
      featured: [
        { name: "Nouvelle Collection", href: "/products?gender=women&new=true" },
        { name: "Best-Sellers", href: "/products?gender=women&bestsellers=true" },
      ],
      categories: [
        { name: "Vêtements", items: ["Robes", "Tops", "Jupes", "Manteaux"] },
        { name: "Lingerie", items: ["Soutiens-gorge", "Culottes", "Pyjamas", "Maillots"] },
        { name: "Accessoires", items: ["Sacs", "Bijoux", "Écharpes", "Chapeaux"] }
      ]
    }
  };

  return (
    <div className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'backdrop-blur-lg bg-white/80 dark:bg-gray-900/80 shadow-lg' : 'bg-white dark:bg-gray-900'}`}>
      {/* Barre supérieure */}
      <div className="bg-indigo-600 dark:bg-indigo-800 text-white py-2 text-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <p>Livraison gratuite dès 50€ d'achat</p>
          <div className="flex items-center space-x-4">
            <Link to="/contact" className="hover:text-indigo-200">Aide</Link>
            <Link to="/stores" className="hover:text-indigo-200">Nos magasins</Link>
            <ThemeToggle />
          </div>
        </div>
      </div>

      {/* Navbar principale */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 text-transparent bg-clip-text">
              ShopnGo
            </span>
          </Link>

          {/* Navigation principale */}
          <nav className="hidden lg:flex items-center space-x-8">
            {Object.keys(megaMenuCategories).map((category) => (
              <div key={category} className="relative group">
                <button className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 font-medium py-2">
                  {category}
                </button>
                {/* Mega Menu */}
                <div className="absolute left-0 w-screen max-w-7xl -ml-72 mt-0 hidden group-hover:block">
                  <div className="relative mt-6">
                    <div className="absolute -top-2 left-72 w-4 h-4 rotate-45 bg-white dark:bg-gray-800"></div>
                    <div className="relative bg-white dark:bg-gray-800 shadow-xl rounded-lg p-6 grid grid-cols-4 gap-6">
                      {/* Featured */}
                      <div className="col-span-1 space-y-4">
                        <h3 className="text-indigo-600 dark:text-indigo-400 font-semibold">À la une</h3>
                        {megaMenuCategories[category].featured.map((item) => (
                          <Link
                            key={item.name}
                            to={item.href}
                            className="block text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400"
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                      {/* Categories */}
                      {megaMenuCategories[category].categories.map((cat) => (
                        <div key={cat.name} className="col-span-1">
                          <h3 className="font-semibold text-gray-900 dark:text-white mb-4">{cat.name}</h3>
                          <ul className="space-y-2">
                            {cat.items.map((item) => (
                              <li key={item}>
                                <Link
                                  to={`/products?category=${cat.name.toLowerCase()}&subcategory=${item.toLowerCase()}`}
                                  className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400"
                                >
                                  {item}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            {/* Recherche - Version corrigée pour mobile */}
            <div className="relative">
              <button
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400"
              >
                <MagnifyingGlassIcon className="h-6 w-6" />
              </button>
              <AnimatePresence>
                {isSearchOpen && (
                  <>
                    {/* Overlay */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="fixed inset-0 bg-black/20 z-40"
                      onClick={() => setIsSearchOpen(false)}
                    />
                    
                    {/* Barre de recherche - Positionnement corrigé */}
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="fixed left-0 right-0 top-[104px] px-4 z-50 sm:absolute sm:left-auto sm:right-0 sm:top-full sm:w-96 sm:px-0 sm:mt-2"
                    >
                      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-4">
                        <div className="relative">
                          <input
                            type="text"
                            placeholder="Rechercher..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full px-4 py-2 pr-10 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:text-white"
                            autoFocus
                          />
                          <button
                            onClick={() => setIsSearchOpen(false)}
                            className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                          >
                            <XMarkIcon className="h-5 w-5" />
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  </>
                )}
              </AnimatePresence>
            </div>

            {/* Favoris */}
            <Link
              to="/favorites"
              className="relative text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400"
            >
              <HeartIcon className="h-6 w-6" />
              {favoritesCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {favoritesCount}
                </span>
              )}
            </Link>

            {/* Panier */}
            <Link
              to="/cart"
              className="relative text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400"
            >
              <ShoppingBagIcon className="h-6 w-6" />
              {cartItemsCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-indigo-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartItemsCount}
                </span>
              )}
            </Link>

            {/* Compte */}
            {isAuthenticated ? (
              <div className="relative group">
                <button className="flex items-center space-x-2 text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400">
                  <UserIcon className="h-6 w-6" />
                  <span className="hidden sm:block">{user.username}</span>
                </button>
                <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-xl py-2 hidden group-hover:block">
                  <Link
                    to="/account"
                    className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    Mon compte
                  </Link>
                  <Link
                    to="/orders"
                    className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    Mes commandes
                  </Link>
                  <button
                    onClick={() => {
                      logout();
                      showToast("Déconnexion réussie", "success");
                    }}
                    className="block w-full text-left px-4 py-2 text-red-600 dark:text-red-400 hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    Déconnexion
                  </button>
                </div>
              </div>
            ) : (
              <button
                onClick={() => setIsLoginModalOpen(true)}
                className="bg-indigo-600 dark:bg-indigo-500 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 dark:hover:bg-indigo-600 transition-colors"
              >
                Connexion
              </button>
            )}
          </div>
        </div>
      </div>

      <LoginModal 
        isOpen={isLoginModalOpen} 
        onClose={() => setIsLoginModalOpen(false)} 
      />
    </div>
  );
};

export default Navbar; 