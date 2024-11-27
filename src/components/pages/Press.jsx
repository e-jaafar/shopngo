import React from 'react';
import PageTransition from '../PageTransition';
import { motion } from 'framer-motion';
import { NewspaperIcon, TrophyIcon, ChartBarIcon } from '@heroicons/react/24/outline';

const Press = () => {
  const pressReleases = [
    {
      id: 1,
      date: "15 Mars 2024",
      title: "ShopnGo franchit le cap du million de clients",
      description: "Une étape majeure dans notre développement qui confirme notre position de leader.",
      source: "Les Échos",
      link: "#"
    },
    {
      id: 2,
      date: "28 Février 2024",
      title: "Lancement de notre programme de fidélité premium",
      description: "Une nouvelle offre exclusive pour récompenser nos clients les plus fidèles.",
      source: "Le Figaro",
      link: "#"
    },
    {
      id: 3,
      date: "10 Janvier 2024",
      title: "ShopnGo s'engage pour la neutralité carbone",
      description: "Un plan ambitieux pour réduire notre impact environnemental d'ici 2025.",
      source: "Le Monde",
      link: "#"
    }
  ];

  const awards = [
    {
      year: "2024",
      title: "Meilleure Expérience Client",
      organization: "E-commerce Awards"
    },
    {
      year: "2023",
      title: "Innovation de l'Année",
      organization: "Tech Retail Summit"
    },
    {
      year: "2023",
      title: "Service Client d'Excellence",
      organization: "Customer Success Awards"
    }
  ];

  const stats = [
    {
      icon: ChartBarIcon,
      value: "250M€",
      label: "Chiffre d'affaires 2023",
      growth: "+45% vs 2022"
    },
    {
      icon: TrophyIcon,
      value: "15+",
      label: "Prix et distinctions",
      growth: "Depuis 2020"
    },
    {
      icon: NewspaperIcon,
      value: "500+",
      label: "Articles de presse",
      growth: "Dans 20 pays"
    }
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
            Espace Presse
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Retrouvez toutes les actualités, communiqués de presse et ressources médias de ShopnGo.
          </p>
        </motion.div>

        {/* Statistiques clés */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg text-center"
            >
              <stat.icon className="h-8 w-8 text-indigo-600 dark:text-indigo-400 mx-auto mb-4" />
              <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                {stat.label}
              </div>
              <div className="text-sm text-indigo-600 dark:text-indigo-400 mt-1">
                {stat.growth}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Communiqués de presse récents */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-16"
        >
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
            Communiqués de presse récents
          </h2>
          <div className="space-y-6">
            {pressReleases.map((release) => (
              <div
                key={release.id}
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {release.date}
                    </span>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-1">
                      {release.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mt-2">
                      {release.description}
                    </p>
                  </div>
                  <span className="text-sm font-medium text-indigo-600 dark:text-indigo-400">
                    {release.source}
                  </span>
                </div>
                <div className="mt-4">
                  <a
                    href={release.link}
                    className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 font-medium"
                  >
                    Lire la suite →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Prix et Récompenses */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
            Prix et Récompenses
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {awards.map((award, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg text-center"
              >
                <div className="inline-block p-3 bg-indigo-100 dark:bg-indigo-900 rounded-full mb-4">
                  <TrophyIcon className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
                </div>
                <div className="text-sm text-indigo-600 dark:text-indigo-400 mb-2">
                  {award.year}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {award.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  {award.organization}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Contact Presse */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-16 bg-indigo-600 dark:bg-indigo-900 rounded-lg p-8 text-center"
        >
          <h2 className="text-2xl font-bold text-white mb-4">
            Contact Presse
          </h2>
          <p className="text-indigo-100 mb-6">
            Pour toute demande presse, merci de contacter notre service de relations médias
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
            <a
              href="mailto:presse@shopngo.com"
              className="px-6 py-3 bg-white text-indigo-600 rounded-md font-medium hover:bg-indigo-50 transition-colors"
            >
              presse@shopngo.com
            </a>
            <a
              href="tel:+33123456789"
              className="px-6 py-3 border border-white text-white rounded-md font-medium hover:bg-indigo-700 transition-colors"
            >
              +33 1 23 45 67 89
            </a>
          </div>
        </motion.div>
      </div>
    </PageTransition>
  );
};

export default Press; 