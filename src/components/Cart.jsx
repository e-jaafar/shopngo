import React from 'react';
import { useCart } from '../context/CartContext';

const Cart = () => {
  const { state, dispatch } = useCart();

  const handleQuantityChange = (id, quantity) => {
    if (quantity < 1) {
      dispatch({ type: 'REMOVE_FROM_CART', payload: id });
      return;
    }
    dispatch({ type: 'UPDATE_QUANTITY', payload: { id, quantity } });
  };

  const handleRemoveItem = (id) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: id });
  };

  const totalPrice = state.items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h2 className="text-2xl font-extrabold text-gray-900 mb-8">Votre Panier</h2>
      
      {state.items.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-500">Votre panier est vide</p>
        </div>
      ) : (
        <div className="space-y-8">
          {/* Liste des produits */}
          <div className="space-y-4">
            {state.items.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between bg-white p-4 rounded-lg shadow"
              >
                <div className="flex items-center space-x-4">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-16 h-16 object-contain"
                  />
                  <div>
                    <h3 className="text-sm font-medium text-gray-900">{item.title}</h3>
                    <p className="text-sm text-gray-500">{item.price.toFixed(2)} €</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                      className="p-1 rounded-full hover:bg-gray-100"
                      aria-label="Diminuer la quantité"
                    >
                      <svg className="w-6 h-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                      </svg>
                    </button>
                    
                    <span className="w-8 text-center">{item.quantity}</span>
                    
                    <button
                      onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                      className="p-1 rounded-full hover:bg-gray-100"
                      aria-label="Augmenter la quantité"
                    >
                      <svg className="w-6 h-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                      </svg>
                    </button>
                  </div>
                  
                  <button
                    onClick={() => handleRemoveItem(item.id)}
                    className="p-1 rounded-full hover:bg-gray-100 text-red-500"
                    aria-label="Supprimer l'article"
                  >
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Résumé du panier */}
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="flex justify-between text-base font-medium text-gray-900">
              <p>Total</p>
              <p>{totalPrice.toFixed(2)} €</p>
            </div>
            <p className="mt-0.5 text-sm text-gray-500">Frais de livraison calculés à la commande.</p>
            <div className="mt-6">
              <button
                type="button"
                className="w-full flex justify-center items-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Commander
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart; 