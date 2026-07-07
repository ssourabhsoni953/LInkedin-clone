import React from 'react';
import { currentUser } from '../../data/mockData';

const ProfileCard = () => {
  return (
    <div className="bg-linkedin-card rounded-lg border border-linkedin-border overflow-hidden flex flex-col relative pb-4">
      <div className="h-[56px] w-full overflow-hidden">
        <img src={currentUser.coverImage} alt="Cover" className="w-full h-full object-cover" />
      </div>

      <div className="px-3 flex flex-col items-center mt-[-38px]">
        <div className="w-[72px] h-[72px] rounded-full border-2 border-linkedin-card overflow-hidden z-10 bg-linkedin-card">
          <img src={currentUser.avatar} alt="Avatar" className="w-full h-full object-cover" />
        </div>

        <div className="mt-4 text-left w-full border-b border-linkedin-border pb-3">
          <div className="flex items-center gap-1">
            <h2 className="text-base font-semibold text-white hover:underline cursor-pointer leading-tight">{currentUser.name}</h2>
            <div className="w-3 h-3 bg-[#c8b154] rounded-[2px] flex items-center justify-center text-[8px] font-bold text-black">in</div>
          </div>
          <p className="text-[12px] text-linkedin-text-secondary mt-1 leading-[1.4]">
            {currentUser.headline}
          </p>
          <p className="text-[12px] text-linkedin-text-secondary mt-1">
            {currentUser.location}
          </p>
        </div>

        <div className="w-full mt-3 px-1">
          <button className="w-full py-1 px-3 rounded-md border border-dashed border-linkedin-text-secondary text-linkedin-text-secondary text-sm font-medium hover:bg-gray-800 transition-colors flex items-center justify-center gap-1">
            <span className="text-lg leading-none mb-0.5">+</span> Experience
          </button>
        </div>
      </div>

      <div className="absolute top-2 right-2 text-xs font-semibold text-white hover:underline cursor-pointer z-10 drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">
        Premium
      </div>
    </div>
  );
};

export default ProfileCard;
