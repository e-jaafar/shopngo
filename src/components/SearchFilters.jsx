import React from 'react';
import { motion } from 'framer-motion';

const SearchFilters = ({ 
  filters, 
  onFilterChange, 
  onSortChange, 
  sortConfig,
  categories,
  priceRange,
  onPriceRangeChange,
  onReset 
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg mb-6"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Filtre par catégorie */}
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Catégorie
          </label>
          <select
            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-white"
            value={filters.category || 'all'}
            onChange={(e) => onFilterChange('category', e.target.value)}
          >
            <option value="all">Toutes les catégories</option>
            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
        </div>

        {/* Filtre par prix */}
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Prix
          </label>
          <div className="flex items-center space-x-4">
            <input
              type="number"
              className="w-24 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-white"
              value={priceRange.min}
              onChange={(e) => onPriceRangeChange({ ...priceRange, min: Number(e.target.value) })}
              placeholder="Min"
            />
            <span className="text-gray-500 dark:text-gray-400">-</span>
            <input
              type="number"
              className="w-24 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-white"
              value={priceRange.max}
              onChange={(e) => onPriceRangeChange({ ...priceRange, max: Number(e.target.value) })}
              placeholder="Max"
            />
          </div>
        </div>

        {/* Tri */}
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Trier par
          </label>
          <select
            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-white"
            value={sortConfig.key || 'default'}
            onChange={(e) => onSortChange(e.target.value)}
          >
            <option value="default">Par défaut</option>
            <option value="price">Prix</option>
            <option value="title">Nom</option>
          </select>
        </div>

        {/* Bouton de réinitialisation */}
        <div className="flex items-end">
          <button
            onClick={onReset}
            className="w-full px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 rounded-md hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-200"
          >
            Réinitialiser les filtres
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default SearchFilters; 