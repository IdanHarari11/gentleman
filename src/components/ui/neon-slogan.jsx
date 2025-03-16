"use client";
import React from 'react';
import { motion } from 'framer-motion';

export const NeonSlogan = ({ className }) => {
  return (
    <motion.div 
      className={`w-full bg-[#242422] py-16 px-4 ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-4xl mx-auto">
        <motion.div 
          className="relative overflow-hidden rounded-3xl p-10 bg-[#24242295] border border-[#3a3a3850]"
          initial={{ y: 20 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <div className="text-center">
            <motion.p 
              className="text-xl md:text-2xl lg:text-3xl font-medium text-[#e2dfce] mb-6 leading-relaxed neon-text-gold"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              להיות אלפא ב2025 זה אוברייטד
            </motion.p>
            <motion.p 
              className="text-xl md:text-2xl lg:text-3xl font-bold text-[#e2dfce] leading-relaxed neon-text-teal"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              להיות גנטלמן מודרני זה השלב הבא במשחק
            </motion.p>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-full h-1/3 bg-gradient-to-b from-[#d4a01730] to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-[#00a89b30] to-transparent"></div>
          
          {/* Animated glow */}
          <motion.div 
            className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-[#d4a01720] blur-3xl"
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.5, 0.8, 0.5]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          ></motion.div>
          
          <motion.div 
            className="absolute -bottom-20 -left-20 w-40 h-40 rounded-full bg-[#00a89b20] blur-3xl"
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.5, 0.8, 0.5]
            }}
            transition={{
              duration: 4,
              delay: 2,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          ></motion.div>
        </motion.div>
      </div>

      {/* Add CSS for neon effect */}
      <style jsx global>{`
        .neon-text-gold {
          text-shadow: 0 0 5px rgba(212, 160, 23, 0.7),
                      0 0 10px rgba(212, 160, 23, 0.5),
                      0 0 15px rgba(212, 160, 23, 0.3),
                      0 0 20px rgba(212, 160, 23, 0.2),
                      0 0 30px rgba(212, 160, 23, 0.1);
        }
        
        .neon-text-teal {
          text-shadow: 0 0 5px rgba(0, 168, 155, 0.7),
                      0 0 10px rgba(0, 168, 155, 0.5),
                      0 0 15px rgba(0, 168, 155, 0.3),
                      0 0 20px rgba(0, 168, 155, 0.2),
                      0 0 30px rgba(0, 168, 155, 0.1);
        }
      `}</style>
    </motion.div>
  );
};

export default NeonSlogan; 