import React from 'react';
import PageTransition from '../PageTransition';
import { motion } from 'framer-motion';
import { 
  TruckIcon, 
  ClockIcon, 
  GlobeEuropeAfricaIcon,
  ShieldCheckIcon 
} from '@heroicons/react/24/outline';

const Shipping = () => {
  const shippingMethods = [
    {
      icon: TruckIcon,
      title: "Livraison Standard",
      delay: "2-4 jours ouvrés",
      price: "3.99€",
      freeFrom: "Gratuite dès 50€"
    },
    {
      icon: ClockIcon,
      title: "Livraison Express",
      delay: "24h",
      price: "9.99€",
      freeFrom: "Gratuite dès 100€"
    },
    {
      icon: GlobeEuropeAfricaIcon,
      title: "International",
      delay: "5-7 jours ouvrés",
      price: "12.99€",
      freeFrom: "Gratuite dès 150€"
    }
  ];

  const features = [
    {
      icon: ShieldCheckIcon,
      title: "Suivi en temps réel",
      description: "Suivez votre colis à chaque étape de la livraison"
    },
    {
      icon: TruckIcon,
      title: "Points relais",
      description: "Plus de 10 000 points relais en France"
    },
    {
      icon: ClockIcon,
      title: "Créneaux horaires",
      description: "Choisissez votre créneau de livraison"
    }
  ];

  const faqs = [
    {
      question: "Quels sont les délais de livraison ?",
      answer: "Les délais varient selon le mode de livraison choisi. La livraison standard prend 2-4 jours ouvrés, la livraison express est effectuée sous 24h, et la livraison internationale prend 5-7 jours ouvrés."
    },
    {
      question: "Comment suivre ma commande ?",
      answer: "Un email de confirmation avec un numéro de suivi vous sera envoyé dès l'expédition de votre commande. Vous pourrez suivre votre colis en temps réel via notre interface de suivi."
    },
    {
      question: "Que faire en cas d'absence ?",
      answer: "En cas d'absence, le livreur laissera un avis de passage. Vous pourrez alors reprogrammer la livraison ou choisir un point relais pour récupérer votre colis."
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
            Livraison
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Nous nous engageons à vous livrer dans les meilleurs délais avec le plus grand soin.
          </p>
        </motion.div>

        {/* Méthodes de livraison */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {shippingMethods.map((method, index) => (
            <motion.div
              key={method.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg text-center"
            >
              <method.icon className="h-12 w-12 text-indigo-600 dark:text-indigo-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {method.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-2">
                Délai : {method.delay}
              </p>
              <p className="text-2xl font-bold text-indigo-600 dark:text-indigo-400 mb-2">
                {method.price}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {method.freeFrom}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Fonctionnalités */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-16"
        >
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Nos services de livraison
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg"
              >
                <feature.icon className="h-8 w-8 text-indigo-600 dark:text-indigo-400 mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* FAQ */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-16"
        >
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
            Questions fréquentes
          </h2>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg"
              >
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {faq.question}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {faq.answer}
                </p>
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
            Besoin d'aide ?
          </h2>
          <p className="text-indigo-100 mb-6">
            Notre service client est disponible pour répondre à toutes vos questions
          </p>
          <a
            href="mailto:support@shopngo.com"
            className="inline-block px-6 py-3 bg-white text-indigo-600 rounded-md font-medium hover:bg-indigo-50 transition-colors"
          >
            Contactez-nous
          </a>
        </motion.div>
      </div>
    </PageTransition>
  );
};

export default Shipping; 