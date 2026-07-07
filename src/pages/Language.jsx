import React, { useState } from 'react';
import MainLayout from '../components/layout/MainLayout';

const languages = [
  { code: 'en', name: 'English' },
  { code: 'es', name: 'Español (Spanish)' },
  { code: 'fr', name: 'Français (French)' },
  { code: 'de', name: 'Deutsch (German)' },
  { code: 'zh', name: '中文 (Chinese)' },
  { code: 'hi', name: 'हिन्दी (Hindi)' },
];

const Language = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('en');

  return (
    <MainLayout>
      <div className="bg-linkedin-card rounded-lg border border-linkedin-border p-6 text-white min-h-[400px]">
        <h1 className="text-2xl font-bold mb-6">Language Settings</h1>
        
        <div className="max-w-md bg-[#2b3036] rounded-lg border border-linkedin-border p-4">
          <p className="text-sm text-linkedin-text-secondary mb-4">Select the language you want to use for the LinkedIn interface.</p>
          
          <div className="flex flex-col gap-3 mb-6">
            {languages.map((lang) => (
              <label key={lang.code} className="flex items-center gap-3 cursor-pointer p-2 hover:bg-white/5 rounded-md transition-colors">
                <input 
                  type="radio" 
                  name="language" 
                  value={lang.code}
                  checked={selectedLanguage === lang.code}
                  onChange={(e) => setSelectedLanguage(e.target.value)}
                  className="w-4 h-4 text-linkedin-primary bg-gray-700 border-gray-600 focus:ring-linkedin-primary focus:ring-2"
                />
                <span className="font-medium">{lang.name}</span>
              </label>
            ))}
          </div>

          <div className="flex justify-end">
            <button className="bg-linkedin-primary hover:bg-blue-700 text-white font-semibold py-1.5 px-4 rounded-full transition-colors text-sm">
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Language;
