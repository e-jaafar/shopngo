import React, { useState } from 'react';
import PageTransition from '../PageTransition';
import { motion } from 'framer-motion';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

const FAQ = () => {
  const [openQuestion, setOpenQuestion] = useState(null);

  const faqs = [
    {
      category: "Commandes",
      questions: [
        {
          q: "Comment suivre ma commande ?",
          a: "Vous pouvez suivre votre commande dans la section 'Mes Commandes' de votre compte. Un email de suivi vous est également envoyé à chaque étape."
        },
        {
          q: "Quels sont les délais de livraison ?",
          a: "Les délais varient selon le mode de livraison choisi : Standard (2-4 jours), Express (24h), International (5-7 jours)."
        }
      ]
    },
    {
      category: "Retours & Remboursements",
      questions: [
        {
          q: "Comment retourner un article ?",
          a: "Vous disposez de 30 jours pour retourner un article. Rendez-vous dans 'Mes Commandes', sélectionnez la commande concernée et suivez les instructions."
        },
        {
          q: "Quand serai-je remboursé ?",
          a: "Le remboursement est effectué sous 14 jours maximum après réception de votre retour dans nos entrepôts."
        }
      ]
    },
    {
      category: "Compte & Sécurité",
      questions: [
        {
          q: "Comment modifier mes informations personnelles ?",
          a: "Connectez-vous à votre compte et accédez à la section 'Mon Profil' pour modifier vos informations."
        },
        {
          q: "Comment réinitialiser mon mot de passe ?",
          a: "Cliquez sur 'Mot de passe oublié' sur la page de connexion et suivez les instructions envoyées par email."
        }
      ]
    }
  ];

  return (
    <PageTransition>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Questions Fréquentes
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Trouvez rapidement des réponses à vos questions.
          </p>
        </motion.div>

        <div className="space-y-8">
          {faqs.map((category, categoryIndex) => (
            <div key={category.category}>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                {category.category}
              </h2>
              <div className="space-y-4">
                {category.questions.map((faq, faqIndex) => {
                  const isOpen = openQuestion === `${categoryIndex}-${faqIndex}`;
                  return (
                    <motion.div
                      key={faqIndex}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: (categoryIndex * 0.1) + (faqIndex * 0.05) }}
                      className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"
                    >
                      <button
                        onClick={() => setOpenQuestion(isOpen ? null : `${categoryIndex}-${faqIndex}`)}
                        className="w-full px-6 py-4 flex justify-between items-center hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                      >
                        <span className="text-left font-medium text-gray-900 dark:text-white">
                          {faq.q}
                        </span>
                        <ChevronDownIcon
                          className={`h-5 w-5 text-gray-500 transition-transform duration-200 ${
                            isOpen ? 'transform rotate-180' : ''
                          }`}
                        />
                      </button>
                      <motion.div
                        initial={false}
                        animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 py-4 bg-gray-50 dark:bg-gray-700">
                          <p className="text-gray-600 dark:text-gray-300">
                            {faq.a}
                          </p>
                        </div>
                      </motion.div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Contact Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-16 bg-indigo-600 dark:bg-indigo-900 rounded-lg p-8 text-center"
        >
          <h2 className="text-2xl font-bold text-white mb-4">
            Vous n'avez pas trouvé votre réponse ?
          </h2>
          <p className="text-indigo-100 mb-6">
            Notre équipe de support est là pour vous aider
          </p>
          <a
            href="/contact"
            className="inline-flex items-center px-6 py-3 bg-white text-indigo-600 rounded-md font-medium hover:bg-indigo-50 transition-colors"
          >
            Contactez-nous
          </a>
        </motion.div>
      </div>
    </PageTransition>
  );
};

export default FAQ; 