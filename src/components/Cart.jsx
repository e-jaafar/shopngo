import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { useToast } from '../context/ToastContext';

const Cart = () => {
  const { state, dispatch } = useCart();
  const { showToast } = useToast();
  const [promoCode, setPromoCode] = useState('');
  const [appliedPromo, setAppliedPromo] = useState(null);

  // Liste des codes promo valides
  const validPromoCodes = {
    'SUMMER15': { discount: 0.15, label: '15% de réduction' }
  };

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

  const subtotal = state.items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handleApplyPromo = () => {
    const promo = validPromoCodes[promoCode];
    if (promo) {
      setAppliedPromo(promo);
      showToast('Code promo appliqué avec succès !', 'success');
      setPromoCode('');
    } else {
      showToast('Code promo invalide', 'error');
    }
  };

  const removePromo = () => {
    setAppliedPromo(null);
    showToast('Code promo retiré', 'info');
  };

  const discount = appliedPromo ? subtotal * appliedPromo.discount : 0;
  const totalPrice = subtotal - discount;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h2 className="text-2xl font-extrabold text-gray-900 dark:text-white mb-8">Votre Panier</h2>
      
      {state.items.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-500 dark:text-gray-400">Votre panier est vide</p>
        </div>
      ) : (
        <div className="space-y-8">
          {/* Liste des produits */}
          <div className="space-y-4">
            {state.items.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between bg-white dark:bg-gray-800 p-4 rounded-lg shadow"
              >
                <div className="flex items-center space-x-4">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-16 h-16 object-contain bg-white dark:bg-gray-700 rounded-md"
                  />
                  <div>
                    <h3 className="text-sm font-medium text-gray-900 dark:text-white">{item.title}</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{item.price.toFixed(2)} €</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                      className="p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
                      aria-label="Diminuer la quantité"
                    >
                      <svg className="w-6 h-6 text-gray-600 dark:text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                      </svg>
                    </button>
                    
                    <span className="w-8 text-center text-gray-900 dark:text-white">{item.quantity}</span>
                    
                    <button
                      onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                      className="p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
                      aria-label="Augmenter la quantité"
                    >
                      <svg className="w-6 h-6 text-gray-600 dark:text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                      </svg>
                    </button>
                  </div>
                  
                  <button
                    onClick={() => handleRemoveItem(item.id)}
                    className="p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 text-red-500"
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

          {/* Section code promo et résumé */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow mt-8">
            {/* Code promo */}
            <div className="mb-6">
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Code promo</h3>
              {appliedPromo ? (
                <div className="flex items-center justify-between bg-green-50 dark:bg-green-900 p-3 rounded-md">
                  <span className="text-green-700 dark:text-green-200">
                    {appliedPromo.label} appliquée
                  </span>
                  <button
                    onClick={removePromo}
                    className="text-sm text-red-600 dark:text-red-400 hover:text-red-800 dark:hover:text-red-300"
                  >
                    Retirer
                  </button>
                </div>
              ) : (
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={promoCode}
                    onChange={(e) => setPromoCode(e.target.value.toUpperCase())}
                    placeholder="Entrez votre code promo"
                    className="flex-1 px-4 py-2 border dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  />
                  <button
                    onClick={handleApplyPromo}
                    className="px-4 py-2 bg-indigo-600 dark:bg-indigo-500 text-white rounded-md hover:bg-indigo-700 dark:hover:bg-indigo-600"
                  >
                    Appliquer
                  </button>
                </div>
              )}
            </div>

            {/* Résumé */}
            <div className="space-y-2">
              <div className="flex justify-between text-base text-gray-900 dark:text-white">
                <p>Sous-total</p>
                <p>{subtotal.toFixed(2)} €</p>
              </div>
              {appliedPromo && (
                <div className="flex justify-between text-base text-green-600 dark:text-green-400">
                  <p>Réduction</p>
                  <p>-{discount.toFixed(2)} €</p>
                </div>
              )}
              <div className="flex justify-between text-lg font-bold text-gray-900 dark:text-white pt-4 border-t border-gray-200 dark:border-gray-700">
                <p>Total</p>
                <p>{totalPrice.toFixed(2)} €</p>
              </div>
            </div>

            <div className="mt-6">
              <button
                type="button"
                className="w-full flex justify-center items-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 dark:bg-indigo-500 hover:bg-indigo-700 dark:hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
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