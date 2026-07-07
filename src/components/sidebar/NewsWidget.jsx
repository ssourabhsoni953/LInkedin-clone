import React from 'react';
import { Info, ChevronDown } from 'lucide-react';
import { newsData } from '../../data/mockData';

const NewsWidget = () => {
  return (
    <div className="bg-linkedin-card rounded-lg border border-linkedin-border p-4 flex flex-col">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-base font-semibold text-white">LinkedIn News</h2>
        <div className="w-[14px] h-[14px] bg-linkedin-text-secondary rounded-[2px] flex items-center justify-center cursor-pointer">
          <Info size={10} className="text-linkedin-card" strokeWidth={4} />
        </div>
      </div>
      
      <h3 className="text-[14px] text-linkedin-text-secondary font-semibold mb-2">Top stories</h3>
      
      <div className="flex flex-col">
        {newsData.map((item) => (
          <div key={item.id} className="py-1 cursor-pointer group">
            <h4 className="text-[14px] font-semibold text-[#e9eaec] group-hover:text-linkedin-primary transition-colors leading-tight mb-1 line-clamp-2">
              {item.title}
            </h4>
            <p className="text-[12px] text-linkedin-text-secondary">
              {item.time} {item.readers && `• ${item.readers} readers`}
            </p>
          </div>
        ))}
      </div>
      
      <button className="flex items-center gap-1 text-[13px] font-medium text-linkedin-text-secondary hover:text-white transition-colors hover:bg-[#2b3036] self-start py-1 px-2 rounded mt-2 -ml-2">
        Show more news <ChevronDown size={16} />
      </button>
    </div>
  );
};

export default NewsWidget;
