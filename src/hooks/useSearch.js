import { useState, useMemo } from 'react';

export const useSearch = (items, options = {}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState(options.initialFilters || {});
  const [sortConfig, setSortConfig] = useState(options.initialSort || { key: null, direction: 'asc' });

  const filteredItems = useMemo(() => {
    if (!items || items.length === 0) return [];
    
    let results = [...items];

    // Recherche textuelle
    if (searchTerm) {
      results = results.filter(item => {
        const searchRegex = new RegExp(searchTerm, 'i');
        return (
          searchRegex.test(item.title) || 
          searchRegex.test(item.description) ||
          (item.category && searchRegex.test(item.category.name))
        );
      });
    }

    // Filtre par catégorie
    if (filters.category && filters.category !== 'all') {
      const categoryId = parseInt(filters.category);
      results = results.filter(item => item.category && item.category.id === categoryId);
    }

    // Filtre par prix
    if (filters.priceRange) {
      const { min, max } = filters.priceRange;
      results = results.filter(item => {
        const price = parseFloat(item.price);
        return price >= min && price <= max;
      });
    }

    // Tri
    if (sortConfig.key && sortConfig.key !== 'default') {
      results.sort((a, b) => {
        if (sortConfig.key === 'price') {
          const priceA = parseFloat(a.price);
          const priceB = parseFloat(b.price);
          return sortConfig.direction === 'asc' ? priceA - priceB : priceB - priceA;
        }
        if (sortConfig.key === 'title') {
          return sortConfig.direction === 'asc' 
            ? a.title.localeCompare(b.title)
            : b.title.localeCompare(a.title);
        }
        return 0;
      });
    }

    return results;
  }, [items, searchTerm, filters, sortConfig]);

  const updateFilter = (key, value) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  };

  const updateSort = (key) => {
    setSortConfig(prev => ({
      key,
      direction: prev.key === key && prev.direction === 'asc' ? 'desc' : 'asc'
    }));
  };

  const resetFilters = () => {
    setFilters(options.initialFilters || {});
    setSortConfig({ key: null, direction: 'asc' });
    setSearchTerm('');
  };

  return {
    searchTerm,
    setSearchTerm,
    filters,
    updateFilter,
    sortConfig,
    updateSort,
    resetFilters,
    filteredItems
  };
}; 