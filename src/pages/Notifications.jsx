import React from 'react';
import MainLayout from '../components/layout/MainLayout';

const mockNotifications = [
  {
    id: 1,
    avatar: "https://i.pravatar.cc/150?img=11",
    text: React.createElement('span', null, React.createElement('strong', null, 'John Doe'), ' viewed your profile.'),
    time: "2h",
    isNew: true,
  },
  {
    id: 2,
    avatar: "https://i.pravatar.cc/150?img=12",
    text: React.createElement('span', null, React.createElement('strong', null, 'Jane Smith'), ' accepted your connection request.'),
    time: "5h",
    isNew: false,
  },
  {
    id: 3,
    avatar: "https://i.pravatar.cc/150?img=33",
    text: React.createElement('span', null, 'Your post received 15 reactions. See what people are saying.'),
    time: "1d",
    isNew: false,
  }
];

const Notifications = () => {
  return (
    <MainLayout>
      <div className="bg-linkedin-card rounded-lg border border-linkedin-border overflow-hidden">
        <div className="p-4 border-b border-linkedin-border">
          <h1 className="text-xl font-semibold text-white">Notifications</h1>
        </div>
        <div>
          {mockNotifications.map((notification) => (
            <div 
              key={notification.id} 
              className={`flex items-start gap-4 p-4 cursor-pointer hover:bg-white/5 transition-colors ${notification.isNew ? 'bg-white/[0.02]' : ''}`}
            >
              <img 
                src={notification.avatar} 
                alt="Avatar" 
                className="w-12 h-12 rounded-full object-cover flex-shrink-0" 
              />
              <div className="flex-1 flex justify-between items-start">
                <div className="text-[14px] text-linkedin-text-secondary pr-4">
                  {notification.text}
                </div>
                <div className="flex flex-col items-end gap-2">
                  <span className="text-xs text-linkedin-text-secondary whitespace-nowrap">{notification.time}</span>
                  {notification.isNew && (
                    <div className="w-2.5 h-2.5 bg-blue-500 rounded-full"></div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </MainLayout>
  );
};

export default Notifications;
