import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import PromoBar from './PromoBar';

function Root() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex flex-col">
      <div className="fixed top-0 left-0 right-0 z-50">
        <PromoBar />
        <Navbar />
      </div>
      <div className="h-[104px]" />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Root;

