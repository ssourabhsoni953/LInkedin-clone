import React from 'react';
import { Video, Image as ImageIcon, FileText } from 'lucide-react';
import { currentUser } from '../../data/mockData';



const CreatePost = () => {
  return (
    <div className="bg-linkedin-card rounded-lg border border-linkedin-border p-3 mb-2">
      <div className="flex gap-2 ">
        <img src={currentUser.avatar} alt="Current User" className="w-12 h-12 rounded-full object-cover shrink-0" />
        <button className="flex-1 bg-transparent border border-linkedin-text-secondary hover:bg-[#38434f] text-left px-4 rounded-full text-linkedin-text-primary text-sm font-semibold transition-colors cursor-pointer ">
          Start a post
        </button>
      </div>

      <div className="flex justify-around items-center mt-3 ">
        <button className="flex items-center gap-2 hover:bg-[#2b3036] px-2 py-3 rounded-md transition-colors text-linkedin-text-secondary hover:text-linkedin-text-primary">
          <Video size={24} className="text-[#5f9b41]" />
          <span className="text-sm font-semibold text-linkedin-text-secondary">Video</span>
        </button>
        <button className="flex items-center gap-2 hover:bg-[#2b3036] px-2 py-3 rounded-md transition-colors text-linkedin-text-secondary hover:text-linkedin-text-primary">
          <ImageIcon size={24} className="text-[#378fe9]" />
          <span className="text-sm font-semibold text-linkedin-text-secondary">Photo</span>
        </button>
        <button className="flex items-center gap-2 hover:bg-[#2b3036] px-2 py-3 rounded-md transition-colors text-linkedin-text-secondary hover:text-linkedin-text-primary">
          <FileText size={24} className="text-[#e16745]" />
          <span className="text-sm font-semibold text-linkedin-text-secondary">Write article</span>
        </button>
      </div>
    </div>
  );
};

export default CreatePost;
