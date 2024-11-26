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
    // Ajoutez d'autres commandes ici
  ];

  return (
    <PageTransition>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-2xl font-extrabold text-gray-900 mb-8">Historique des commandes</h2>
        
        <div className="space-y-8">
          {orders.map((order) => (
            <div key={order.id} className="bg-white shadow overflow-hidden sm:rounded-lg">
              <div className="px-4 py-5 sm:px-6 flex justify-between items-center">
                <div>
                  <h3 className="text-lg leading-6 font-medium text-gray-900">
                    Commande #{order.id}
                  </h3>
                  <p className="mt-1 max-w-2xl text-sm text-gray-500">
                    Passée le {new Date(order.date).toLocaleDateString()}
                  </p>
                </div>
                <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-green-100 text-green-800">
                  {order.status}
                </span>
              </div>
              <div className="border-t border-gray-200">
                <dl>
                  {order.items.map((item) => (
                    <div key={item.id} className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                      <dt className="text-sm font-medium text-gray-500">{item.title}</dt>
                      <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                        {item.quantity} x {item.price.toFixed(2)} €
                      </dd>
                    </div>
                  ))}
                  <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-medium text-gray-500">Total</dt>
                    <dd className="mt-1 text-sm font-bold text-gray-900 sm:mt-0 sm:col-span-2">
                      {order.total.toFixed(2)} €
                    </dd>
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