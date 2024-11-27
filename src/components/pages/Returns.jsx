import React from 'react';
import PageTransition from '../PageTransition';
import { motion } from 'framer-motion';
import { 
  ArrowPathIcon, 
  ClockIcon, 
  CurrencyEuroIcon,
  QuestionMarkCircleIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline';

const Returns = () => {
  const returnSteps = [
    {
      icon: ArrowPathIcon,
      title: "Demande de retour",
      description: "Connectez-vous à votre compte et sélectionnez les articles à retourner dans votre historique de commandes."
    },
    {
      icon: ClockIcon,
      title: "Délai de retour",
      description: "Vous disposez de 30 jours à compter de la réception de votre commande pour effectuer un retour."
    },
    {
      icon: CurrencyEuroIcon,
      title: "Remboursement",
      description: "Le remboursement est effectué sous 14 jours via le même moyen de paiement que l'achat."
    }
  ];

  const returnConditions = [
    "Article non utilisé et dans son emballage d'origine",
    "Étiquettes et protections intactes",
    "Accessoires et notices inclus",
    "Produit non personnalisé",
    "Produit non périssable"
  ];

  const faqs = [
    {
      question: "Comment retourner un article ?",
      answer: "Connectez-vous à votre compte, allez dans vos commandes et sélectionnez les articles à retourner. Imprimez l'étiquette de retour et déposez votre colis dans un point relais."
    },
    {
      question: "Quand serai-je remboursé ?",
      answer: "Le remboursement est effectué dans un délai maximum de 14 jours après réception de votre retour dans nos entrepôts. Vous serez notifié par email."
    },
    {
      question: "Les frais de retour sont-ils gratuits ?",
      answer: "Les frais de retour sont gratuits pour tout article défectueux ou non conforme. Pour les autres motifs de retour, les frais sont à votre charge."
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
            Politique de Retour
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Nous voulons que vous soyez entièrement satisfait de votre achat. 
            Si ce n'est pas le cas, nous facilitons vos retours.
          </p>
        </motion.div>

        {/* Étapes de retour */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {returnSteps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg text-center"
            >
              <step.icon className="h-12 w-12 text-indigo-600 dark:text-indigo-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                {step.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Conditions de retour */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg mb-16"
        >
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Conditions de retour
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {returnConditions.map((condition, index) => (
              <div key={index} className="flex items-center space-x-3">
                <CheckCircleIcon className="h-6 w-6 text-green-500" />
                <span className="text-gray-700 dark:text-gray-300">{condition}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* FAQ */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="space-y-6"
        >
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
            Questions fréquentes
          </h2>
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg"
            >
              <div className="flex items-start space-x-4">
                <QuestionMarkCircleIcon className="h-6 w-6 text-indigo-600 dark:text-indigo-400 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    {faq.question}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Contact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-16 bg-indigo-600 dark:bg-indigo-900 rounded-lg p-8 text-center"
        >
          <h2 className="text-2xl font-bold text-white mb-4">
            Besoin d'aide pour votre retour ?
          </h2>
          <p className="text-indigo-100 mb-6">
            Notre service client est disponible pour vous accompagner dans votre démarche
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
            <a
              href="mailto:returns@shopngo.com"
              className="px-6 py-3 bg-white text-indigo-600 rounded-md font-medium hover:bg-indigo-50 transition-colors"
            >
              returns@shopngo.com
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

export default Returns; 