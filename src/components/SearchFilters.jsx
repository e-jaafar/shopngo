import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { AdjustmentsHorizontalIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';

const SearchFilters = ({ 
  searchTerm = '',
  onSearchChange = () => {},
  categories = [],
  selectedCategory = 'all',
  onCategoryChange = () => {},
  sortOrder = 'asc',
  onSortChange = () => {},
  priceRange = { min: 0, max: 1000 },
  onPriceRangeChange = () => {},
  onReset = () => {},
  minPrice = 0,
  maxPrice = 1000
}) => {
  const [showAdvancedFilters, setShowAdvancedFilters] = useState(false);

  const handlePriceChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    onPriceRangeChange({
      ...priceRange,
      [name]: Number(value)
    });
  };

  return (
    <div className="space-y-4">
      {/* Barre de recherche principale */}
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" />
        </div>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Rechercher un produit..."
          className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-white"
        />
        <button
          onClick={() => setShowAdvancedFilters(!showAdvancedFilters)}
          className="absolute inset-y-0 right-0 pr-3 flex items-center"
        >
          <AdjustmentsHorizontalIcon className="h-5 w-5 text-gray-400 hover:text-indigo-500" />
        </button>
      </div>

      {/* Filtres avancés */}
      <motion.div
        initial={false}
        animate={{ height: showAdvancedFilters ? 'auto' : 0, opacity: showAdvancedFilters ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className={`overflow-hidden bg-white dark:bg-gray-800 rounded-lg shadow-lg ${showAdvancedFilters ? 'p-6' : 'p-0'}`}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Filtre par catégorie */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Catégorie
            </label>
            <select
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-white"
              value={selectedCategory}
              onChange={(e) => onCategoryChange(e.target.value)}
            >
              <option value="all">Toutes les catégories</option>
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </option>
              ))}
            </select>
          </div>

          {/* Filtre par prix avec slider */}
          <div className="space-y-4">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Fourchette de prix: {priceRange.min}€ - {priceRange.max}€
            </label>
            <div className="space-y-4">
              <input
                type="range"
                min={minPrice}
                max={maxPrice}
                value={priceRange.min}
                name="min"
                onChange={handlePriceChange}
                className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer accent-indigo-600"
              />
              <input
                type="range"
                min={minPrice}
                max={maxPrice}
                value={priceRange.max}
                name="max"
                onChange={handlePriceChange}
                className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer accent-indigo-600"
              />
            </div>
            <div className="flex justify-between">
              <input
                type="number"
                value={priceRange.min}
                name="min"
                onChange={handlePriceChange}
                className="w-24 px-2 py-1 text-sm border border-gray-300 dark:border-gray-600 rounded-md dark:bg-gray-700 dark:text-white"
              />
              <input
                type="number"
                value={priceRange.max}
                name="max"
                onChange={handlePriceChange}
                className="w-24 px-2 py-1 text-sm border border-gray-300 dark:border-gray-600 rounded-md dark:bg-gray-700 dark:text-white"
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
              value={sortOrder}
              onChange={(e) => onSortChange(e.target.value)}
            >
              <option value="asc">Prix croissant</option>
              <option value="desc">Prix décroissant</option>
              <option value="rating">Meilleures notes</option>
              <option value="newest">Plus récents</option>
            </select>
          </div>
        </div>

        {/* Bouton de réinitialisation */}
        <div className="mt-6 flex justify-end">
          <button
            onClick={onReset}
            className="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 rounded-md hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-200"
          >
            Réinitialiser les filtres
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default SearchFilters; 