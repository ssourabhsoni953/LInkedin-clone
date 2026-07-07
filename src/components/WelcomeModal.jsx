import React, { useState, useEffect } from 'react';
import { X, Sparkles, Bot, Rocket, CheckCircle2 } from 'lucide-react';

const WelcomeModal = () => {
  const [isOpen, setIsOpen] = useState(true);

  const handleClose = () => {
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/80 z-[200] flex items-center justify-center p-4 backdrop-blur-sm animate-fade-in">
      <div className="bg-linkedin-card border border-linkedin-border rounded-2xl shadow-2xl max-w-2xl w-full overflow-hidden flex flex-col md:flex-row relative">
        
        {/* Close Button */}
        <button 
          onClick={handleClose}
          className="absolute top-4 right-4 text-linkedin-text-secondary hover:text-white bg-black/20 hover:bg-white/10 rounded-full p-1.5 transition-colors z-10"
        >
          <X size={20} />
        </button>

        {/* Left Side - Visual/Branding */}
        <div className="w-full md:w-2/5 bg-gradient-to-br from-[#0a66c2] to-[#004182] p-8 flex flex-col justify-center items-center text-center">
          <div className="bg-white p-3 rounded-xl mb-6 shadow-lg shadow-black/20 inline-flex">
            <Rocket size={40} className="text-[#0a66c2]" />
          </div>
          <h2 className="text-2xl font-bold text-white mb-3">Welcome to our LinkedIn Clone!</h2>
          <p className="text-blue-100 text-sm leading-relaxed">
            We've built a fully functional professional network interface, complete with a feed, profile, networking pages, and over 100 settings.
          </p>
        </div>

        {/* Right Side - Features */}
        <div className="w-full md:w-3/5 p-8 bg-[#1d2226]">
          <h3 className="text-lg font-semibold text-white mb-6 uppercase tracking-wider text-sm border-b border-linkedin-border pb-2">
            ✨ What's New?
          </h3>
          
          <div className="space-y-6">
            <div className="flex gap-4 items-start group">
              <div className="bg-[#c8b154]/20 p-2.5 rounded-lg text-[#c8b154] shrink-0 group-hover:scale-110 transition-transform">
                <Sparkles size={24} />
              </div>
              <div>
                <h4 className="text-white font-semibold mb-1 text-[15px]">AI Post Summarizer</h4>
                <p className="text-linkedin-text-secondary text-sm leading-relaxed">
                  Too long to read? We added a premium AI Summarizer directly into the feed. Click the ✨ button on long posts to instantly generate a concise summary of the content!
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start group">
              <div className="bg-blue-600/20 p-2.5 rounded-lg text-blue-400 shrink-0 group-hover:scale-110 transition-transform">
                <Bot size={24} />
              </div>
              <div>
                <h4 className="text-white font-semibold mb-1 text-[15px]">NavAI Chatbot</h4>
                <p className="text-linkedin-text-secondary text-sm leading-relaxed">
                  Navigating 100+ settings is hard. Meet NavAI, your global assistant. Just open the chat in the bottom right, ask for a setting, and it will instantly scroll you right to it!
                </p>
              </div>
            </div>
          </div>

          <button 
            onClick={handleClose}
            className="w-full mt-8 bg-linkedin-primary hover:bg-blue-700 text-white font-semibold py-3 rounded-full transition-colors flex items-center justify-center gap-2"
          >
            <CheckCircle2 size={18} />
            Explore the Project
          </button>
        </div>
      </div>
    </div>
  );
};

export default WelcomeModal;
