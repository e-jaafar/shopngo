import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import { useCart } from '../context/CartContext';
import { motion } from 'framer-motion';
import PageTransition from './PageTransition';
import Reviews from './Reviews';
import RelatedProducts from './RelatedProducts';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { dispatch } = useCart();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`https://api.escuelajs.co/api/v1/products/${id}`);
        const adaptedProduct = {
          ...response.data,
          image: response.data.images[0]
        };
        setProduct(adaptedProduct);
        setLoading(false);
      } catch (err) {
        setError("Une erreur est survenue lors du chargement du produit.");
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  const handleAddToCart = () => {
    dispatch({ type: 'ADD_TO_CART', payload: product });
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600 dark:border-indigo-400"></div>
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="text-center py-10">
        <p className="text-red-500 dark:text-red-400">{error || "Produit non trouvé"}</p>
        <Link to="/products" className="mt-4 inline-block text-indigo-600 dark:text-indigo-400 hover:text-indigo-500 dark:hover:text-indigo-300">
          Retour aux produits
        </Link>
      </div>
    );
  }

  return (
    <PageTransition>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="lg:grid lg:grid-cols-2 lg:gap-x-8 lg:items-start"
        >
          {/* Galerie d'images */}
          <div className="flex flex-col">
            <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 dark:bg-gray-700 rounded-lg overflow-hidden">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-full object-center object-contain bg-white dark:bg-gray-800 p-4"
              />
            </div>
          </div>

          {/* Informations produit */}
          <div className="mt-10 px-4 sm:px-0 sm:mt-16 lg:mt-0">
            <div className="flex justify-between items-center">
              <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">
                {product.title}
              </h1>
              <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200">
                {product.category}
              </span>
            </div>

            <div className="mt-3">
              <h2 className="sr-only">Information produit</h2>
              <p className="text-3xl text-gray-900 dark:text-white">{product.price.toFixed(2)} €</p>
            </div>

            <div className="mt-6">
              <h3 className="sr-only">Description</h3>
              <div className="text-base text-gray-700 dark:text-gray-300 space-y-6">
                <p>{product.description}</p>
              </div>
            </div>

            <div className="mt-8 flex flex-col space-y-4">
              <button
                onClick={handleAddToCart}
                className="w-full bg-indigo-600 dark:bg-indigo-500 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 dark:hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Ajouter au panier
              </button>
              <Link
                to="/products"
                className="w-full bg-gray-100 dark:bg-gray-700 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
              >
                Retour aux produits
              </Link>
            </div>

            {/* Caractéristiques */}
            <div className="mt-10">
              <h2 className="text-sm font-medium text-gray-900 dark:text-white">Détails</h2>
              <div className="mt-4 prose prose-sm text-gray-500 dark:text-gray-400">
                <ul>
                  <li>Catégorie: {product.category}</li>
                  <li>Note: {product.rating.rate}/5 ({product.rating.count} avis)</li>
                  <li>Référence: {product.id}</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Système d'avis */}
        <Reviews
          productId={product.id}
          rating={product.rating.rate}
          reviews={[
            {
              rating: 5,
              comment: "Excellent produit, je recommande !",
              date: "2024-03-20"
            },
            // Ajoutez d'autres avis simulés ici
          ]}
        />

        {/* Produits similaires */}
        <RelatedProducts currentProduct={product} />
      </div>
    </PageTransition>
  );
};

export default ProductDetail; 