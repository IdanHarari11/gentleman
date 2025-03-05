"use client";
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Compare } from './compare';

export const CompareSection = ({
  firstImage,
  secondImage,
  title = "הג'נטלמן של פעם לעומת הג'נטלמן המודרני",
  subtitle = "גרור את המחוון כדי לראות את ההבדל",
}) => {
  const [displayedText, setDisplayedText] = useState('');
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const [isTypingPaused, setIsTypingPaused] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Typing animation effect
  useEffect(() => {
    if (currentIndex < title.length && !isTypingPaused) {
      const timeout = setTimeout(() => {
        setDisplayedText(prev => prev + title[currentIndex]);
        setCurrentIndex(prev => prev + 1);
        
        // Add a pause after certain phrases
        if (title[currentIndex] === ' ' && 
            (currentIndex === 8 || currentIndex === 17 || currentIndex === 25)) {
          setIsTypingPaused(true);
          setTimeout(() => setIsTypingPaused(false), 400);
        }
      }, isTypingPaused ? 0 : Math.random() * 50 + 50); // Random typing speed for natural effect
      
      return () => clearTimeout(timeout);
    } else if (currentIndex >= title.length && !isTypingComplete) {
      setIsTypingComplete(true);
    }
  }, [currentIndex, title, isTypingPaused, isTypingComplete]);

  return (
    <section className="py-8 md:py-16 px-4 md:px-8 rtl">
      <div className="max-w-5xl mx-auto">
        <div className="mb-8 md:mb-12">
          {/* Typing animation for main header */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-center text-[#242422] tracking-tight leading-tight mb-2 md:mb-4 relative">
            <span className="relative inline-block">
              {displayedText}
              <motion.span 
                className="absolute -right-2 top-0 h-full w-[3px] bg-[#242422]"
                animate={{ opacity: [1, 0] }}
                transition={{ repeat: !isTypingComplete ? Infinity : 0, duration: 0.8 }}
              />
            </span>
          </h2>
          
          {/* Fade-in animation for subtitle */}
          <motion.p 
            className="text-xl md:text-2xl text-center text-[#343432] font-medium"
            initial={{ opacity: 0, y: 20 }}
            animate={{ 
              opacity: isTypingComplete ? 1 : 0, 
              y: isTypingComplete ? 0 : 20 
            }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {subtitle}
          </motion.p>
        </div>
        
        {/* Fade-in animation for the compare component */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ 
            opacity: isTypingComplete ? 1 : 0, 
            scale: isTypingComplete ? 1 : 0.95 
          }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Compare 
            firstImage={firstImage}
            secondImage={secondImage}
            className="shadow-xl mx-auto max-w-full md:max-w-4xl rounded-2xl"
            showHandlebar={true}
            slideMode="drag"
            initialSliderPercentage={30}
            autoplay={true}
            autoplayDuration={5000}
          />
        </motion.div>
        
        {/* Decorative elements */}
        <motion.div 
          className="mt-8 flex justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: isTypingComplete ? 1 : 0 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <div className="w-16 h-1 bg-[#242422] opacity-30 rounded-full"></div>
        </motion.div>
      </div>
    </section>
  );
}; 