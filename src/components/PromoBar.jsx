import React from 'react';
import { motion } from 'framer-motion';

const PromoBar = () => {
  const promos = [
    {
      icon: "🎉",
      text: "SOLDES D'ÉTÉ : -15% sur tout le site avec le code 'SUMMER15'",
      endIcon: "🌞"
    },
    {
      icon: "🚚",
      text: "Livraison GRATUITE dès 50€ d'achat",
      endIcon: "📦"
    },
    {
      icon: "⚡",
      text: "FLASH DEAL : -20% sur les articles Electronics ce weekend",
      endIcon: "💻"
    },
    {
      icon: "🎁",
      text: "Offre parrainage : 10€ offerts pour vous et votre filleul",
      endIcon: "💝"
    },
    {
      icon: "🔥",
      text: "Dernières pièces en stock : jusqu'à -50% sur une sélection",
      endIcon: "⏰"
    }
  ];

  return (
    <div className="bg-indigo-600 dark:bg-indigo-800 h-12 fixed w-full z-[60] top-0 overflow-hidden">
      <motion.div 
        className="flex whitespace-nowrap py-2"
        initial={{ x: "100%" }}
        animate={{ x: "-100%" }}
        transition={{ 
          duration: 30,
          repeat: Infinity,
          repeatType: "loop",
          ease: "linear"
        }}
      >
        {[...promos, ...promos].map((promo, index) => (
          <div 
            key={index}
            className="flex items-center justify-center text-white mx-8"
          >
            <span className="text-sm font-medium whitespace-nowrap flex items-center gap-2">
              <span className="text-xl">{promo.icon}</span>
              {promo.text}
              <span className="text-xl">{promo.endIcon}</span>
              <span className="mx-8 text-indigo-300">●</span>
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default PromoBar; 