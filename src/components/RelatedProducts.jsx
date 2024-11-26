import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useCart } from '../context/CartContext';

const RelatedProducts = ({ currentProduct }) => {
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { dispatch } = useCart();

  useEffect(() => {
    const fetchRelatedProducts = async () => {
      try {
        const response = await axios.get(
          `https://fakestoreapi.com/products/category/${currentProduct.category}`
        );
        setRelatedProducts(
          response.data
            .filter(product => product.id !== currentProduct.id)
            .slice(0, 4)
        );
        setLoading(false);
      } catch (error) {
        console.error('Erreur lors du chargement des produits similaires:', error);
        setLoading(false);
      }
    };

    if (currentProduct?.category) {
      fetchRelatedProducts();
    }
  }, [currentProduct]);

  if (loading || relatedProducts.length === 0) return null;

  return (
    <div className="mt-16">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Produits similaires</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {relatedProducts.map((product, index) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="group relative bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <Link to={`/products/${product.id}`} className="block">
              <div className="w-full h-48 bg-gray-200 dark:bg-gray-700 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-contain object-center bg-white dark:bg-gray-800 p-2 group-hover:opacity-75 transition-opacity duration-300"
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
                    {product.category}
                  </span>
                </div>
              </div>
            </Link>
            <div className="p-4 pt-0">
              <button
                onClick={() => dispatch({ type: 'ADD_TO_CART', payload: product })}
                className="w-full bg-indigo-600 dark:bg-indigo-500 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-indigo-700 dark:hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-200"
              >
                Ajouter au panier
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default RelatedProducts; 