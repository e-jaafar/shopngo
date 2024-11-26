import React from 'react';
import { useNavigate, useRouteError } from 'react-router-dom';
import { motion } from 'framer-motion';
import { HomeIcon } from '@heroicons/react/24/outline';

const ErrorPage = () => {
  const error = useRouteError();
  const navigate = useNavigate();

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center px-4 py-12">
      <motion.div 
        className="max-w-xl w-full text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div 
          className="text-9xl font-bold text-indigo-600 dark:text-indigo-400 mb-8"
          variants={itemVariants}
        >
          404
        </motion.div>

        <motion.h1 
          className="text-3xl font-bold text-gray-900 dark:text-white mb-4"
          variants={itemVariants}
        >
          Page non trouvée
        </motion.h1>

        <motion.p 
          className="text-lg text-gray-600 dark:text-gray-400 mb-8"
          variants={itemVariants}
        >
          {error?.statusText || error?.message || 
            "Désolé, la page que vous recherchez semble avoir disparu dans l'espace..."}
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="space-y-4"
        >
          <button
            onClick={() => navigate(-1)}
            className="inline-flex items-center px-6 py-3 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm text-base font-medium text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 mr-4 transition-colors duration-200"
          >
            Retour
          </button>

          <button
            onClick={() => navigate('/')}
            className="inline-flex items-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 dark:bg-indigo-500 hover:bg-indigo-700 dark:hover:bg-indigo-600 transition-colors duration-200"
          >
            <HomeIcon className="h-5 w-5 mr-2" />
            Retour à l'accueil
          </button>
        </motion.div>

        {/* Animation décorative */}
        <motion.div
          className="mt-12"
          animate={{
            rotate: [0, 10, -10, 10, 0],
            scale: [1, 1.1, 0.9, 1.1, 1]
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        >
          <span className="text-6xl">🚀</span>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ErrorPage;
