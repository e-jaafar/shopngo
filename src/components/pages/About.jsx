import React from 'react';
import PageTransition from '../PageTransition';
import { motion } from 'framer-motion';

const About = () => {
  const teamMembers = [
    {
      name: "Sarah Martin",
      role: "CEO & Fondatrice",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
      description: "Visionnaire passionnée par l'e-commerce depuis 15 ans."
    },
    {
      name: "Marc Dubois",
      role: "Directeur Commercial",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
      description: "Expert en stratégie de vente avec 10 ans d'expérience."
    },
    {
      name: "Julie Chen",
      role: "Directrice Marketing",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
      description: "Spécialiste du marketing digital et de l'expérience client."
    }
  ];

  const stats = [
    { label: "Clients satisfaits", value: "100K+" },
    { label: "Produits disponibles", value: "50K+" },
    { label: "Pays livrés", value: "30+" },
    { label: "Années d'expérience", value: "15+" }
  ];

  return (
    <PageTransition>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Notre Histoire
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Depuis 2008, ShopnGo redéfinit l'expérience du shopping en ligne en proposant 
            une sélection unique de produits de qualité et un service client exceptionnel.
          </p>
        </motion.div>

        {/* Statistiques */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
              className="text-center"
            >
              <div className="text-3xl font-bold text-indigo-600 dark:text-indigo-400 mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Notre Mission */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mb-16"
        >
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Notre Mission
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Chez ShopnGo, notre mission est de rendre le shopping en ligne accessible, 
            agréable et sûr pour tous. Nous nous engageons à offrir :
          </p>
          <ul className="mt-4 space-y-2 list-disc list-inside text-gray-600 dark:text-gray-400">
            <li>Une sélection rigoureuse de produits de qualité</li>
            <li>Des prix compétitifs et transparents</li>
            <li>Un service client réactif et professionnel</li>
            <li>Une expérience d'achat fluide et sécurisée</li>
          </ul>
        </motion.div>

        {/* L'équipe */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Notre Équipe
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {member.name}
                  </h3>
                  <p className="text-indigo-600 dark:text-indigo-400 mb-4">
                    {member.role}
                  </p>
                  <p className="text-gray-600 dark:text-gray-400">
                    {member.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </PageTransition>
  );
};

export default About;