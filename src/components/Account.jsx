import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { useToast } from '../context/ToastContext';
import PageTransition from './PageTransition';
import { motion } from 'framer-motion';
import { Navigate } from 'react-router-dom';
import {
  UserCircleIcon,
  ShoppingBagIcon,
  HeartIcon,
  CogIcon,
  BellIcon,
  MapPinIcon,
  CreditCardIcon,
  KeyIcon,
  ArrowRightOnRectangleIcon
} from '@heroicons/react/24/outline';

const Account = () => {
  const { user, isAuthenticated, logout } = useAuth();
  const { showToast } = useToast();
  const [activeTab, setActiveTab] = useState('profile');

  // Redirection si non connecté
  if (!isAuthenticated || !user) {
    showToast("Veuillez vous connecter pour accéder à votre compte", "error");
    return <Navigate to="/" replace />;
  }

  const tabs = [
    { id: 'profile', name: 'Profil', icon: UserCircleIcon },
    { id: 'orders', name: 'Commandes', icon: ShoppingBagIcon },
    { id: 'favorites', name: 'Favoris', icon: HeartIcon },
    { id: 'addresses', name: 'Adresses', icon: MapPinIcon },
    { id: 'payments', name: 'Paiement', icon: CreditCardIcon },
    { id: 'notifications', name: 'Notifications', icon: BellIcon },
    { id: 'security', name: 'Sécurité', icon: KeyIcon },
    { id: 'settings', name: 'Paramètres', icon: CogIcon },
  ];

  const handleLogout = () => {
    logout();
    showToast('Déconnexion réussie', 'success');
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'profile':
        return (
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <div className="h-24 w-24 rounded-full bg-indigo-100 dark:bg-indigo-900 flex items-center justify-center">
                <UserCircleIcon className="h-16 w-16 text-indigo-600 dark:text-indigo-400" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{user.name}</h3>
                <p className="text-gray-500 dark:text-gray-400">{user.email}</p>
                <button className="mt-2 text-sm text-indigo-600 dark:text-indigo-400 hover:text-indigo-500">
                  Modifier la photo
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Nom complet
                </label>
                <input
                  type="text"
                  defaultValue={user.name}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-white"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Email
                </label>
                <input
                  type="email"
                  defaultValue={user.email}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-white"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Téléphone
                </label>
                <input
                  type="tel"
                  placeholder="+33 6 12 34 56 78"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-white"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Date de naissance
                </label>
                <input
                  type="date"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-white"
                />
              </div>
            </div>

            <div className="flex justify-end space-x-4">
              <button className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700">
                Annuler
              </button>
              <button className="px-4 py-2 bg-indigo-600 dark:bg-indigo-500 text-white rounded-md hover:bg-indigo-700 dark:hover:bg-indigo-600">
                Sauvegarder
              </button>
            </div>
          </div>
        );

      case 'security':
        return (
          <div className="space-y-6">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
                Changer le mot de passe
              </h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Mot de passe actuel
                  </label>
                  <input
                    type="password"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-white"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Nouveau mot de passe
                  </label>
                  <input
                    type="password"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-white"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Confirmer le nouveau mot de passe
                  </label>
                  <input
                    type="password"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-white"
                  />
                </div>
                <div className="flex justify-end">
                  <button className="px-4 py-2 bg-indigo-600 dark:bg-indigo-500 text-white rounded-md hover:bg-indigo-700 dark:hover:bg-indigo-600">
                    Mettre à jour le mot de passe
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
                Authentification à deux facteurs
              </h3>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-500 dark:text-gray-400">
                    Ajoutez une couche de sécurité supplémentaire à votre compte
                  </p>
                </div>
                <button className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700">
                  Configurer
                </button>
              </div>
            </div>
          </div>
        );

      // ... Ajoutez d'autres cas pour les autres onglets

      default:
        return (
          <div className="text-center text-gray-500 dark:text-gray-400">
            Contenu en cours de développement
          </div>
        );
    }
  };

  return (
    <PageTransition>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="lg:grid lg:grid-cols-12 lg:gap-x-5">
          {/* Sidebar */}
          <aside className="py-6 px-2 sm:px-6 lg:py-0 lg:px-0 lg:col-span-3">
            <nav className="space-y-1">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`${
                    activeTab === tab.id
                      ? 'bg-indigo-50 dark:bg-indigo-900/50 border-indigo-500 dark:border-indigo-400 text-indigo-700 dark:text-indigo-300'
                      : 'border-transparent text-gray-900 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800'
                  } group w-full flex items-center px-3 py-2 text-sm font-medium border-l-4`}
                >
                  <tab.icon
                    className={`${
                      activeTab === tab.id
                        ? 'text-indigo-500 dark:text-indigo-400'
                        : 'text-gray-400 dark:text-gray-500 group-hover:text-gray-500 dark:group-hover:text-gray-400'
                    } flex-shrink-0 -ml-1 mr-3 h-6 w-6`}
                  />
                  <span className="truncate">{tab.name}</span>
                </button>
              ))}
              <button
                onClick={handleLogout}
                className="border-transparent text-gray-900 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 group w-full flex items-center px-3 py-2 text-sm font-medium border-l-4"
              >
                <ArrowRightOnRectangleIcon className="text-gray-400 dark:text-gray-500 group-hover:text-gray-500 dark:group-hover:text-gray-400 flex-shrink-0 -ml-1 mr-3 h-6 w-6" />
                <span className="truncate">Déconnexion</span>
              </button>
            </nav>
          </aside>

          {/* Main content */}
          <div className="space-y-6 sm:px-6 lg:px-0 lg:col-span-9">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
              className="bg-white dark:bg-gray-800 shadow rounded-lg p-6"
            >
              {renderTabContent()}
            </motion.div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Account; 