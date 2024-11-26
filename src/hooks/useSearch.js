import { useState, useMemo } from 'react';

export const useSearch = (items, options = {}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState(options.initialFilters || {});
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'asc' });

  const filteredItems = useMemo(() => {
    if (!items || items.length === 0) return [];
    
    let results = [...items];

    // Recherche textuelle
    if (searchTerm) {
      results = results.filter(item => {
        const searchRegex = new RegExp(searchTerm, 'i');
        return Object.values(item).some(value => 
          typeof value === 'string' && searchRegex.test(value)
        );
});
    }

    // Application des filtres
    Object.entries(filters).forEach(([key, value]) => {
      if (value !== null && value !== undefined && value !== 'all') {
        results = results.filter(item => {
          if (typeof value === 'object' && 'min' in value && 'max' in value) {
            return item[key] >= value.min && item[key] <= value.max;
          }
          return item[key] === value;
        });
      }
    });

    // Tri
    if (sortConfig.key) {
      results.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === 'asc' ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === 'asc' ? 1 : -1;
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