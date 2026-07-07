import React from 'react';
import ProfileCard from './ProfileCard';
import AnalyticsCard from './AnalyticsCard';
import ShortcutsCard from './ShortcutsCard';

const LeftSidebar = () => {
  return (
    <div className="flex flex-col gap-2">
      <ProfileCard />
      <AnalyticsCard />
      <ShortcutsCard />
    </div>
  );
};

export default LeftSidebar;
