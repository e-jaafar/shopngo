import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useFavorites } from '../context/FavoritesContext';
import { HeartIcon } from '@heroicons/react/24/outline';
import { HeartIcon as HeartSolidIcon } from '@heroicons/react/24/solid';
import SearchFilters from './SearchFilters';
import { useToast } from '../context/ToastContext';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <div className="flex items-center justify-center space-x-2">
      <button
        onClick={() => onPageChange(Math.max(1, currentPage - 1))}
        disabled={currentPage === 1}
        className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-md hover:bg-gray-50 dark:hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Précédent
      </button>
      
      <div className="hidden sm:flex space-x-2">
        {Array.from({ length: totalPages }, (_, i) => {
          const page = i + 1;
          // Afficher seulement les pages proches de la page actuelle
          if (
            page === 1 ||
            page === totalPages ||
            (page >= currentPage - 1 && page <= currentPage + 1)
          ) {
            return (
              <button
                key={page}
                onClick={() => onPageChange(page)}
                className={`px-4 py-2 text-sm font-medium rounded-md ${
                  currentPage === page
                    ? 'bg-indigo-600 dark:bg-indigo-500 text-white'
                    : 'text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700'
                }`}
              >
                {page}
              </button>
            );
          } else if (
            page === currentPage - 2 ||
            page === currentPage + 2
          ) {
            return (
              <span
                key={page}
                className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-200"
              >
                ...
              </span>
            );
          }
          return null;
        })}
      </div>

      <button
        onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
        disabled={currentPage === totalPages}
        className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-md hover:bg-gray-50 dark:hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Suivant
      </button>
    </div>
  );
};

const Products = () => {
  const [products, setProducts] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const { dispatch } = useCart();
  const { state: favoritesState, dispatch: favoritesDispatch } = useFavorites();
  const { showToast } = useToast();

  // États pour les filtres
  const [currentPage, setCurrentPage] = useState(1);
  const [sortOrder, setSortOrder] = useState('asc');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [priceRange, setPriceRange] = useState({ min: 0, max: 1000 });
  const productsPerPage = 8;

  // Chargement initial des produits et catégories
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [productsRes, categoriesRes] = await Promise.all([
          axios.get('https://fakestoreapi.com/products'),
          axios.get('https://fakestoreapi.com/products/categories')
        ]);

        setAllProducts(productsRes.data);
        setProducts(productsRes.data);
        setCategories(categoriesRes.data);
        setLoading(false);
      } catch (err) {
        showToast("Erreur de chargement des produits", "error");
        setLoading(false);
      }
    };

    fetchData();
  }, [showToast]);

  // Gestion du changement de catégorie
  useEffect(() => {
    if (selectedCategory === 'all') {
      setProducts(allProducts);
    } else {
      const filteredProducts = allProducts.filter(product => product.category === selectedCategory);
      setProducts(filteredProducts);
    }
  }, [selectedCategory, allProducts]);

  // Filtrage des produits
  const filteredProducts = products.filter(product => {
    const matchesSearch = product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesPrice = product.price >= priceRange.min && product.price <= priceRange.max;
    return matchesSearch && matchesPrice;
  });

  // Tri des produits
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortOrder === 'asc') {
      return a.price - b.price;
    } else if (sortOrder === 'desc') {
      return b.price - a.price;
    }
    return 0;
  });

  // Pagination
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = sortedProducts.slice(indexOfFirstProduct, indexOfLastProduct);
  const totalPages = Math.ceil(sortedProducts.length / productsPerPage);

  // Reset des filtres
  const handleResetFilters = () => {
    setSearchTerm('');
    setSelectedCategory('all');
    setSortOrder('asc');
    setPriceRange({ min: 0, max: 1000 });
    setCurrentPage(1);
    setProducts(allProducts);
  };

  // Gestion des favoris
  const handleToggleFavorite = (product) => {
    const isFavorite = favoritesState.items.some(item => item.id === product.id);
    if (isFavorite) {
      favoritesDispatch({ type: 'REMOVE_FROM_FAVORITES', payload: product.id });
      showToast("Retiré des favoris", "info");
    } else {
      favoritesDispatch({ type: 'ADD_TO_FAVORITES', payload: product });
      showToast("Ajouté aux favoris", "success");
    }
  };

  // Ajout au panier
  const handleAddToCart = (product) => {
    dispatch({ type: 'ADD_TO_CART', payload: product });
    showToast("Produit ajouté au panier", "success");
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <SearchFilters
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        categories={categories}
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
        sortOrder={sortOrder}
        onSortChange={setSortOrder}
        priceRange={priceRange}
        onPriceRangeChange={setPriceRange}
        onReset={handleResetFilters}
        minPrice={0}
        maxPrice={1000}
      />

      {/* Résultats et pagination supérieure */}
      <div className="mt-6 mb-4 flex flex-col sm:flex-row justify-between items-center">
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 sm:mb-0">
          {filteredProducts.length} produit(s) trouvé(s)
        </p>
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      </div>

      {/* Grille de produits */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 my-6">
        {currentProducts.map((product) => (
          <div key={product.id} className="group relative bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <button
              onClick={() => handleToggleFavorite(product)}
              className="absolute top-2 right-2 z-10 p-2 rounded-full bg-white dark:bg-gray-700 shadow-md hover:bg-gray-100 dark:hover:bg-gray-600"
            >
              {favoritesState.items.some(item => item.id === product.id) ? (
                <HeartSolidIcon className="h-5 w-5 text-red-500" />
              ) : (
                <HeartIcon className="h-5 w-5 text-gray-400" />
              )}
            </button>

            <Link to={`/products/${product.id}`} className="block">
              <div className="w-full h-64 bg-gray-200 dark:bg-gray-700 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-contain object-center group-hover:opacity-75 transition-opacity duration-300"
                />
              </div>
              <div className="p-4">
                <h3 className="text-sm font-medium text-gray-900 dark:text-white truncate">
                  {product.title}
                </h3>
                <p className="mt-1 text-lg font-medium text-indigo-600 dark:text-indigo-400">
                  {product.price.toFixed(2)} €
                </p>
              </div>
            </Link>

            <div className="p-4 pt-0">
              <button
                onClick={() => handleAddToCart(product)}
                className="w-full bg-indigo-600 dark:bg-indigo-500 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-indigo-700 dark:hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Ajouter au panier
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination inférieure */}
      <div className="mt-6">
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      </div>
    </div>
  );
};

export default Products; 