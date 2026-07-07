import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import MainLayout from '../components/layout/MainLayout';
import { ChevronRight } from 'lucide-react';
import { settingsCategories, allSettings } from '../data/settingsData';

const SettingItem = ({ title, description, actionText = 'Change', isHighlighted }) => (
  <div id={title.replace(/\s+/g, '-')} className={`flex items-start justify-between py-4 border-b border-linkedin-border/50 px-2 rounded-md transition-all duration-500 cursor-pointer group ${isHighlighted ? 'bg-linkedin-primary/20 border-linkedin-primary shadow-[0_0_15px_rgba(10,102,194,0.3)]' : 'hover:bg-white/[0.02]'}`}>
    <div className="flex gap-4">
      <div>
        <h4 className="text-[15px] font-semibold text-white group-hover:text-linkedin-primary transition-colors">{title}</h4>
        {description && <p className="text-xs text-linkedin-text-secondary mt-1 leading-relaxed max-w-md">{description}</p>}
      </div>
    </div>
    <div className="flex items-center gap-1 text-linkedin-text-secondary">
      <span className="text-[13px] font-medium hidden sm:block">{actionText}</span>
      <ChevronRight size={18} />
    </div>
  </div>
);

const Settings = () => {
  const [searchParams] = useSearchParams();
  const tabParam = searchParams.get('tab');
  const highlightParam = searchParams.get('highlight');
  
  const [activeTab, setActiveTab] = useState(tabParam || 'account');

  useEffect(() => {
    if (tabParam && settingsCategories.find(c => c.id === tabParam)) {
      setActiveTab(tabParam);
    }
  }, [tabParam]);

  useEffect(() => {
    if (highlightParam) {
      const timeoutId = setTimeout(() => {
        const element = document.getElementById(highlightParam.replace(/\s+/g, '-'));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }, 150);
      return () => clearTimeout(timeoutId);
    }
  }, [activeTab, highlightParam]);

  return (
    <MainLayout>
      <div className="bg-linkedin-card rounded-lg border border-linkedin-border min-h-[600px] flex flex-col md:flex-row overflow-hidden">
        
        {/* Sidebar */}
        <div className="w-full md:w-[280px] border-b md:border-b-0 md:border-r border-linkedin-border bg-[#1d2226] flex-shrink-0">
          <div className="p-4 border-b border-linkedin-border sticky top-0 bg-[#1d2226] z-10">
            <h1 className="text-xl font-bold text-white">Settings</h1>
            <p className="text-xs text-linkedin-text-secondary mt-1">100+ Advanced Options</p>
          </div>
          <div className="flex flex-row md:flex-col overflow-x-auto md:overflow-x-visible h-[60px] md:h-[calc(100%-70px)] md:overflow-y-auto custom-scrollbar">
            {settingsCategories.map(category => {
              const Icon = category.icon;
              return (
                <button
                  key={category.id}
                  onClick={() => setActiveTab(category.id)}
                  className={`flex items-center gap-3 w-full p-4 text-left font-semibold text-sm transition-colors border-l-4 whitespace-nowrap md:whitespace-normal
                    ${activeTab === category.id 
                      ? 'border-linkedin-primary bg-white/5 text-linkedin-primary' 
                      : 'border-transparent text-linkedin-text-secondary hover:bg-white/[0.02] hover:text-white'
                    }`}
                >
                  <Icon size={18} className={activeTab === category.id ? 'text-linkedin-primary' : 'text-linkedin-text-secondary'} />
                  {category.label}
                </button>
              )
            })}
          </div>
        </div>

        {/* Content Area */}
        <div className="flex-1 p-6 h-[600px] overflow-y-auto custom-scrollbar relative">
          <div className="animate-fade-in max-w-2xl">
            <h2 className="text-2xl font-bold text-white mb-6">
              {settingsCategories.find(c => c.id === activeTab)?.label}
            </h2>
            
            <div className="mb-8">
              <h3 className="text-[15px] font-semibold text-linkedin-text-secondary mb-4 pb-2 border-b border-linkedin-border uppercase tracking-wider">
                Configuration Options ({allSettings[activeTab].length})
              </h3>
              
              <div className="flex flex-col">
                {allSettings[activeTab].map((setting, index) => (
                  <SettingItem 
                    key={index}
                    title={setting.title}
                    description={setting.description}
                    actionText={setting.actionText}
                    isHighlighted={highlightParam === setting.title}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Settings;
