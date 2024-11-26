import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useFavorites } from '../context/FavoritesContext';
import { HeartIcon } from '@heroicons/react/24/outline';
import { HeartIcon as HeartSolidIcon } from '@heroicons/react/24/solid';
import { useTheme } from '../context/ThemeContext';
import SearchFilters from './SearchFilters';
import { useSearch } from '../hooks/useSearch';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const { dispatch } = useCart();
  const { state: favoritesState, dispatch: favoritesDispatch } = useFavorites();
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 20;

  const {
    searchTerm,
    setSearchTerm,
    filters,
    updateFilter,
    sortConfig,
    updateSort,
    resetFilters,
    filteredItems
  } = useSearch(products, {
    initialFilters: {
      category: 'all',
      priceRange: { min: 0, max: 1000 }
    }
  });

  const getCategoryPlaceholder = (categoryId) => {
    // Images thématiques par catégorie
    const imagesByCategory = {
      1: [ // Clothes
        "https://images.unsplash.com/photo-1523381210434-271e8be1f52b",
        "https://images.unsplash.com/photo-1556905055-8f358a7a47b2",
        "https://images.unsplash.com/photo-1445205170230-053b83016050",
      ],
      2: [ // Electronics
        "https://images.unsplash.com/photo-1498049794561-7780e7231661",
        "https://images.unsplash.com/photo-1526406915894-7bcd65f60845",
        "https://images.unsplash.com/photo-1550009158-9ebf69173e03",
      ],
      3: [ // Furniture
        "https://images.unsplash.com/photo-1555041469-a586c61ea9bc",
        "https://images.unsplash.com/photo-1538688525198-9b88f6f53126",
        "https://images.unsplash.com/photo-1567016376408-0226e4d0c1ea",
      ],
      4: [ // Shoes
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
        "https://images.unsplash.com/photo-1549298916-b41d501d3772",
        "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77",
      ],
      5: [ // Others
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
        "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f",
        "https://images.unsplash.com/photo-1553456558-aff63285bdd1",
      ],
    };

    const images = categoryId in imagesByCategory ? imagesByCategory[categoryId] : imagesByCategory[5];
    const randomIndex = Math.floor(Math.random() * images.length);
    return `${images[randomIndex]}?w=640&h=480&fit=crop`;
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const [productsRes, categoriesRes] = await Promise.all([
          axios.get('https://api.escuelajs.co/api/v1/products'),
          axios.get('https://api.escuelajs.co/api/v1/categories')
        ]);
        
        const adaptedProducts = productsRes.data.map(product => ({
          ...product,
          images: product.images.map(img => {
            if (typeof img === 'string') {
              if (img.includes('placeimg') || img.includes('[') || img.includes(']')) {
                // Utiliser une image thématique basée sur la catégorie
                return getCategoryPlaceholder(product.category.id);
              }
              return img;
            }
            return img;
          })
        }));
        
        setProducts(adaptedProducts);
        setCategories(categoriesRes.data);
      } catch (error) {
        console.error('Erreur lors du chargement des produits:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const handleToggleFavorite = (product) => {
    const isFavorite = favoritesState.items.some(item => item.id === product.id);
    if (isFavorite) {
      favoritesDispatch({ type: 'REMOVE_FROM_FAVORITES', payload: product.id });
    } else {
      favoritesDispatch({ type: 'ADD_TO_FAVORITES', payload: product });
    }
  };

  // Pagination
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredItems.slice(indexOfFirstProduct, indexOfLastProduct);
  const totalPages = Math.ceil(filteredItems.length / productsPerPage);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-6">
        <input
          type="text"
          placeholder="Rechercher un produit..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full px-4 py-2 rounded-lg border dark:border-gray-700 dark:bg-gray-800 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
        />
      </div>

      <SearchFilters
        filters={filters}
        onFilterChange={updateFilter}
        sortConfig={sortConfig}
        onSortChange={updateSort}
        categories={categories}
        priceRange={filters.priceRange}
        onPriceRangeChange={(range) => updateFilter('priceRange', range)}
        onReset={resetFilters}
      />

      {currentProducts.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-500 dark:text-gray-400">Aucun produit trouvé</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {currentProducts.map((product) => (
            <div
              key={product.id}
              className="group relative bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <button
                onClick={() => handleToggleFavorite(product)}
                className="absolute top-2 right-2 z-10 p-2 rounded-full bg-white shadow-md hover:bg-gray-100"
              >
                {favoritesState.items.some(item => item.id === product.id) ? (
                  <HeartSolidIcon className="h-5 w-5 text-red-500" />
                ) : (
                  <HeartIcon className="h-5 w-5 text-gray-400" />
                )}
              </button>

              <Link to={`/products/${product.id}`}>
                <div className="w-full h-64 bg-gray-200 dark:bg-gray-700">
                  <img
                    src={product.images[0]}
                    alt={product.title}
                    className="w-full h-full object-contain p-4"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-sm font-medium text-gray-900 dark:text-white truncate">
                    {product.title}
                  </h3>
                  <p className="mt-1 text-lg font-medium text-indigo-600 dark:text-indigo-400">
                    {product.price.toFixed(2)} €
                  </p>
                  <div className="mt-2">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200">
                      {product.category?.name || 'Catégorie non définie'}
                    </span>
                  </div>
                </div>
              </Link>

              <div className="p-4 pt-0">
                <button
                  onClick={() => dispatch({ type: 'ADD_TO_CART', payload: product })}
                  className="w-full bg-indigo-600 dark:bg-indigo-500 text-white px-4 py-2 rounded-md hover:bg-indigo-700 dark:hover:bg-indigo-600"
                >
                  Ajouter au panier
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="mt-8 flex justify-center space-x-2">
          <button
            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 rounded-md hover:bg-gray-300 dark:hover:bg-gray-600 disabled:opacity-50"
          >
            Précédent
          </button>
          
          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentPage(index + 1)}
              className={`px-4 py-2 rounded-md ${
                currentPage === index + 1
                  ? 'bg-indigo-600 text-white'
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600'
              }`}
            >
              {index + 1}
            </button>
          ))}
          
          <button
            onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
            className="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 rounded-md hover:bg-gray-300 dark:hover:bg-gray-600 disabled:opacity-50"
          >
            Suivant
          </button>
        </div>
      )}
    </div>
  );
};

export default Products; 