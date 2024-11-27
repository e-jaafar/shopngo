import React from 'react';
import PageTransition from '../PageTransition';
import { motion } from 'framer-motion';
import { 
  ShieldCheckIcon, 
  LockClosedIcon, 
  DocumentTextIcon,
  UserGroupIcon,
  EnvelopeIcon
} from '@heroicons/react/24/outline';

const Privacy = () => {
  const sections = [
    {
      icon: ShieldCheckIcon,
      title: "Protection des données",
      content: "Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour protéger vos données personnelles contre toute perte, accès non autorisé ou divulgation accidentelle."
    },
    {
      icon: DocumentTextIcon,
      title: "Collecte des données",
      content: "Nous collectons uniquement les données nécessaires à l'amélioration de votre expérience d'achat : informations de compte, historique des commandes, préférences de navigation."
    },
    {
      icon: UserGroupIcon,
      title: "Partage des données",
      content: "Vos données ne sont jamais vendues à des tiers. Elles ne sont partagées qu'avec nos partenaires de confiance (livraison, paiement) dans le strict cadre de nos services."
    }
  ];

  const rights = [
    "Droit d'accès à vos données personnelles",
    "Droit de rectification des données inexactes",
    "Droit à l'effacement de vos données",
    "Droit à la limitation du traitement",
    "Droit à la portabilité des données",
    "Droit d'opposition au traitement",
    "Droit de retirer votre consentement"
  ];

  const cookies = [
    {
      type: "Essentiels",
      description: "Nécessaires au fonctionnement du site",
      required: true
    },
    {
      type: "Analytiques",
      description: "Nous aident à améliorer votre expérience",
      required: false
    },
    {
      type: "Marketing",
      description: "Permettent de personnaliser les publicités",
      required: false
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
            Politique de Confidentialité
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Votre vie privée est importante pour nous. Cette politique explique comment nous collectons,
            utilisons et protégeons vos données personnelles.
          </p>
        </motion.div>

        {/* Sections principales */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {sections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg"
            >
              <section.icon className="h-12 w-12 text-indigo-600 dark:text-indigo-400 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                {section.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {section.content}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Vos droits */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg mb-16"
        >
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
            <LockClosedIcon className="h-6 w-6 mr-2 text-indigo-600 dark:text-indigo-400" />
            Vos droits
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {rights.map((right, index) => (
              <div key={index} className="flex items-center space-x-3">
                <div className="h-2 w-2 bg-indigo-600 dark:bg-indigo-400 rounded-full" />
                <span className="text-gray-700 dark:text-gray-300">{right}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Cookies */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg mb-16"
        >
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Gestion des Cookies
          </h2>
          <div className="space-y-6">
            {cookies.map((cookie, index) => (
              <div key={index} className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                    {cookie.type}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {cookie.description}
                  </p>
                </div>
                <div className="flex items-center">
                  {cookie.required ? (
                    <span className="text-sm text-gray-500 dark:text-gray-400">Requis</span>
                  ) : (
                    <label className="flex items-center cursor-pointer">
                      <div className="relative">
                        <input type="checkbox" className="sr-only" />
                        <div className="block bg-gray-600 dark:bg-gray-700 w-14 h-8 rounded-full"></div>
                        <div className="dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition"></div>
                      </div>
                    </label>
                  )}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Contact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-indigo-600 dark:bg-indigo-900 rounded-lg p-8 text-center"
        >
          <h2 className="text-2xl font-bold text-white mb-4">
            Des questions sur vos données ?
          </h2>
          <p className="text-indigo-100 mb-6">
            Notre délégué à la protection des données est à votre écoute
          </p>
          <a
            href="mailto:privacy@shopngo.com"
            className="inline-flex items-center px-6 py-3 bg-white text-indigo-600 rounded-md font-medium hover:bg-indigo-50 transition-colors"
          >
            <EnvelopeIcon className="h-5 w-5 mr-2" />
            privacy@shopngo.com
          </a>
        </motion.div>
      </div>
    </PageTransition>
  );
};

export default Privacy; 