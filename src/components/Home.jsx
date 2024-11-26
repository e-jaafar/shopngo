import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRightIcon, ShieldCheckIcon, TruckIcon, CreditCardIcon, UserGroupIcon } from '@heroicons/react/24/outline';

function Home() {
  const categories = [
    {
      name: "electronics",
      displayName: "Électronique",
      image: "https://images.unsplash.com/photo-1498049794561-7780e7231661?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    },
    {
      name: "jewelery",
      displayName: "Bijoux",
      image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    },
    {
      name: "men's clothing",
      displayName: "Mode Homme",
      image: "https://images.unsplash.com/photo-1490114538077-0a7f8cb49891?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    },
    {
      name: "women's clothing",
      displayName: "Mode Femme",
      image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    }
  ];

  const testimonials = [
    {
      id: 1,
      content: "Une expérience d'achat exceptionnelle. La qualité des produits est remarquable.",
      author: "Marie L.",
      role: "Cliente fidèle",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330"
    },
    {
      id: 2,
      content: "Le service client est irréprochable. Je recommande vivement.",
      author: "Thomas M.",
      role: "Client VIP",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e"
    },
    {
      id: 3,
      content: "Des produits de qualité et une livraison ultra rapide.",
      author: "Sophie D.",
      role: "Influenceuse",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80"
    }
  ];

  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center bg-gradient-to-r from-gray-900 to-gray-800 dark:from-black dark:to-gray-900 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <img
            src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04"
            alt="Background"
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white dark:text-gray-100 mb-6">
              Découvrez l'Excellence
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 dark:text-gray-300 mb-12 max-w-3xl mx-auto">
              Une sélection unique de produits premium pour des clients exigeants.
              Qualité exceptionnelle, design élégant, service irréprochable.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                to="/products"
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white dark:border-gray-300 dark:text-gray-300 text-lg font-medium rounded-full hover:bg-white hover:text-gray-900 dark:hover:bg-gray-300 dark:hover:text-gray-900 transition-all duration-300"
              >
                Explorer la Collection
                <ArrowRightIcon className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section Catégories */}
      <section className="py-24 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Collections Exclusives
            </h2>
            <div className="w-24 h-1 bg-indigo-600 dark:bg-indigo-500 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {categories.map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="group relative h-96 overflow-hidden rounded-lg cursor-pointer"
              >
                <Link to={`/products?category=${category.name}`}>
                  <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-30 transition-all duration-300 z-10"></div>
                  <img
                    src={category.image}
                    alt={category.displayName}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 flex items-center justify-center z-20">
                    <h3 className="text-2xl font-bold text-white dark:text-gray-100">{category.displayName}</h3>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Avantages */}
      <section className="py-24 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {[
              { icon: TruckIcon, title: "Livraison Express", desc: "Gratuite dès 100€" },
              { icon: ShieldCheckIcon, title: "Garantie Premium", desc: "2 ans minimum" },
              { icon: CreditCardIcon, title: "Paiement Sécurisé", desc: "Cryptage SSL" },
              { icon: UserGroupIcon, title: "Service VIP", desc: "Support 24/7" }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="text-center"
              >
                <feature.icon className="h-12 w-12 text-indigo-600 dark:text-indigo-400 mx-auto mb-6" />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Témoignages */}
      <section className="py-24 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Ce que nos clients disent
            </h2>
            <div className="w-24 h-1 bg-indigo-600 dark:bg-indigo-500 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-gray-50 dark:bg-gray-800 p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="flex items-center mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.author}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{testimonial.author}</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-300 italic">"{testimonial.content}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Newsletter */}
      <section className="py-20 bg-indigo-700 dark:bg-indigo-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Restez Informé
            </h2>
            <p className="text-xl text-indigo-100 mb-8">
              Inscrivez-vous pour recevoir nos offres exclusives et nos dernières nouveautés
            </p>
            <form className="flex flex-col sm:flex-row gap-4 justify-center">
              <input
                type="email"
                placeholder="Votre adresse email"
                className="px-6 py-4 rounded-full text-gray-900 dark:text-white w-full sm:w-96 focus:outline-none focus:ring-2 focus:ring-white dark:bg-gray-800 dark:border-gray-700"
              />
              <button className="px-8 py-4 bg-white dark:bg-gray-200 text-indigo-600 rounded-full font-medium hover:bg-gray-100 dark:hover:bg-gray-300 transition-colors duration-300">
                S'inscrire
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
