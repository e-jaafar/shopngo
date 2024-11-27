import React from 'react';
import { motion } from 'framer-motion';

const PromoBar = () => {
  const promos = [
    {
      icon: "🎉",
      text: "SOLDES D'ÉTÉ : -15% avec le code 'SUMMER15'",
      endIcon: "🌞"
    },
    {
      icon: "🚚",
      text: "Livraison GRATUITE dès 50€ d'achat",
      endIcon: "📦"
    },
    {
      icon: "⚡",
      text: "FLASH DEAL : -20% sur les Electronics",
      endIcon: "💻"
    },
    {
      icon: "🎁",
      text: "10€ offerts pour vous et votre filleul",
      endIcon: "💝"
    }
  ];

  return (
    <div className="bg-indigo-600 dark:bg-indigo-800 h-8 overflow-hidden text-sm">
      <motion.div 
        className="flex whitespace-nowrap h-full items-center"
        initial={{ x: "100%" }}
        animate={{ x: "-100%" }}
        transition={{ 
          duration: 25,
          repeat: Infinity,
          repeatType: "loop",
          ease: "linear"
        }}
      >
        {[...promos, ...promos].map((promo, index) => (
          <div 
            key={index}
            className="flex items-center justify-center text-white/90 mx-6"
          >
            <span className="font-medium whitespace-nowrap flex items-center gap-2">
              <span>{promo.icon}</span>
              {promo.text}
              <span>{promo.endIcon}</span>
              <span className="mx-6 text-indigo-300/50">●</span>
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default PromoBar; 