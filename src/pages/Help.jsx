import React, { useState } from 'react';
import MainLayout from '../components/layout/MainLayout';
import { Search, ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  { id: 1, question: 'How do I reset my password?', answer: 'To reset your password, go to the login page and click "Forgot Password". Follow the link sent to your email to create a new password.' },
  { id: 2, question: 'How do I change my email address?', answer: 'You can change your email in Settings & Privacy > Sign in & security > Email addresses. Add a new email and verify it before making it your primary address.' },
  { id: 3, question: 'How can I make my profile private?', answer: 'Go to Settings & Privacy > Visibility. From there, you can adjust who can see your profile, connections, and activity.' },
  { id: 4, question: 'Why was my account restricted?', answer: 'Accounts may be restricted due to violations of our Professional Community Policies, such as sending too many connection requests or inappropriate behavior.' }
];

const Help = () => {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <MainLayout>
      <div className="bg-linkedin-card rounded-lg border border-linkedin-border p-6 text-white min-h-[500px]">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold mb-2">How can we help?</h1>
          <div className="relative max-w-lg mx-auto mt-4">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-linkedin-text-secondary" size={20} />
            <input 
              type="text" 
              placeholder="Search for answers..." 
              className="w-full bg-[#38434f] text-white rounded-full py-3 pl-10 pr-4 outline-none border border-transparent focus:border-white transition-colors"
            />
          </div>
        </div>

        <div className="max-w-2xl mx-auto">
          <h2 className="text-lg font-semibold mb-4 border-b border-linkedin-border pb-2">Frequently Asked Questions</h2>
          <div className="flex flex-col gap-2">
            {faqs.map(faq => (
              <div key={faq.id} className="border border-linkedin-border rounded-lg bg-[#2b3036] overflow-hidden">
                <button 
                  onClick={() => setOpenFaq(openFaq === faq.id ? null : faq.id)}
                  className="w-full flex items-center justify-between p-4 text-left hover:bg-white/5 transition-colors font-medium text-sm"
                >
                  {faq.question}
                  {openFaq === faq.id ? <ChevronUp size={18} className="text-linkedin-text-secondary shrink-0" /> : <ChevronDown size={18} className="text-linkedin-text-secondary shrink-0" />}
                </button>
                {openFaq === faq.id && (
                  <div className="p-4 pt-0 text-sm text-linkedin-text-secondary border-t border-linkedin-border/50 mt-2">
                    <p className="mt-2">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-10 border-t border-linkedin-border pt-6">
          <p className="text-linkedin-text-secondary text-sm mb-3">Can't find what you're looking for?</p>
          <button className="text-linkedin-primary font-semibold hover:bg-linkedin-primary/10 px-4 py-2 rounded-full border border-linkedin-primary transition-colors">
            Contact Support
          </button>
        </div>
      </div>
    </MainLayout>
  );
};

export default Help;
