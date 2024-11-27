import React from 'react';
import PageTransition from '../PageTransition';
import { motion } from 'framer-motion';
import { BriefcaseIcon, AcademicCapIcon, HeartIcon, RocketLaunchIcon } from '@heroicons/react/24/outline';

const Careers = () => {
  const jobs = [
    {
      id: 1,
      title: "Développeur Full Stack",
      department: "Tech",
      location: "Paris, France",
      type: "CDI",
      description: "Nous recherchons un développeur Full Stack expérimenté pour rejoindre notre équipe technique."
    },
    {
      id: 2,
      title: "UX Designer",
      department: "Design",
      location: "Remote",
      type: "CDI",
      description: "Créez des expériences utilisateur exceptionnelles pour notre plateforme e-commerce."
    },
    {
      id: 3,
      title: "Chef de Produit",
      department: "Produit",
      location: "Lyon, France",
      type: "CDI",
      description: "Dirigez le développement et la stratégie de nos produits e-commerce."
    }
  ];

  const benefits = [
    {
      icon: BriefcaseIcon,
      title: "Flexibilité",
      description: "Horaires flexibles et télétravail possible"
    },
    {
      icon: AcademicCapIcon,
      title: "Formation",
      description: "Budget formation annuel et développement personnel"
    },
    {
      icon: HeartIcon,
      title: "Bien-être",
      description: "Mutuelle premium et activités team building"
    },
    {
      icon: RocketLaunchIcon,
      title: "Évolution",
      description: "Opportunités d'évolution rapide"
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
            Rejoignez l'Aventure ShopnGo
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Construisez l'avenir du e-commerce avec nous. Nous recherchons des talents passionnés
            pour nous aider à redéfinir l'expérience shopping en ligne.
          </p>
        </motion.div>

        {/* Avantages */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg text-center"
            >
              <benefit.icon className="h-12 w-12 text-indigo-600 dark:text-indigo-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                {benefit.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Offres d'emploi */}
        <div className="space-y-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
            Postes Ouverts
          </h2>
          {jobs.map((job, index) => (
            <motion.div
              key={job.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="p-6">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                      {job.title}
                    </h3>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200">
                        {job.department}
                      </span>
                      <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200">
                        {job.type}
                      </span>
                      <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200">
                        {job.location}
                      </span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      {job.description}
                    </p>
                  </div>
                </div>
                <button className="bg-indigo-600 dark:bg-indigo-500 text-white px-6 py-2 rounded-md hover:bg-indigo-700 dark:hover:bg-indigo-600 transition-colors duration-200">
                  Postuler
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-16 text-center bg-indigo-600 dark:bg-indigo-500 rounded-lg p-8"
        >
          <h2 className="text-2xl font-bold text-white mb-4">
            Vous ne trouvez pas le poste idéal ?
          </h2>
          <p className="text-indigo-100 mb-6">
            Envoyez-nous une candidature spontanée et parlez-nous de vous !
          </p>
          <button className="bg-white text-indigo-600 px-8 py-3 rounded-md font-medium hover:bg-indigo-50 transition-colors duration-200">
            Candidature Spontanée
          </button>
        </motion.div>
      </div>
    </PageTransition>
  );
};

export default Careers; 