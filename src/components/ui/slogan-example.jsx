"use client";
import React from 'react';
import { Slogan } from './slogan';

export const SloganExample = () => {
  return (
    <div className="min-h-screen bg-[#e2dfce]">
      {/* Header or other components would go here */}
      <div className="py-8">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-[#242422] mb-8">
          מועדון הג׳נטלמן
        </h1>
      </div>
      
      {/* Slogan component */}
      <Slogan />
      
      {/* Other content would go here */}
      <div className="py-16">
        {/* Content placeholder */}
      </div>
    </div>
  );
};

export default SloganExample; 