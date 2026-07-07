import React from 'react';
import NewsWidget from './NewsWidget';
import PuzzlesWidget from './PuzzlesWidget';

const RightSidebar = () => {
  return (
    <div className="flex flex-col gap-2">
      <NewsWidget />
      <PuzzlesWidget />
    </div>
  );
};

export default RightSidebar;
