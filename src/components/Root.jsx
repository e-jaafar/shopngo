import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';

function Root() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="pt-16">
        <Outlet />
      </main>
    </div>
  );
}

export default Root;

