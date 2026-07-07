import React, { useState, useRef, useEffect } from 'react';
import { Bot, X, Send } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { allSettings, settingsCategories } from '../data/settingsData';

const NavAI = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: 'ai', text: "Hi! I'm NavAI. Ask me about any setting, and I'll take you right to it! Try asking 'how to delete account' or 'change to dark mode'." }
  ]);
  const [input, setInput] = useState('');
  const navigate = useNavigate();
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = input.trim();
    setMessages(prev => [...prev, { sender: 'user', text: userMessage }]);
    setInput('');

    // Stop words to ignore during search
    const stopWords = ['i', 'want', 'to', 'how', 'do', 'my', 'the', 'a', 'an', 'is', 'can', 'you', 'setting', 'change', 'where'];
    const queryWords = userMessage.toLowerCase().split(/\s+/).filter(w => !stopWords.includes(w) && w.length > 2);

    let bestMatch = null;
    let highestScore = 0;

    if (queryWords.length > 0) {
      Object.entries(allSettings).forEach(([categoryId, settings]) => {
        settings.forEach(setting => {
          let score = 0;
          queryWords.forEach(word => {
            if (setting.title.toLowerCase().includes(word)) score += 3;
            if (setting.description.toLowerCase().includes(word)) score += 1;
          });

          if (score > highestScore) {
            highestScore = score;
            bestMatch = { categoryId, setting };
          }
        });
      });
    }

    setTimeout(() => {
      if (bestMatch && highestScore > 0) {
        const categoryName = settingsCategories.find(c => c.id === bestMatch.categoryId)?.label;
        setMessages(prev => [...prev, { 
          sender: 'ai', 
          text: `Found it! Taking you to "${bestMatch.setting.title}" in the ${categoryName} section.` 
        }]);
        
        setTimeout(() => {
          navigate(`/settings?tab=${bestMatch.categoryId}&highlight=${encodeURIComponent(bestMatch.setting.title)}`);
        }, 1500);
      } else {
        setMessages(prev => [...prev, { 
          sender: 'ai', 
          text: "I couldn't find a setting matching that. Could you try rephrasing?" 
        }]);
      }
    }, 800);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100] flex flex-col items-end">
      {isOpen && (
        <div className="bg-[#1d2226] border border-linkedin-border rounded-xl shadow-2xl w-[320px] h-[450px] mb-4 flex flex-col overflow-hidden animate-fade-in">
          {/* Header */}
          <div className="bg-linkedin-primary p-3 flex justify-between items-center text-white">
            <div className="flex items-center gap-2 font-semibold">
              <Bot size={20} /> NavAI Assistant
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:bg-white/20 p-1 rounded-full transition-colors">
              <X size={18} />
            </button>
          </div>
          
          {/* Chat Area */}
          <div className="flex-1 p-4 overflow-y-auto custom-scrollbar flex flex-col gap-3">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-3 rounded-xl text-sm ${msg.sender === 'user' ? 'bg-linkedin-primary text-white rounded-br-sm' : 'bg-[#38434f] text-[#e9eaec] rounded-bl-sm'}`}>
                  {msg.text}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <form onSubmit={handleSend} className="p-3 border-t border-linkedin-border bg-[#2b3036] flex gap-2">
            <input 
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask for a setting..."
              className="flex-1 bg-[#1d2226] text-white text-sm rounded-full px-4 py-2 outline-none border border-transparent focus:border-linkedin-primary transition-colors"
            />
            <button 
              type="submit" 
              disabled={!input.trim()}
              className="bg-linkedin-primary hover:bg-blue-700 disabled:bg-linkedin-primary/50 text-white p-2 rounded-full transition-colors shrink-0 flex items-center justify-center"
            >
              <Send size={16} className="-ml-0.5" />
            </button>
          </form>
        </div>
      )}

      {/* Floating Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="bg-linkedin-primary hover:bg-blue-700 text-white p-4 rounded-full shadow-xl transition-transform hover:scale-105 active:scale-95 flex items-center justify-center relative"
      >
        {isOpen ? <X size={24} /> : <Bot size={24} />}
        {!isOpen && <span className="absolute -top-1 -right-1 bg-red-600 w-3 h-3 rounded-full border-2 border-linkedin-bg"></span>}
      </button>
    </div>
  );
};

export default NavAI;
