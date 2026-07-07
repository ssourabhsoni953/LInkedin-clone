import React from 'react';
import { currentUser } from '../../data/mockData';

const AnalyticsCard = () => {
  return (
    <div className="bg-linkedin-card rounded-lg border border-linkedin-border flex flex-col text-xs font-semibold text-linkedin-text-secondary">
      <div className="px-3 py-3 hover:bg-[#2b3036] cursor-pointer transition-colors flex justify-between items-center rounded-t-lg">
        <span>Profile viewers</span>
        <span className="text-linkedin-primary">{currentUser.profileViewers}</span>
      </div>
      <div className="px-3 py-3 hover:bg-[#2b3036] cursor-pointer transition-colors">
        <span>View all analytics</span>
      </div>

      <div className="border-t border-linkedin-border px-3 py-3 hover:bg-[#2b3036] cursor-pointer transition-colors rounded-b-lg flex flex-col gap-1 text-white">
        <div className="flex items-center gap-2">
          <div className="w-[14px] h-[14px] bg-gradient-to-tr from-yellow-600 to-yellow-400 rounded-[2px]"></div>
          <span className="hover:text-linkedin-primary transition-colors hover:underline text-xs font-semibold">Go to Sales Navigator</span>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsCard;
