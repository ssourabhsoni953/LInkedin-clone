import React from 'react';
import MainLayout from '../components/layout/MainLayout';

const Messaging = () => {
  return (
    <MainLayout>
      <div className="bg-linkedin-card rounded-lg border border-linkedin-border p-6 flex flex-col items-center justify-center min-h-[400px]">
        <h1 className="text-2xl font-semibold text-white mb-2">Messaging</h1>
        <p className="text-linkedin-text-secondary">Connect with your network through messages.</p>
      </div>
    </MainLayout>
  );
};

export default Messaging;
