import React from 'react';

const CtaButton = ({ children, onClick, className = '', ...props }) => {
  return (
    <button
      onClick={onClick}
      className={`cursor-pointer inline-flex items-center justify-center bg-[#242422] text-[#e2dfce] rounded-md px-8 py-4 text-xl font-medium transition-colors hover:bg-[#343432] shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-200 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default CtaButton; 