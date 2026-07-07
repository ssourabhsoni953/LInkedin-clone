import React from 'react';
import MainLayout from '../components/layout/MainLayout';

const Network = () => {
  return (
    <MainLayout>
      <div className="bg-linkedin-card rounded-lg border border-linkedin-border p-6 flex flex-col items-center justify-center min-h-[400px]">
        <h1 className="text-2xl font-semibold text-white mb-2">My Network</h1>
        <p className="text-linkedin-text-secondary">Manage your connections, events, and pages.</p>
      </div>
    </MainLayout>
  );
};

export default Network;
