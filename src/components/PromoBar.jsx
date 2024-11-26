import React from 'react';
import { motion } from 'framer-motion';

const PromoBar = () => {
  return (
    <div className="bg-indigo-600 dark:bg-indigo-800 fixed w-full z-50">
      <motion.div 
        className="max-w-7xl mx-auto py-2 px-3 sm:px-6 lg:px-8"
        initial={{ x: "-100%" }}
        animate={{ x: 0 }}
        transition={{ 
          duration: 20,
          repeat: Infinity,
          repeatType: "loop",
          ease: "linear"
        }}
      >
        <div className="flex items-center justify-center text-white">
          <span className="text-sm font-medium whitespace-nowrap">
            🎉 SOLDES D'ÉTÉ : -15% sur tout le site avec le code "SUMMER15" 🌞
          </span>
        </div>
      </motion.div>
    </div>
  );
};

export default PromoBar; 