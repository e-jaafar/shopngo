import React from 'react';
import { Link } from 'react-router-dom';
import { useFavorites } from '../context/FavoritesContext';
import { useCart } from '../context/CartContext';
import PageTransition from './PageTransition';

const Favorites = () => {
  const { state: favoritesState, dispatch: favoritesDispatch } = useFavorites();
  const { dispatch: cartDispatch } = useCart();

  const handleRemoveFromFavorites = (productId) => {
    favoritesDispatch({ type: 'REMOVE_FROM_FAVORITES', payload: productId });
  };

  const handleAddToCart = (product) => {
    cartDispatch({ type: 'ADD_TO_CART', payload: product });
  };

  return (
    <PageTransition>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-2xl font-extrabold text-gray-900 mb-8">Mes Favoris</h2>
        
        {favoritesState.items.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500">Vous n'avez pas encore de favoris</p>
            <Link
              to="/products"
              className="mt-4 inline-block text-indigo-600 hover:text-indigo-500"
            >
              Découvrir nos produits
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {favoritesState.items.map((product) => (
              <div
                key={product.id}
                className="group relative bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <Link to={`/products/${product.id}`} className="block">
                  <div className="w-full h-48 bg-gray-200 overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-full object-contain object-center group-hover:opacity-75 transition-opacity duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-sm font-medium text-gray-900 truncate">
                      {product.title}
                    </h3>
                    <p className="mt-1 text-lg font-medium text-indigo-600">
                      {product.price.toFixed(2)} €
                    </p>
                  </div>
                </Link>
                <div className="p-4 pt-0 flex space-x-2">
                  <button
                    onClick={() => handleAddToCart(product)}
                    className="flex-1 bg-indigo-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Ajouter au panier
                  </button>
                  <button
                    onClick={() => handleRemoveFromFavorites(product.id)}
                    className="p-2 text-red-500 hover:bg-red-50 rounded-md"
                    aria-label="Retirer des favoris"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </PageTransition>
  );
};

export default Favorites; 