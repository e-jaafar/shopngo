import React, { useState } from 'react';
import PageTransition from '../PageTransition';
import { motion } from 'framer-motion';
import { 
  ShieldCheckIcon, 
  CogIcon, 
  ChartBarIcon,
  MegaphoneIcon,
  InformationCircleIcon 
} from '@heroicons/react/24/outline';

const Cookies = () => {
  const [cookiePreferences, setCookiePreferences] = useState({
    necessary: true,
    analytics: false,
    marketing: false,
    preferences: false
  });

  const cookieTypes = [
    {
      id: "necessary",
      name: "Cookies Essentiels",
      description: "Nécessaires au fonctionnement du site. Ils ne peuvent pas être désactivés.",
      icon: ShieldCheckIcon,
      required: true
    },
    {
      id: "analytics",
      name: "Cookies Analytiques",
      description: "Nous aident à comprendre comment vous utilisez le site pour l'améliorer.",
      icon: ChartBarIcon,
      required: false
    },
    {
      id: "marketing",
      name: "Cookies Marketing",
      description: "Utilisés pour vous montrer des publicités pertinentes sur d'autres sites.",
      icon: MegaphoneIcon,
      required: false
    },
    {
      id: "preferences",
      name: "Cookies de Préférences",
      description: "Permettent de mémoriser vos préférences pour une meilleure expérience.",
      icon: CogIcon,
      required: false
    }
  ];

  const handleToggleCookie = (cookieId) => {
    if (cookieId === 'necessary') return; // Ne peut pas être désactivé
    setCookiePreferences(prev => ({
      ...prev,
      [cookieId]: !prev[cookieId]
    }));
  };

  const handleAcceptAll = () => {
    setCookiePreferences({
      necessary: true,
      analytics: true,
      marketing: true,
      preferences: true
    });
  };

  const handleRejectAll = () => {
    setCookiePreferences({
      necessary: true,
      analytics: false,
      marketing: false,
      preferences: false
    });
  };

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
            Politique de Cookies
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Nous utilisons des cookies pour améliorer votre expérience sur notre site.
            Gérez vos préférences ci-dessous.
          </p>
        </motion.div>

        {/* Boutons d'action rapide */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex justify-center space-x-4 mb-12"
        >
          <button
            onClick={handleAcceptAll}
            className="px-6 py-3 bg-indigo-600 dark:bg-indigo-500 text-white rounded-md hover:bg-indigo-700 dark:hover:bg-indigo-600 transition-colors"
          >
            Accepter tout
          </button>
          <button
            onClick={handleRejectAll}
            className="px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-md hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
          >
            Refuser les cookies non essentiels
          </button>
        </motion.div>

        {/* Types de cookies */}
        <div className="space-y-6">
          {cookieTypes.map((cookie, index) => (
            <motion.div
              key={cookie.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.1 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg"
            >
              <div className="flex items-start justify-between">
                <div className="flex items-start space-x-4">
                  <cookie.icon className="h-6 w-6 text-indigo-600 dark:text-indigo-400 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      {cookie.name}
                    </h3>
                    <p className="mt-1 text-gray-600 dark:text-gray-400">
                      {cookie.description}
                    </p>
                  </div>
                </div>
                <div className="flex items-center">
                  {cookie.required ? (
                    <span className="text-sm text-gray-500 dark:text-gray-400">Requis</span>
                  ) : (
                    <label className="flex items-center cursor-pointer">
                      <div className="relative">
                        <input
                          type="checkbox"
                          className="sr-only"
                          checked={cookiePreferences[cookie.id]}
                          onChange={() => handleToggleCookie(cookie.id)}
                        />
                        <div className={`w-14 h-8 rounded-full transition-colors duration-200 ease-in-out ${
                          cookiePreferences[cookie.id] ? 'bg-indigo-600 dark:bg-indigo-500' : 'bg-gray-200 dark:bg-gray-700'
                        }`}>
                          <div className={`absolute left-1 top-1 w-6 h-6 rounded-full bg-white transition-transform duration-200 ease-in-out ${
                            cookiePreferences[cookie.id] ? 'transform translate-x-6' : ''
                          }`} />
                        </div>
                      </div>
                    </label>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Information supplémentaire */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="mt-12 bg-gray-50 dark:bg-gray-900 p-6 rounded-lg"
        >
          <div className="flex items-start space-x-3">
            <InformationCircleIcon className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                En savoir plus
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Pour plus d'informations sur l'utilisation des cookies, consultez notre{' '}
                <a href="/privacy" className="text-indigo-600 dark:text-indigo-400 hover:underline">
                  politique de confidentialité
                </a>
                . Vous pouvez modifier vos préférences à tout moment.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </PageTransition>
  );
};

export default Cookies; 