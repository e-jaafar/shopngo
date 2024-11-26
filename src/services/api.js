import axios from 'axios';

const BASE_URL = 'https://fakestoreapi.com';

// Configuration de l'intercepteur pour ajouter le token
const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Services pour les produits
export const productService = {
  getAll: async (limit = null, sort = 'asc') => {
    const params = new URLSearchParams();
    if (limit) params.append('limit', limit);
    if (sort) params.append('sort', sort);
    return api.get(`/products?${params.toString()}`);
  },

  getById: async (id) => {
    return api.get(`/products/${id}`);
  },

  getCategories: async () => {
    return api.get('/products/categories');
  },

  getByCategory: async (category, sort = 'asc') => {
    return api.get(`/products/category/${category}?sort=${sort}`);
  },

  create: async (product) => {
    return api.post('/products', product);
  },

  update: async (id, product) => {
    return api.put(`/products/${id}`, product);
  },

  delete: async (id) => {
    return api.delete(`/products/${id}`);
  }
};

// Services pour le panier
export const cartService = {
  getAll: async (params = {}) => {
    const queryParams = new URLSearchParams();
    if (params.startdate) queryParams.append('startdate', params.startdate);
    if (params.enddate) queryParams.append('enddate', params.enddate);
    if (params.limit) queryParams.append('limit', params.limit);
    if (params.sort) queryParams.append('sort', params.sort);
    return api.get(`/carts?${queryParams.toString()}`);
  },

  getById: async (id) => {
    return api.get(`/carts/${id}`);
  },

  getUserCart: async (userId, params = {}) => {
    const queryParams = new URLSearchParams();
    if (params.startdate) queryParams.append('startdate', params.startdate);
    if (params.enddate) queryParams.append('enddate', params.enddate);
    return api.get(`/carts/user/${userId}?${queryParams.toString()}`);
  },

  create: async (cart) => {
    return api.post('/carts', cart);
  },

  update: async (id, cart) => {
    return api.put(`/carts/${id}`, cart);
  },

  delete: async (id) => {
    return api.delete(`/carts/${id}`);
  }
};

// Services pour les utilisateurs
export const userService = {
  getAll: async (limit = null, sort = 'asc') => {
    const params = new URLSearchParams();
    if (limit) params.append('limit', limit);
    if (sort) params.append('sort', sort);
    return api.get(`/users?${params.toString()}`);
  },

  getById: async (id) => {
    return api.get(`/users/${id}`);
  },

  create: async (user) => {
    return api.post('/users', user);
  },

  update: async (id, user) => {
    return api.put(`/users/${id}`, user);
  },

  delete: async (id) => {
    return api.delete(`/users/${id}`);
  }
};

// Service d'authentification
export const authService = {
  login: async (credentials) => {
    return api.post('/auth/login', credentials);
  }
};

export default api; 