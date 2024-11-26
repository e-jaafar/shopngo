import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const { isDarkMode } = useTheme();

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get('https://api.escuelajs.co/api/v1/categories');
        setCategories(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Erreur lors du chargement des catégories:', error);
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600 dark:border-indigo-400"></div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
        Nos Catégories
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {categories.map((category, index) => (
          <motion.div
            key={category.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="relative group"
          >
            <Link to={`/products?category=${category.id}`}>
              <div className="relative h-64 rounded-lg overflow-hidden">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-30 transition-all duration-300" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <h2 className="text-2xl font-bold text-white mb-2">
                      {category.name}
                    </h2>
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-indigo-600 text-white">
                      Explorer
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>

      {/* Section statistiques */}
      <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-8">
        {[
          { label: "Catégories", value: categories.length },
          { label: "Produits", value: "1000+" },
          { label: "Marques", value: "50+" },
          { label: "Clients satisfaits", value: "10K+" }
        ].map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 + 0.5 }}
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg text-center"
          >
            <div className="text-3xl font-bold text-indigo-600 dark:text-indigo-400 mb-2">
              {stat.value}
            </div>
            <div className="text-gray-600 dark:text-gray-300">
              {stat.label}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Section newsletter spécifique aux catégories */}
      <div className="mt-16 bg-indigo-600 dark:bg-indigo-800 rounded-lg p-8 text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">
            Restez informé des nouvelles catégories
          </h2>
          <p className="mb-6 text-indigo-100">
            Soyez le premier à découvrir nos nouvelles collections et catégories exclusives
          </p>
          <form className="flex flex-col sm:flex-row gap-4 justify-center">
            <input
              type="email"
              placeholder="Votre email"
              className="flex-1 max-w-md px-6 py-3 rounded-full bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button className="px-8 py-3 bg-white text-indigo-600 rounded-full font-medium hover:bg-gray-100 transition-colors duration-300">
              S'abonner
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Categories; 