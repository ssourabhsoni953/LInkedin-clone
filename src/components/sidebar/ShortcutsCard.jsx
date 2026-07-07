import React from 'react';
import { Bookmark, Users, FileText, CalendarDays } from 'lucide-react';

const ShortcutItem = ({ icon: Icon, text }) => (
  <div className="flex items-center gap-3 px-3 py-2 hover:bg-[#2b3036] cursor-pointer transition-colors text-linkedin-text-secondary hover:text-white group">
    <Icon size={18} className="text-linkedin-text-secondary group-hover:text-white transition-colors" />
    <span className="text-sm font-medium">{text}</span>
  </div>
);

const ShortcutsCard = () => {
  return (
    <div className="bg-linkedin-card rounded-lg border border-linkedin-border flex flex-col py-2">
      <ShortcutItem icon={Bookmark} text="Saved items" />
      <ShortcutItem icon={Users} text="Groups" />
      <ShortcutItem icon={FileText} text="Newsletters" />
      <ShortcutItem icon={CalendarDays} text="Events" />
    </div>
  );
};

export default ShortcutsCard;
