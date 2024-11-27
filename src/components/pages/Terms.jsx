import React from 'react';
import PageTransition from '../PageTransition';
import { motion } from 'framer-motion';
import { 
  ScaleIcon, 
  ShieldCheckIcon, 
  TruckIcon,
  CreditCardIcon,
  DocumentTextIcon 
} from '@heroicons/react/24/outline';

const Terms = () => {
  const sections = [
    {
      title: "1. Commandes et Prix",
      content: [
        "Les prix sont indiqués en euros TTC",
        "La commande n'est définitive qu'après confirmation du paiement",
        "Nous nous réservons le droit de modifier nos prix à tout moment",
        "Les frais de livraison sont indiqués avant la validation de la commande"
      ]
    },
    {
      title: "2. Paiement",
      content: [
        "Paiement sécurisé par carte bancaire",
        "Possibilité de paiement en 3 ou 4 fois sans frais",
        "Le débit est effectué au moment de l'expédition",
        "Toutes les transactions sont sécurisées"
      ]
    },
    {
      title: "3. Livraison",
      content: [
        "Livraison en France métropolitaine et internationale",
        "Délais de livraison indicatifs non contractuels",
        "Suivi de commande disponible dans votre espace client",
        "Vérification de l'état du colis à la réception"
      ]
    },
    {
      title: "4. Retours et Remboursements",
      content: [
        "Droit de rétractation de 14 jours",
        "Retour gratuit pour les articles défectueux",
        "Remboursement sous 14 jours après réception du retour",
        "Les articles personnalisés ne sont pas retournables"
      ]
    }
  ];

  const highlights = [
    {
      icon: ScaleIcon,
      title: "Conformité",
      description: "Nos CGV sont conformes à la législation en vigueur"
    },
    {
      icon: ShieldCheckIcon,
      title: "Protection",
      description: "Vos droits sont notre priorité"
    },
    {
      icon: TruckIcon,
      title: "Livraison",
      description: "Service de livraison fiable et rapide"
    },
    {
      icon: CreditCardIcon,
      title: "Paiement",
      description: "Transactions 100% sécurisées"
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
            Conditions Générales de Vente
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Ces conditions générales de vente définissent les droits et obligations dans le cadre de la vente en ligne de nos produits.
          </p>
        </motion.div>

        {/* Points clés */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
          {highlights.map((highlight, index) => (
            <motion.div
              key={highlight.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg text-center"
            >
              <highlight.icon className="h-12 w-12 text-indigo-600 dark:text-indigo-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                {highlight.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {highlight.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Sections détaillées */}
        <div className="space-y-12">
          {sections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.1 }}
              className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg"
            >
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                {section.title}
              </h2>
              <ul className="space-y-4">
                {section.content.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start space-x-3">
                    <DocumentTextIcon className="h-6 w-6 text-indigo-600 dark:text-indigo-400 mt-0.5" />
                    <span className="text-gray-600 dark:text-gray-400">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Contact et mise à jour */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-16 bg-indigo-600 dark:bg-indigo-900 rounded-lg p-8 text-center"
        >
          <h2 className="text-2xl font-bold text-white mb-4">
            Des questions sur nos CGV ?
          </h2>
          <p className="text-indigo-100 mb-6">
            Notre service juridique est à votre disposition pour toute question
          </p>
          <a
            href="mailto:legal@shopngo.com"
            className="inline-flex items-center px-6 py-3 bg-white text-indigo-600 rounded-md font-medium hover:bg-indigo-50 transition-colors"
          >
            legal@shopngo.com
          </a>
          <p className="mt-4 text-sm text-indigo-200">
            Dernière mise à jour : {new Date().toLocaleDateString()}
          </p>
        </motion.div>
      </div>
    </PageTransition>
  );
};

export default Terms; 