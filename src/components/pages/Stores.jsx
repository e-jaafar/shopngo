import React from 'react';
import PageTransition from '../PageTransition';
import { motion } from 'framer-motion';
import { 
  MapPinIcon, 
  PhoneIcon, 
  ClockIcon,
  ChevronDownIcon 
} from '@heroicons/react/24/outline';

const Stores = () => {

  const stores = [
    {
      id: 1,
      name: "ShopnGo Paris Centre",
      address: "123 Rue du Commerce, 75015 Paris",
      phone: "+33 1 23 45 67 89",
      email: "paris.centre@shopngo.com",
      hours: {
        weekdays: "10h00 - 20h00",
        saturday: "10h00 - 19h00",
        sunday: "Fermé"
      },
      coordinates: {
        lat: 48.8417145,
        lng: 2.2922926
      },
      services: ["Click & Collect", "Retours gratuits", "Personal Shopper", "Atelier retouches"],
      image: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04"
    },
    {
      id: 2,
      name: "ShopnGo Lyon",
      address: "45 Rue de la République, 69002 Lyon",
      phone: "+33 4 56 78 90 12",
      email: "lyon@shopngo.com",
      hours: {
        weekdays: "10h00 - 19h30",
        saturday: "10h00 - 19h00",
        sunday: "11h00 - 18h00"
      },
      coordinates: {
        lat: 45.7578137,
        lng: 4.8320114
      },
      services: ["Click & Collect", "Retours gratuits", "Personal Shopper"],
      image: "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a"
    },
    {
      id: 3,
      name: "ShopnGo Marseille",
      address: "56 Rue Paradis, 13001 Marseille",
      phone: "+33 4 91 23 45 67",
      email: "marseille@shopngo.com",
      hours: {
        weekdays: "10h00 - 19h30",
        saturday: "10h00 - 19h00",
        sunday: "Fermé"
      },
      coordinates: {
        lat: 43.2961743,
        lng: 5.3699525
      },
      services: ["Click & Collect", "Retours gratuits"],
      image: "https://images.unsplash.com/photo-1519642918688-7e43b19245d8"
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
            Nos Magasins
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Retrouvez-nous dans nos boutiques à travers la France
          </p>
        </motion.div>

        {/* Carte interactive - Version modifiée sans API key */}

        {/* Liste des magasins */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stores.map((store, index) => (
            <motion.div
              key={store.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"
            >
              {/* Image du magasin */}
              <div className="h-48 overflow-hidden">
                <img
                  src={store.image}
                  alt={store.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Informations du magasin */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  {store.name}
                </h3>

                <div className="space-y-3">
                  {/* Adresse */}
                  <div className="flex items-start space-x-3">
                    <MapPinIcon className="h-6 w-6 text-indigo-600 dark:text-indigo-400 flex-shrink-0" />
                    <span className="text-gray-600 dark:text-gray-300">{store.address}</span>
                  </div>

                  {/* Téléphone */}
                  <div className="flex items-center space-x-3">
                    <PhoneIcon className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
                    <a 
                      href={`tel:${store.phone}`}
                      className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400"
                    >
                      {store.phone}
                    </a>
                  </div>

                  {/* Horaires */}
                  <div className="flex items-start space-x-3">
                    <ClockIcon className="h-5 w-5 text-indigo-600 dark:text-indigo-400 flex-shrink-0" />
                    <div className="text-sm text-gray-600 dark:text-gray-300">
                      <p>Lun-Ven: {store.hours.weekdays}</p>
                      <p>Samedi: {store.hours.saturday}</p>
                      <p>Dimanche: {store.hours.sunday}</p>
                    </div>
                  </div>
                </div>

                {/* Services */}
                <div className="mt-4">
                  <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-2">
                    Services disponibles
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {store.services.map((service, serviceIndex) => (
                      <span
                        key={serviceIndex}
                        className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200"
                      >
                        {service}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bouton d'itinéraire */}
                <a
                  href={`https://www.google.com/maps/dir/?api=1&destination=${store.coordinates.lat},${store.coordinates.lng}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 w-full inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 dark:bg-indigo-500 hover:bg-indigo-700 dark:hover:bg-indigo-600"
                >
                  Itinéraire
                  <ChevronDownIcon className="ml-2 -mr-1 h-4 w-4 rotate-270" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="w-full h-[400px] mb-16 rounded-lg overflow-hidden shadow-lg"
        >
          <iframe 
            title="Carte des magasins ShopnGo"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10497.881783644729!2d2.298476671945068!3d48.86830764133292!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66fc518637631%3A0x7c6b92d2c2465999!2zQ2hhbXBzLcOJbHlzw6llcywgUGFyaXMsIEZyYW5jZQ!5e0!3m2!1sfr!2sbe!4v1732716605056!5m2!1sfr!2sbe" 
            width="600" 
            height="450" 
            style={{ border: 0, width: '100%', height: '100%' }}
            allowfullscreen="" 
            loading="lazy" 
            referrerpolicy="no-referrer-when-downgrade"
          />
        </motion.div>

      </div>
    </PageTransition>
  );
};

export default Stores; 