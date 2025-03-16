"use client";
import React from 'react';
import { motion } from 'framer-motion';

export const Slogan = ({ className }) => {
  return (
    <motion.div 
      className={`w-full bg-[#e2dfce] ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-4xl mx-auto">
        <motion.div 
          className="relative overflow-hidden"
          initial={{ y: 20 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <div className="text-center">
            <p className="text-xl md:text-2xl lg:text-3xl font-medium text-[#242422] mb-4 leading-relaxed neon-text">
              להיות אלפא ב2025 זה אוברייטד
            </p>
            <p className="text-xl md:text-2xl lg:text-3xl font-bold text-[#242422] leading-relaxed neon-text-bold">
              להיות גנטלמן מודרני זה השלב הבא במשחק
            </p>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full bg-[#d4d1c030] blur-xl"></div>
          <div className="absolute -bottom-8 -left-8 w-32 h-32 rounded-full bg-[#e2dfce40] blur-xl"></div>
        </motion.div>
      </div>

      {/* Add CSS for neon effect */}
      <style jsx global>{`
        .neon-text {
          text-shadow: 0 0 5px rgba(36, 36, 34, 0.3),
                      0 0 10px rgba(36, 36, 34, 0.2),
                      0 0 15px rgba(36, 36, 34, 0.1);
        }
        
        .neon-text-bold {
          text-shadow: 0 0 5px rgba(36, 36, 34, 0.4),
                      0 0 10px rgba(36, 36, 34, 0.3),
                      0 0 15px rgba(36, 36, 34, 0.2),
                      0 0 20px rgba(36, 36, 34, 0.1);
        }
      `}</style>
    </motion.div>
  );
};

export default Slogan; 