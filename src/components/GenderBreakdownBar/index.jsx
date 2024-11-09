import React, { useState, useEffect } from 'react';

const GenderBreakdownBar = ({ onChange }) => {
  const [femalePercentage, setFemalePercentage] = useState(50);

  useEffect(() => {
    onChange({ Female: femalePercentage, Male: 100 - femalePercentage });
  }, [femalePercentage, onChange]);

  const handleBarClick = (event) => {
    const bar = event.currentTarget;
    const clickX = event.clientX - bar.getBoundingClientRect().left;
    const newPercentage = Math.round((clickX / bar.offsetWidth) * 100);
    setFemalePercentage(newPercentage);
  };

  return (
    <div className="flex flex-col items-center w-full">
      <div className="flex justify-between w-full mb-2">
        <span>Female</span>
        <span>Male</span>
      </div>
      <div 
        className="w-full h-8 bg-gray-200 rounded-full cursor-pointer relative"
        onClick={handleBarClick}
      >
        <div 
          className="h-full bg-blue-500 rounded-l-full"
          style={{ width: `${femalePercentage}%` }}
        ></div>
        <div 
          className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-full bg-white px-2 py-1 rounded shadow"
        >
          {femalePercentage}% / {100 - femalePercentage}%
        </div>
      </div>
      <div className="flex justify-between w-full mt-2">
        <span>{femalePercentage}%</span>
        <span>{100 - femalePercentage}%</span>
      </div>
    </div>
  );
};

export default GenderBreakdownBar;
