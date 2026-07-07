import React from 'react';

const SignOut = () => {
  return (
    <div className="min-h-screen bg-linkedin-bg flex items-center justify-center -mt-[82px] pb-[82px]">
      <div className="bg-linkedin-card rounded-lg border border-linkedin-border p-8 text-center text-white max-w-sm w-full">
        <h1 className="text-2xl font-bold mb-4">Signed Out</h1>
        <p className="text-linkedin-text-secondary mb-6">You have been successfully signed out of your account.</p>
        <button 
          onClick={() => window.location.href = '/'} 
          className="w-full bg-linkedin-primary hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-full transition-colors"
        >
          Sign in again
        </button>
      </div>
    </div>
  );
};

export default SignOut;
