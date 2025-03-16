"use client";
import React from 'react';
import { motion } from 'framer-motion';

export const EnhancedSlogan = ({ 
  className,
  firstLine = "להיות אלפא ב2025 זה אוברייטד",
  secondLine = "להיות גנטלמן מודרני זה השלב הבא במשחק",
  variant = "default", // default, minimal, highlight
  withAnimation = true
}) => {
  // Style variants
  const variants = {
    default: {
      container: "bg-gradient-to-br from-[#d4d1c090] to-[#e2dfce90] border border-[#e2dfce80]",
      firstLine: "text-xl md:text-2xl lg:text-3xl font-medium text-[#242422] mb-4 neon-text",
      secondLine: "text-xl md:text-2xl lg:text-3xl font-bold text-[#242422] neon-text-bold"
    },
    minimal: {
      container: "bg-[#e2dfce50] border-b border-[#24242230]",
      firstLine: "text-lg md:text-xl lg:text-2xl font-medium text-[#242422] mb-3 neon-text-subtle",
      secondLine: "text-lg md:text-xl lg:text-2xl font-semibold text-[#242422] neon-text"
    },
    highlight: {
      container: "bg-gradient-to-br from-[#d4d1c0b0] to-[#e2dfceb0] border border-[#e2dfcea0] shadow-lg",
      firstLine: "text-xl md:text-2xl lg:text-3xl font-medium text-[#242422] mb-4 neon-text",
      secondLine: "text-xl md:text-2xl lg:text-3xl font-bold text-[#242422] neon-text-intense"
    }
  };
  
  const selectedVariant = variants[variant] || variants.default;
  
  const Container = withAnimation ? motion.div : 'div';
  const Content = withAnimation ? motion.div : 'div';
  
  const animationProps = withAnimation ? {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.8 }
  } : {};
  
  const contentAnimationProps = withAnimation ? {
    initial: { y: 20 },
    animate: { y: 0 },
    transition: { delay: 0.2, duration: 0.6 }
  } : {};

  return (
    <Container 
      className={`w-full py-12 md:py-16 px-4 md:px-8 bg-[#e2dfce] ${className || ''}`}
      {...animationProps}
    >
      <div className="max-w-4xl mx-auto">
        <Content 
          className={`${selectedVariant.container} rounded-3xl p-8 md:p-10 backdrop-blur-md glassmorphism-card relative overflow-hidden`}
          {...contentAnimationProps}
        >
          <div className="text-center">
            <p className={`${selectedVariant.firstLine} leading-relaxed`}>
              {firstLine}
            </p>
            <p className={`${selectedVariant.secondLine} leading-relaxed`}>
              {secondLine}
            </p>
          </div>
          
          {/* Decorative elements */}
          {variant !== 'minimal' && (
            <>
              <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full bg-[#d4d1c030] blur-xl"></div>
              <div className="absolute -bottom-8 -left-8 w-32 h-32 rounded-full bg-[#e2dfce40] blur-xl"></div>
            </>
          )}
        </Content>
      </div>

      {/* Add CSS for neon effect */}
      <style jsx global>{`
        .neon-text-subtle {
          text-shadow: 0 0 3px rgba(36, 36, 34, 0.2),
                      0 0 7px rgba(36, 36, 34, 0.1);
        }
        
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
        
        .neon-text-intense {
          text-shadow: 0 0 5px rgba(36, 36, 34, 0.5),
                      0 0 10px rgba(36, 36, 34, 0.4),
                      0 0 15px rgba(36, 36, 34, 0.3),
                      0 0 20px rgba(36, 36, 34, 0.2),
                      0 0 25px rgba(36, 36, 34, 0.1);
        }
      `}</style>
    </Container>
  );
};

export default EnhancedSlogan; 