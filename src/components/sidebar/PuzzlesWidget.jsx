import React from 'react';
import { ChevronRight } from 'lucide-react';
import { puzzlesData } from '../../data/mockData';

const PuzzleIcon = ({ puzzle }) => (
  <div className="w-[40px] h-[40px] rounded-md grid grid-cols-2 grid-rows-2 gap-[1px] overflow-hidden shrink-0 border border-linkedin-border">
    <div className="flex items-center justify-center font-bold text-[10px] text-white" style={{ backgroundColor: puzzle.color1 }}>{puzzle.l1}</div>
    <div className="flex items-center justify-center font-bold text-[10px] text-white" style={{ backgroundColor: puzzle.color2 }}>{puzzle.l2}</div>
    <div className="flex items-center justify-center font-bold text-[10px] text-white bg-linkedin-border"></div>
    <div className="flex items-center justify-center font-bold text-[10px] text-white bg-linkedin-border"></div>
  </div>
);

const PuzzlesWidget = () => {
  return (
    <div className="bg-linkedin-card rounded-lg border border-linkedin-border p-4 flex flex-col">
      <h2 className="text-base font-semibold text-white mb-4">Today's puzzles</h2>
      
      <div className="flex flex-col gap-3">
        {puzzlesData.map((puzzle) => (
          <div key={puzzle.id} className="flex items-center justify-between cursor-pointer group">
            <div className="flex items-center gap-3">
              <PuzzleIcon puzzle={puzzle} />
              <div className="flex flex-col">
                <h3 className="text-[14px] font-semibold text-white group-hover:text-linkedin-primary transition-colors leading-tight">
                  {puzzle.name}
                </h3>
                <p className="text-[12px] text-linkedin-text-secondary leading-tight mt-0.5">
                  {puzzle.desc}
                </p>
              </div>
            </div>
            <ChevronRight size={20} className="text-white shrink-0" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PuzzlesWidget;
