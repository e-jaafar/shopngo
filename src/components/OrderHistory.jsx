import React from 'react';
import PageTransition from './PageTransition';

const OrderHistory = () => {
  // Simulation de données d'historique
  const orders = [
    {
      id: 1,
      date: '2024-03-20',
      status: 'Livré',
      total: 199.99,
      items: [
        { id: 1, title: 'Product 1', price: 99.99, quantity: 1 },
        { id: 2, title: 'Product 2', price: 100.00, quantity: 1 }
      ]
    },
    {
      id: 2,
      date: '2024-03-15',
      status: 'En cours',
      total: 299.99,
      items: [
        { id: 3, title: 'Product 3', price: 149.99, quantity: 2 }
      ]
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'Livré':
        return 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200';
      case 'En cours':
        return 'bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200';
      default:
        return 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200';
    }
  };

  return (
    <PageTransition>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-2xl font-extrabold text-gray-900 dark:text-white mb-8">
          Historique des commandes
        </h2>
        
        <div className="space-y-8">
          {orders.map((order) => (
            <div key={order.id} className="bg-white dark:bg-gray-800 shadow overflow-hidden sm:rounded-lg">
              {/* En-tête de la commande */}
              <div className="px-4 py-5 sm:px-6 flex justify-between items-center border-b border-gray-200 dark:border-gray-700">
                <div>
                  <h3 className="text-lg leading-6 font-medium text-gray-900 dark:text-white">
                    Commande #{order.id}
                  </h3>
                  <p className="mt-1 max-w-2xl text-sm text-gray-500 dark:text-gray-400">
                    Passée le {new Date(order.date).toLocaleDateString()}
                  </p>
                </div>
                <span className={`inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium ${getStatusColor(order.status)}`}>
                  {order.status}
                </span>
              </div>

              {/* Détails de la commande */}
              <div className="border-t border-gray-200 dark:border-gray-700">
                <dl>
                  {order.items.map((item) => (
                    <div key={item.id} className="bg-white dark:bg-gray-800 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                      <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">
                        {item.title}
                      </dt>
                      <dd className="mt-1 text-sm text-gray-900 dark:text-gray-300 sm:mt-0 sm:col-span-2">
                        {item.quantity} x {item.price.toFixed(2)} €
                      </dd>
                    </div>
                  ))}
                  
                  {/* Total */}
                  <div className="bg-gray-50 dark:bg-gray-900 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-bold text-gray-900 dark:text-white">
                      Total
                    </dt>
                    <dd className="mt-1 text-sm font-bold text-gray-900 dark:text-white sm:mt-0 sm:col-span-2">
                      {order.total.toFixed(2)} €
                    </dd>
                  </div>

                  {/* Actions */}
                  <div className="bg-white dark:bg-gray-800 px-4 py-5 sm:px-6 flex justify-end space-x-4">
                    <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 dark:bg-indigo-500 hover:bg-indigo-700 dark:hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                      Voir les détails
                    </button>
                    <button className="inline-flex items-center px-4 py-2 border border-gray-300 dark:border-gray-600 text-sm font-medium rounded-md text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                      Télécharger la facture
                    </button>
                  </div>
                </dl>
              </div>
            </div>
          ))}
        </div>
      </div>
    </PageTransition>
  );
};

export default OrderHistory; 