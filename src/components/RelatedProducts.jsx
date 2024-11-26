import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const RelatedProducts = ({ currentProduct }) => {
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [loading, setLoading] = useState(true);

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
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Produits similaires</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {relatedProducts.map((product, index) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
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
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default RelatedProducts; 