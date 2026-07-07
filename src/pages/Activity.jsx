import React, { useState } from 'react';
import MainLayout from '../components/layout/MainLayout';
import { MessageCircle, ThumbsUp, Repeat2, Edit3 } from 'lucide-react';

const activities = [
  { id: 1, type: 'post', content: 'Just published a new article on React Server Components! Check it out.', time: '2 hours ago', icon: Edit3, color: 'text-green-400' },
  { id: 2, type: 'like', content: 'You liked Sarah Jenkins\'s post about tech hiring trends.', time: '5 hours ago', icon: ThumbsUp, color: 'text-blue-400' },
  { id: 3, type: 'comment', content: 'You commented "Great insights!" on Mark\'s photo.', time: '1 day ago', icon: MessageCircle, color: 'text-yellow-400' },
  { id: 4, type: 'share', content: 'You shared an interesting article from TechCrunch.', time: '2 days ago', icon: Repeat2, color: 'text-purple-400' },
  { id: 5, type: 'like', content: 'You liked a post from Microsoft.', time: '3 days ago', icon: ThumbsUp, color: 'text-blue-400' },
];

const Activity = () => {
  const [activeTab, setActiveTab] = useState('all');

  return (
    <MainLayout>
      <div className="bg-linkedin-card rounded-lg border border-linkedin-border overflow-hidden min-h-[500px]">
        <div className="p-6 border-b border-linkedin-border">
          <h1 className="text-2xl font-bold text-white mb-1">Activity</h1>
          <p className="text-linkedin-text-secondary text-sm">Review your past posts, comments, and reactions.</p>
        </div>

        <div className="flex px-4 border-b border-linkedin-border">
          {['All Activity', 'Posts', 'Comments'].map(tab => (
            <button 
              key={tab}
              onClick={() => setActiveTab(tab.toLowerCase().split(' ')[0])}
              className={`px-4 py-3 text-sm font-semibold border-b-2 transition-colors ${activeTab === tab.toLowerCase().split(' ')[0] ? 'border-green-600 text-white' : 'border-transparent text-linkedin-text-secondary hover:text-white'}`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="p-2">
          {activities.filter(a => activeTab === 'all' || (activeTab === 'posts' && a.type === 'post') || (activeTab === 'comments' && a.type === 'comment')).map((activity) => {
            const Icon = activity.icon;
            return (
              <div key={activity.id} className="flex gap-4 p-4 border-b border-linkedin-border/50 hover:bg-white/5 transition-colors cursor-pointer rounded-lg mx-2 my-1">
                <div className={`mt-1 ${activity.color} bg-[#2b3036] p-2 rounded-full h-fit`}>
                  <Icon size={16} />
                </div>
                <div className="flex-1">
                  <p className="text-white text-sm leading-relaxed">{activity.content}</p>
                  <p className="text-xs text-linkedin-text-secondary mt-2">{activity.time}</p>
                </div>
              </div>
            )
          })}
          
          {(activeTab === 'posts' || activeTab === 'comments') && activities.filter(a => (activeTab === 'posts' && a.type === 'post') || (activeTab === 'comments' && a.type === 'comment')).length === 0 && (
            <div className="text-center py-10 text-linkedin-text-secondary">
              <p>No {activeTab} to show.</p>
            </div>
          )}
        </div>
      </div>
    </MainLayout>
  );
};

export default Activity;
